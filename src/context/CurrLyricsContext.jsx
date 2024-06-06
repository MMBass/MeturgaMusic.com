import React, { useState, useContext, useEffect } from 'react';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import fetchSongLyrics from '@services/fetchSongLyrics';
import fetchFullTrans from '@services/fetchFullTrans';
import fetchRsingletrans from '@services/fetchRsingletrans';
import putFullTrans from '@services/putFullTrans';

import utils from '@/utils.js';
import TUtils from '@/i18n-utils';
import constants from '@/constants';
import { ServiceTypes } from '@/enums';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider({ children }) {
    const loadersContext = useContext(LoadersContext);
    const bannersContext = useContext(BannersContext);

    const currSsSong = JSON.parse(sessionStorage.getItem('currSong'));
    const [song_id, setSong_id] = useState('');
    const [title, setTitle] = useState(currSsSong?.title || '');
    const [lines, setLines] = useState(currSsSong?.lines || []);
    const [translatedBy, setTranslatedBy] = useState(currSsSong?.service || '');
    const [videoId, setVideoId] = useState(currSsSong?.videoId || '');
    const [azureServerError, setAzureServerError] = useState(false); // Set if azure trans didn't work
    const [abort, setAbort] = useState(false); // Force to cancel prev song checkNextTrans()

    useEffect(() => {
        if (lines[0]) checkNextTrans();
        if (JSON.parse(!window.matchMedia('(display-mode: standalone)').matches && localStorage.getItem('meturgamm_songs'))?.length > 2) setAzureServerError(true); // Temporarily, gives every user 3 fast translations, and one on every visit (session)
    }, [lines, azureServerError]);

    useEffect(() => {
        if (!azureServerError && title.length > 2 && videoId.length > 2) {
            utils.lsSaveSong({ title, lines, videoId, translatedBy });
        } // Update the ls videoId after all the state sets
    }, [videoId]);

    const getSongLyrics = async (splittedSongTitle, songTitle) => {
        setAbort(true);

        songTitle = songTitle.replace(constants.allBracketsPattern, '').trim();
        let searchResultsParent = document.querySelectorAll(".gsc-expansionArea")[0];
        loadersContext.openLoader('backdrop');

        if (localStorageGetSong(songTitle, searchResultsParent)) { return }; // First try to get from local-storage

        try {
            const data = await fetchSongLyrics(splittedSongTitle);

            loadersContext.closeLoader('backdrop');
            sessionStorage.removeItem('currSong');
            if (searchResultsParent) searchResultsParent.style.pointerEvents = "all";

            if (data?.combined && Array.isArray(data?.combined)) {
                setCombined(songTitle, data);
            } else if (data?.lyrics) {
                resetSong()
                setSongLyrics(data, songTitle)
            } else {
                setAbort(false);
                bannersContext.createBanner('error', 'error', '', TUtils.LyricsNotFound, { actionText: TUtils.LyricsInGoogle, actionHref: constants.googleSearchRefUri + songTitle.replaceAll(' ', '+') + ' lyrics' });
            };
        } catch (e) {
            setAbort(false);
            console.log(e);
            loadersContext.closeLoader('backdrop');
            bannersContext.createBanner('error', 'error', TUtils.LyricsNotFound, '');
            if (searchResultsParent) searchResultsParent.style.pointerEvents = "all";
        }
    }

    const setCombined = (songTitle, data) => {
        setAbort(false);
        setTitle(songTitle);
        setSong_id(data.id);
        setLines(data.combined);
        if (data.combined[2].trans.length > 1 && data.service) setTranslatedBy(data.service);
        if (data.videoId) setVideoId(data.videoId);
        else setVideoId('');

        utils.lsSaveSong({ title: songTitle, videoId: data.videoId, lines: data.combined, service: data.service || 'legacy' });
        utils.clearGsc();

        sessionStorage.setItem('currSong', JSON.stringify({
            lines: data.combined,
            title: songTitle,
            videoId: data.videoId,
            service: data.service || ServiceTypes.LEGACY
        }));
    }

    const setSongLyrics = (data, songTitle) => {
        setTitle(songTitle);
        let newLines = [];

        data.lyrics.split(constants.lineBreakPattern).map((line) => {
            if (line.length >= 2) {
                if (utils.isMostlyEnglish(line)) {
                    if (line.length > 90) {
                        let byCommas = line.split(',');  // Split by commas if the line is too long
                        if (byCommas[0].length > 10) {
                            byCommas.map((byCommaLine) => {
                                newLines.push({ src: byCommaLine, trans: '', transError: false });
                            });
                        } else {
                            newLines.push({ src: line.replace('.', ''), trans: '', transError: false });
                        }
                    } else {
                        newLines.push({ src: line.replace('.', ''), trans: '', transError: false });
                    }
                } else {
                    console.log("Not supported lang: " + line);
                    newLines.push({ src: "*NOT SUPPORTED TEXT*", trans: '', transError: false });
                }
            };
        });
        setAbort(false);
        setLines(newLines);
        if (data.videoId) setVideoId(data.videoId);
        else setVideoId('');
        utils.clearGsc();
    }

    const localStorageGetSong = (songTitle, searchResultsParent) => {
        let lsSong = utils.lsFindSong(songTitle);
        if (lsSong && Array.isArray(lsSong.lines)) {
            if (searchResultsParent) searchResultsParent.style.pointerEvents = "all";
            setTitle(songTitle);
            setLines(lsSong.lines);
            setVideoId(lsSong.videoId);
            setTranslatedBy(lsSong.service);

            utils.clearGsc();
            loadersContext.closeLoader('backdrop');

            sessionStorage.setItem('currSong', JSON.stringify({
                lines: lsSong.lines,
                title: songTitle,
                videoId: lsSong.videoId,
                service: lsSong.service
            }));

            setAbort(false);
            return true;
        } else {
            return false;
        }
    }

    const checkNextTrans = () => {
        if (abort) { return };
        lines.every((line, index) => {
            if (!line.trans.length || line.transError) {
                azureServerError ? gGetSingleLineTrans(line.src, index) : getFullTrans(); // Get single translation if azure is blocked
                return false; // Break the loop (will start again after getSingleLineTrans(); )
            }
            return true;
        });
    };

    const getFullTrans = async () => {
        setTranslatedBy('');

        try {
            const data = await fetchFullTrans(lines, song_id, title);

            let newLines = [];

            if (data?.trans.length) {
                data.trans.map((li, i) => {
                    newLines[i] = { src: lines[i].src, trans: li };
                });

                setLines(newLines);

                utils.lsSaveSong({
                    title: title,
                    lines: newLines,
                    videoId: videoId, // The id remains the first state, an empty string 
                    service: data.service, // The service and title updating correctly
                });

                sessionStorage.setItem('currSong', JSON.stringify({
                    lines: newLines,
                    title: title,
                    videoId: videoId, // The id remains the first state, an empty string 
                    service: data.service // The service and title updating correctly
                }));

                setTranslatedBy(data.service);
            } else {
                console.error("status is ok but azure translation missing");
                setAzureServerError(true); // Works.  // checkNextTrans(); // doesn't work
            }
        } catch (e) {
            console.log(e);
            setAzureServerError(true); // Works.  // checkNextTrans(); // doesn't work
        }
    };

    const gGetSingleLineTrans = async (src, index) => {
        try {
            let newLines = [...lines];
            const response = await fetch(constants.gUrl + encodeURI(src));

            const data = await response.json();

            var translatedTexts = [];
            if (data && data[0]) {
                data[0].forEach(elem => translatedTexts.push(elem[0])); // Extract the translated text

                newLines[index] = { src: src, trans: translatedTexts.join(" ") };
                setLines(newLines);
                if (translatedBy !== (ServiceTypes.GOOGLE)) setTranslatedBy(ServiceTypes.GOOGLE);

                if (index + 1 == lines.length) {
                    utils.lsSaveSong({ title: title, videoId: videoId, lines: newLines, service: ServiceTypes.GOOGLE });
                    sessionStorage.setItem('currSong', JSON.stringify({
                        lines: newLines,
                        title: title,
                        videoId: videoId,
                        service: ServiceTypes.GOOGLE
                    }));

                    putFullTrans(title, newLines, ServiceTypes.GOOGLE);
                    setAzureServerError(false);
                };
            } else {
                throw new Error("Google Translation failed.");
            }
        } catch (error) {
            console.error("Google Translation error:", error);
            rGetSingleLineTrans(src, index);
            setTranslatedBy('');
        }
    }

    const rGetSingleLineTrans = async (src, index) => {
        let newLines = [...lines];

        try {
            const data = await fetchRsingletrans(src);

            if (data?.trans) {
                newLines[index] = { src: src, trans: data?.trans };
            } else {
                if (lines[index].trans === undefined) {
                    newLines[index] = { src: src, trans: TUtils.TryingAgain + "..", transError: true };
                } else if (lines[index].trans === TUtils.TryingAgain + "..") {
                    newLines[index] = { src: src, trans: TUtils.TransMissing, transError: false };
                }
            }
        } catch (e) {
            if (lines[index].trans === '') {
                newLines[index] = { src: src, trans: TUtils.TryingAgain + "..", transError: true };
            } else if (lines[index].trans === TUtils.TryingAgain + "..") {
                newLines[index] = { src: src, trans: TUtils.TransMissing, transError: false };
            }
        }

        setLines(newLines);

        let lastTrans = lines[lines.length - 1]?.trans;

        if (lastTrans.length >= 1) {
            sessionStorage.setItem('currSong', JSON.stringify({
                lines: newLines,
                title: title,
                videoId: videoId,
                service: ServiceTypes.REVERSO
            }));
            setTranslatedBy(ServiceTypes.REVERSO);
            setAzureServerError(false);
        }
    };

    const resetSong = (changeUrl) => {
        sessionStorage.removeItem('currSong');
        setLines([]);
        setAbort(true);
        setTitle('');
        setVideoId('');
        if(changeUrl) changeUrl('');
    };

    const actions = { getSongLyrics, resetSong };
    return (
        <CurrLyricsContext.Provider value={{ title, lines, azureServerError, translatedBy, videoId, ...actions }}>
            {children}
        </CurrLyricsContext.Provider>
    );
};