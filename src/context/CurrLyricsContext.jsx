import React, { useState, useContext, useEffect } from 'react';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import fetchSongLyrics from '@services/fetchSongLyrics';
import fetchFullTrans from '@services/fetchFullTrans';
import fetchRsingletrans from '@services/fetchRsingletrans';
import putFullTrans from '@services/putFullTrans';

import utils from '@/utils.js';
import TUtils from '@/i18n-utils';
import Constants from '@/constants';
import { ServiceTypes } from '@/enums';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider({ children }) {
    const loadersContext = useContext(LoadersContext);
    const bannersContext = useContext(BannersContext);

    const currSsSong = JSON.parse(sessionStorage.getItem('currSong'));
    const [song_id, setSong_id] = useState('');
    const [title, setTitle] = useState(currSsSong?.Title || '');
    const [lines, setLines] = useState(currSsSong?.Lines || []);
    const [translatedBy, setTranslatedBy] = useState(currSsSong?.Service || '');
    const [videoId, setVideoId] = useState(currSsSong?.VideoId || '');

    const [azureServerError, setAzureServerError] = useState(false); // set if azure trans didn't work
    const [abort, setAbort] = useState(false); // force to cancel prev song checkNextTrans

    useEffect(() => {
        if (lines[0]) checkNextTrans();

        // Temporarly, gives every user 3 fast translations, and one on every visit (session)
        if (JSON.parse(localStorage.getItem('meturgamm_songs'))?.length > 2) setAzureServerError(true);
    }, [lines, azureServerError]);

    const getSongLyrics = async (splittedSongTitle, songTitle) => {
        setAbort(true);

        songTitle = songTitle.replace(Constants.allBracketsPattern, '').trim();
        let linesParent = document.querySelectorAll(".gsc-expansionArea")[0];
        loadersContext.openLoader('backdrop');

        // first try to get from local-storage
        if (localStorageGetSong(songTitle, linesParent)) {
            return;
        }

        try {
            const data = await fetchSongLyrics(splittedSongTitle);

            loadersContext.closeLoader('backdrop');
            sessionStorage.removeItem('currSong');
            setVideoId('');

            if (linesParent) linesParent.style.pointerEvents = "all";

            if (data?.combined && Array.isArray(data?.combined)) {
                setCombined(songTitle, data);
            } else if (data?.lyrics) {
                setSongLyrics(data, songTitle)
            } else {
                setAbort(false);
                bannersContext.createBanner('error', 'error', '', TUtils.LyricsNotFound, { actionText: TUtils.LyricsInGoogle, actionHref: Constants.googleSearchRefUri + songTitle.replaceAll(' ', '+') + ' lyrics' });
            };
        } catch (e) {
            setAbort(false);
            console.log(e);
            loadersContext.closeLoader('backdrop');
            bannersContext.createBanner('error', 'error', TUtils.LyricsNotFound, '');
            if (linesParent) linesParent.style.pointerEvents = "all";
        }
    }

    const setCombined = (songTitle, data) => {
        setAbort(false);
        setTitle(songTitle);
        setSong_id(data.id);
        setLines(data.combined);
        if (data.videoId) setVideoId(data.videoId);
        else setVideoId('');

        if (data.combined[2].trans.length > 1 && data.service) setTranslatedBy(data.service);

        utils.lsSaveSong({ title: songTitle, videoId: '', lines: data.combined, service: data.service || 'legacy' });
        utils.clearGsc();
        sessionStorage.setItem('currSong', JSON.stringify({
            Lines: data.combined,
            Title: songTitle,
            VideoId: data.videoId,
            Service: data.service || ServiceTypes.LEGACY
        }));
    }

    const setSongLyrics = (data, songTitle) => {
        setTitle(songTitle);
        let newLines = [];

        data.lyrics.split(Constants.lineBreakPattern).map((line) => {
            if (line.length >= 2) {

                if (utils.isMostlyEnglish(line)) {

                    if (line.length > 90) {
                        // split by commas if the line is too long
                        let byCommas = line.split(',');
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
        if (data.videoId) {
            setVideoId(data.videoId);
        }
        utils.clearGsc();
    }

    const localStorageGetSong = (songTitle, linesParent) => {
        let lsSong = utils.lsFindSong(songTitle);
        if (lsSong && Array.isArray(lsSong.lines)) {
            if (linesParent) linesParent.style.pointerEvents = "all";
            setTitle(songTitle);
            setLines(lsSong.lines);
            setVideoId(lsSong.videoId);
            setTranslatedBy(lsSong.service);

            utils.clearGsc();
            loadersContext.closeLoader('backdrop');

            sessionStorage.setItem('currSong', JSON.stringify({
                Lines: lsSong.lines,
                Title: songTitle,
                VideoId: lsSong.videoId,
                Service: lsSong.service
            }));

            setAbort(false);

            return true;
        } else {
            return false;
        }
    }

    const checkNextTrans = () => {
        if (abort) {
            // setLines([]); // todo - fixing the removeLines problem, but clearing the lines when searching new song. 
            return;
        };
        lines.every((line, index) => {
            if (!line.trans.length || line.transError) {
                azureServerError ? GgetSingleLineTrans(line.src, index) : getFullTrans(); // get single translation if azure is blocked
                return false; // break the loop (will start again after getSingleLineTrans(); )
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
                utils.lsSaveSong({ title: title, lines: newLines, service: data.service });
                console.log(data);
                setTranslatedBy(data.service);

                sessionStorage.setItem('currSong', JSON.stringify({
                    Lines: newLines,
                    Title: title,
                    VideoId: videoId,
                    Service: data.service
                }));

            } else {
                console.error("status is ok but azure translation missing");
                // checkNextTrans(); // doesn't work
                setAzureServerError(true); // works
            }
        } catch (e) {
            console.log(e);
            // checkNextTrans(); // doesn't work
            setAzureServerError(true); // works
        }
    };

    const GgetSingleLineTrans = async (src, index) => {
        try {
            let newLines = [...lines];
            const response = await fetch(Constants.gUrl + encodeURI(src));

            const data = await response.json();

            var translatedTexts = [];
            if (data && data[0]) {
                data[0].forEach((element) => {
                    translatedTexts.push(element[0]);
                });

                newLines[index] = { src: src, trans: translatedTexts.join(" ") };
                setLines(newLines);

                if (translatedBy !== (ServiceTypes.GOOGLE)) {
                    setTranslatedBy(ServiceTypes.GOOGLE);
                }

                if (index + 1 == lines.length) {
                    utils.lsSaveSong({ title: title, videoId: videoId, lines: newLines, service: ServiceTypes.GOOGLE });

                    sessionStorage.setItem('currSong', JSON.stringify({
                        Lines: newLines,
                        Title: title,
                        VideoId: videoId,
                        Service: ServiceTypes.GOOGLE
                    }));

                    putFullTrans(newLines, ServiceTypes.GOOGLE);
                    setAzureServerError(false);
                };

            } else {
                throw new Error("Google Translation failed.");
            }
        } catch (error) {
            console.error("Google Translation error:", error);
            RgetSingleLineTrans(src, index);
            setTranslatedBy('');
        }
    }

    const RgetSingleLineTrans = async (src, index) => {
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
                Lines: newLines,
                Title: title,
                VideoId: videoId,
                Service: ServiceTypes.REVERSO
            }));

            setTranslatedBy(ServiceTypes.REVERSO);
            setAzureServerError(false);
        }
    };

    const removeSsLines = (setSearchParams) => {
        setAbort(true);
        sessionStorage.removeItem('currSong');
        setLines([]);
        setTitle('');
        setVideoId('');
        setSearchParams('');
    };

    const actions = { getSongLyrics, removeSsLines };

    return (
        <CurrLyricsContext.Provider value={{ title, lines, azureServerError, translatedBy, videoId, ...actions }}>
            {children}
        </CurrLyricsContext.Provider>
    );
};