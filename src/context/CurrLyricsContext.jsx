import React, { useState, useContext, useEffect, useRef } from 'react';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import fetchSongLyrics from '@services/fetchSongLyrics';
import fetchFullTrans from '@services/fetchFullTrans';
import fetchRsingletrans from '@services/fetchRsingletrans';
import putFullTrans from '@services/putFullTrans';

import utils from '@/utils.js';
import TUtils from '@/i18n-utils';
import constants from '@/constants';
import { ServiceTypes, LyricTypes } from '@/enums';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider({ children }) {
    const loadersContext = useContext(LoadersContext);
    const bannersContext = useContext(BannersContext);

    const currSsSong = (() => {
        const sS = JSON.parse(sessionStorage.getItem('currSong'));
        return (sS && sS.title && Array.isArray(sS.lines) && sS.lines.length > 1) ? sS : null;
    })();

    const [title, setTitle] = useState(currSsSong?.title || '');
    const [lines, setLines] = useState(currSsSong?.lines || []);
    const [linesVersion, setLinesVersion] = useState((currSsSong?.lines?.[1]?.src + currSsSong?.lines?.[2]?.src) || '') // For now - is the first line of the song;
    const [translatedBy, setTranslatedBy] = useState(currSsSong?.service || '');
    const [lyricsError, setLyricsError] = useState(false);
    const [videoId, setVideoId] = useState(currSsSong?.videoId || '');
    const [azureServerError, setAzureServerError] = useState(false); // Set if azure trans didn't work
    const [abort, setAbort] = useState(false); // Force to cancel prev song checkNextTrans()

    const mounted = useRef(true);

    useEffect(() => {
        return () => {
            mounted.current = false;  // Set to false when component unmounts
        };
    }, []);

    useEffect(() => {
        if (lines[0] && linesVersion === lines[1]?.src + lines[2]?.src) checkNextTrans();

        // if (JSON.parse(!window.matchMedia('(display-mode: standalone)').matches && localStorage.getItem('meturgamm_songs'))?.length > 9) setAzureServerError(true); // Gives every user 10 fast translations, and one on every visit (session)
    }, [lines, azureServerError]);

    useEffect(() => {
        if (title.length > 2 && videoId.length > 2 && lines[0]?.src.length > 0 ) {
            if (lyricsError) utils.lsSaveSongHistory({ title: title, videoId: videoId, lines: [], service: '' });
            else utils.lsSaveSongHistory({ title, lines, videoId, translatedBy });
        } // Update the ls videoId after all the state sets
    }, [videoId]);

    const getSongLyrics = async (splittedSongTitle, songTitle, webSongUrl, setSearchProccessing) => {

        if (utils.compareTitles(songTitle, title)) return; // If the song is the same, do nothing

        setAbort(true);

        songTitle = songTitle.replace(constants.allBracketsPattern, '').trim();
        let searchResultsParent = document.querySelectorAll(".gsc-expansionArea")[0];
        loadersContext.openLoader('backdrop');

        if (localStorageGetSong(songTitle, searchResultsParent)) { return }; // First try to get from local-storage

        try {
            const data = await fetchSongLyrics(splittedSongTitle, webSongUrl);

            loadersContext.closeLoader('backdrop');
            sessionStorage.removeItem('currSong');
            if (searchResultsParent) searchResultsParent.style.pointerEvents = "all";

            if (data?.combined && Array.isArray(data?.combined)) {
                setCombined(songTitle, data);
            } else if (data?.lyrics) {
                resetSong();
                setSongLyrics(data, songTitle);
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
        setLinesVersion(data.combined[1].src + data.combined[2].src);
        setTitle(songTitle);
        setLines(data.combined);
        if (data.combined[2].trans.length > 1 && data.service) setTranslatedBy(data.service);
        if (data.videoId) setVideoId(data.videoId);
        else setVideoId('');

        utils.clearGsc();

        if (data.combined[0]?.src) {
            utils.lsSaveSongHistory({ title: songTitle, videoId: data.videoId, lines: data.combined, service: data.service || 'legacy' });

            sessionStorage.setItem('currSong', JSON.stringify({
                lines: data.combined,
                title: songTitle,
                videoId: data.videoId,
                service: data.service || ServiceTypes.LEGACY
            }));
        }
    }

    const setSongLyrics = (data, songTitle) => {
        setTitle(songTitle);
        let newLines =  data.lyrics;
        
        setLinesVersion(newLines[1].src + newLines[2].src);

        // TO TRACK if moving the setVideoId before setLines is not breaking the setVideoId process
        if (data.videoId) setVideoId(data.videoId);
        else setVideoId('');

        if (data.LSRC === LyricTypes.SH_MMTCH) setLyricsError(true);

        setAbort(false);
        setLines(newLines);
        utils.clearGsc();
    }

    const localStorageGetSong = (songTitle, searchResultsParent) => {
        let lsSong = utils.lsFindSong(songTitle);
        if (lsSong?.title && lsSong.lines.length > 0 && lsSong.lines[0].src) {
            if (searchResultsParent) searchResultsParent.style.pointerEvents = "all";
            setTitle(songTitle);
            setLinesVersion(lsSong.lines[1].src + lsSong.lines[2].src);
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
        setAbort(true); // TODO track if not cousing problems
        setTranslatedBy('');

        try {
            const data = await fetchFullTrans(lines.map(line => ({ ...line, src: line.src.replaceAll('PHARSE_BREAK', '') })), title); // PHARSE_BREAK Legacy - exsist in some saved songs, TODO Remove them from database

            let newLines = [];

            if (data?.trans.length) {
                data.trans.map((li, i) => {
                    newLines[i] = { src: lines[i].src, trans: li };
                });

                setLines(newLines);

                if (newLines[0]?.src) {

                    if (!lyricsError) {
                        utils.lsSaveSongHistory({
                            title: title,
                            lines: newLines,
                            videoId: videoId, // The id remains the first state, an empty string 
                            service: data.service, // The service and title updating correctly
                        });
                    }
                    if (lyricsError) utils.lsSaveSongHistory({ title: title, videoId: videoId, lines: [], service: '' });

                    sessionStorage.setItem('currSong', JSON.stringify({
                        lines: newLines,
                        title: title,
                        videoId: videoId, // The id remains the first state, an empty string 
                        service: data.service // The service and title updating correctly
                    }));
                }

                setTranslatedBy(data.service);
            } else {
                console.error("status is ok but azure translation missing");
                setAzureServerError(true); // Works.  // checkNextTrans(); // doesn't work
                setAbort(false);
            }
        } catch (e) {
            console.log(e);
            setAzureServerError(true); // Works.  // checkNextTrans(); // doesn't work
            setAbort(false);
        }
    };

    const gGetSingleLineTrans = async (src, index) => {
        if (abort) return;
        if (lines[0] && linesVersion !== lines[1]?.src + lines[2]?.src) return;
        if (!mounted.current) return;  // Check mounted status before fetch

        try {
            let newLines = [...lines];
            const response = await fetch(constants.gUrl + encodeURI(src));
            const data = await response.json();

            if (abort) return;
            if (lines[0] && linesVersion !== lines[1]?.src + lines[2]?.src) return;
            if (!mounted.current) return;  // Check mounted status before fetch

            if (abort) return;
            if (lines[0] && linesVersion !== lines[1]?.src + lines[2]?.src) return;

            var translatedTexts = [];
            if (data && data[0]) {
                data[0].forEach(elem => translatedTexts.push(elem[0])); // Extract the translated text

                newLines[index] = { src: src, trans: translatedTexts.join(" ") };
                setLines(newLines);
                if (translatedBy !== (ServiceTypes.GOOGLE)) setTranslatedBy(ServiceTypes.GOOGLE);

                if (index + 1 == lines.length) {

                    if (!lyricsError) utils.lsSaveSongHistory({ title: title, videoId: videoId, lines: newLines, service: ServiceTypes.GOOGLE });
                    if (lyricsError) utils.lsSaveSongHistory({ title: title, videoId: videoId, lines: [], service: '' });

                    sessionStorage.setItem('currSong', JSON.stringify({
                        lines: newLines,
                        title: title,
                        videoId: videoId,
                        service: ServiceTypes.GOOGLE
                    }));

                    // putFullTrans(title, newLines, ServiceTypes.GOOGLE); // Off until we sure the correct title is being sent
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
        if (abort) return;
        if (lines[0] && linesVersion !== lines[1]?.src + lines[2]?.src) return;
        if (!mounted.current) return;  // Check mounted status before fetch

        let newLines = [...lines];

        try {
            const data = await fetchRsingletrans(src);

            if (abort) return;
            if (lines[0] && linesVersion !== lines[1]?.src + lines[2]?.src) return;
            if (!mounted.current) return;  // Check mounted status before fetch

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
        if (changeUrl) changeUrl('');
    };

    const actions = { getSongLyrics, resetSong };
    return (
        <CurrLyricsContext.Provider value={{ title, lines, linesVersion, azureServerError, translatedBy, videoId, ...actions }}>
            {children}
        </CurrLyricsContext.Provider>
    );
};