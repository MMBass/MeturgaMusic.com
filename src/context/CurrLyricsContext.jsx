import React, { useState, useContext, useEffect } from 'react';

import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import utils from '@/utils';
import TUtils from '@/i18n-utils';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider(props) {
    const loadersContext = useContext(LoadersContext);
    const bannersContext = useContext(BannersContext);

    const [song_id, setSong_id] = useState('');
    const [title, setTitle] = useState((sessionStorage.getItem('currLines') && sessionStorage.getItem('currSongTitle')) || '');
    const [lines, setLines] = useState(JSON.parse(sessionStorage.getItem('currLines')) || []);
    const [azureServerError, setAzureServerError] = useState(false); // set if azure trans didn't work
    const [translatedBy, setTranslatedBy] = useState((sessionStorage.getItem('currLines') && sessionStorage.getItem('currService')) || ''); // depends on azureServerError except when combined (that for now always microsoft)
    const [abort, setAbort] = useState(false); // force to cancel prev song checkNextTrans
    const [videoId, setVideoId] = useState(sessionStorage.getItem('currVideoId') || '');

    useEffect(() => {
        if (lines[0]) {
            checkNextTrans();
        }
    }, [lines, azureServerError]);

    useEffect(() => {

        // Temporary give every user 3 fast translations
        if (JSON.parse(localStorage.getItem('meturgamm_songs'))?.length >= 2) {
            setAzureServerError(true);
        }
    }, []);

    const serverUri = 'https://musicline-backend.vercel.app';

    // const serverUri = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'http://localhost:5000' : 'https://musicline-backend.vercel.app';

    const getSongLyrics = (splittedSongTitle, songTitle) => {
        setAbort(true);

        songTitle = songTitle.replace(/[\])}[{(]/g, '').trim();
        let linesParent = document.querySelectorAll(".gsc-expansionArea")[0];
        loadersContext.openLoader('backdrop');

        // first try to get from LS
        if (localStorageGetSong(songTitle, linesParent)) {
            return;
        }

        fetch(`${serverUri}/lyrics?initId=` + localStorage.getItem('init'), {
            // mode: "no-cors",
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "currSong": splittedSongTitle
            })
        }).then(response => response.json())
            .then(async data => {

                loadersContext.closeLoader('backdrop');
                sessionStorage.removeItem('currLines');
                sessionStorage.removeItem('currSongTitle');
                setVideoId('');

                if (linesParent) linesParent.style.pointerEvents = "all";

                if (data?.combined && Array.isArray(data?.combined)) {
                    setAbort(false);
                    setTitle(songTitle);
                    setSong_id(data.id);
                    setLines(data.combined);
                    if (data.videoId) setVideoId(data.videoId);
                    else setVideoId('');

                    if (data.combined[2].trans.length > 1 && data.service) setTranslatedBy(data.service + '-translator');

                    utils.lsSaveSong({ title: songTitle, videoId: data.videoId, lines: data.combined, service: data.service || '' });
                    utils.clearGsc();
                    sessionStorage.setItem('currLines', JSON.stringify(data.combined));
                    sessionStorage.setItem('currSongTitle', (songTitle));
                    sessionStorage.setItem('currVideoId', (data.videoId));

                } else if (data?.lyrics) {
                    setTitle(songTitle);
                    let ly = data.lyrics;
                    let newLines = [];

                    ly.split(/(?:\r\n|\r|\n)/g).map((line) => {
                        if (line.length >= 2) {

                            if (utils.isMostlyEnglish(line)) {

                                if (line.length > 90) { // split by commas if the line is too long
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
                    if (data.videoId) setVideoId(data.videoId);

                    utils.clearGsc();
                } else {
                    setAbort(false);
                    bannersContext.createBanner('error', 'error', '', TUtils.LyricsNotFound, { actionText: TUtils.LyricsInGoogle, actionHref: 'https://www.google.com/search?q=' + songTitle.replaceAll(' ', '+') + ' lyrics' });
                };
            }
            ).catch((e) => {
                setAbort(false);
                console.log(e);
                loadersContext.closeLoader('backdrop');
                bannersContext.createBanner('error', 'error', TUtils.LyricsNotFound, '');
                if (linesParent) linesParent.style.pointerEvents = "all";
            });
    }

    const localStorageGetSong = (songTitle, linesParent) => {
        let lsSong = utils.lsFindSong(songTitle);
        if (lsSong && Array.isArray(lsSong.lines)) {
            if (linesParent) linesParent.style.pointerEvents = "all";
            setTitle(songTitle);
            setLines(lsSong.lines);
            setVideoId(lsSong.videoId);
            setTranslatedBy(lsSong.service + '-translator');

            utils.clearGsc();
            loadersContext.closeLoader('backdrop');

            sessionStorage.setItem('currLines', JSON.stringify(lsSong.lines));
            sessionStorage.setItem('currSongTitle', (songTitle));
            sessionStorage.setItem('currVideoId', (lsSong.videoId));
            sessionStorage.setItem('currService', (lsSong.service));
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

    const getFullTrans = () => {
        setTranslatedBy('');

        fetch(`${serverUri}/trans/lines`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "lines": lines,
                song_id: song_id,
                title: title
            })
        })
            .then(response => response.json())
            .then(data => {

                let newLines = [];

                if (data?.trans.length) {
                    data.trans.map((li, i) => {
                        newLines[i] = { src: lines[i].src, trans: li };
                    });

                    setLines(newLines);
                    setVideoId(data.videoId);
                    utils.lsSaveSong({ title: title, videoId: data.videoId, lines: newLines, service: data.service });
                    setTranslatedBy(data.service + '-translator');

                    sessionStorage.setItem('currLines', JSON.stringify(newLines));
                    sessionStorage.setItem('currSongTitle', (title));
                    sessionStorage.setItem('currVideoId', (videoId));

                } else {
                    console.error("status is ok but azure translation missing");
                    // checkNextTrans(); // doesn't work
                    setAzureServerError(true); // works

                }
            }
            ).catch((e) => {
                console.log(e);
                // checkNextTrans(); // doesn't work
                setAzureServerError(true); // works

            });
    };

    const GgetSingleLineTrans = async (src, index) => {
        try {
            let newLines = [...lines];
            let gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${'he'}&dt=t&q=${encodeURIComponent(
                src
            )}`;
            const response = await fetch(gUrl);

            const data = await response.json();

            var translatedTexts = [];
            if (data && data[0]) {
                data[0].forEach((element) => {
                    translatedTexts.push(element[0]);
                });

                newLines[index] = { src: src, trans: translatedTexts.join(" ") };
                setLines(newLines);

                if (index + 1 == lines.length) {
                    utils.lsSaveSong({ title: title, videoId: data.videoId, lines: newLines, service: "google" });
                    sessionStorage.setItem('currLines', JSON.stringify(newLines));
                    sessionStorage.setItem('currSongTitle', (title));
                    sessionStorage.setItem('currVideoId', (data.videoId));
                    putFullTrans(newLines);
                    setAzureServerError(false);
                };

            } else {
                throw new Error("Google Translation failed.");
            }
        } catch (error) {
            console.error("Google Translation error:", error);
            RetSingleLineTrans(src, index);
            setTranslatedBy('');
        }

        if (translatedBy !== ('google-translate')) {
            setTranslatedBy('google-translate');
        }
    }

    const RetSingleLineTrans = (src, index) => {
        let newLines = [...lines];

        fetch(`${serverUri}/trans/single-line?initId=` + localStorage.getItem('init'), {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "line": encodeURI(src)
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data?.trans) {

                    newLines[index] = { src: src, trans: data?.trans };
                    setLines(newLines);

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(lines));
                        sessionStorage.setItem('currSongTitle', (title));
                        sessionStorage.setItem('currVideoId', (videoId));
                    }
                } else {
                    if (lines[index].trans === undefined) {
                        newLines[index] = { src: src, trans: TUtils.TryingAgain + "..", transError: true };
                    } else if (lines[index].trans === TUtils.TryingAgain + "..") {
                        newLines[index] = { src: src, trans: TUtils.TransMissing, transError: false };
                    }

                    setLines(newLines);

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(newLines));
                        sessionStorage.setItem('currSongTitle', (title));
                        sessionStorage.setItem('currVideoId', (videoId));
                    }
                }
            }
            ).catch((e) => {
                if (lines[index].trans === '') {
                    newLines[index] = { src: src, trans: TUtils.TryingAgain + "..", transError: true };
                } else if (lines[index].trans === TUtils.TryingAgain + "..") {
                    newLines[index] = { src: src, trans: TUtils.TransMissing, transError: false };
                }

                setLines(newLines);

                let lastTrans = lines[lines.length - 1]?.trans;

                if (lastTrans.length >= 1) {
                    sessionStorage.setItem('currLines', JSON.stringify(lines));
                    sessionStorage.setItem('currSongTitle', (title));
                    sessionStorage.setItem('currVideoId', (videoId));
                    setAzureServerError(false);
                }
                console.log(e);
            });
    };

    const putFullTrans = (newLines, source) => {
        const trans = [];
        newLines.forEach(e => trans.push(e.trans));

        fetch(`${serverUri}/trans/lines?initId=` + localStorage.getItem('init'), {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": title,
                "trans": JSON.stringify(trans),
                "source": source,
            })
        })
    };

    const actions = { getSongLyrics, getFullTrans, checkNextTrans, setLines, setTitle, setAbort, setVideoId };

    return (
        <CurrLyricsContext.Provider value={{ title, lines, azureServerError, translatedBy, videoId, ...actions }}>
            {props.children}
        </CurrLyricsContext.Provider>
    );
};