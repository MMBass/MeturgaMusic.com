import React, { useState, useContext, useEffect } from 'react';

import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import utils from '../utils';

export const CurrLyricsContext = React.createContext(undefined);

export default function CurrLyricsContextProvider(props) {
    const loadersContext = useContext(LoadersContext);
    const bannersContext = useContext(BannersContext);

    const [title, setTitle] = useState((sessionStorage.getItem('currLines') && sessionStorage.getItem('currSongTitle')) || '');
    const [song_id, setSong_id] = useState('');
    const [lines, setLines] = useState(JSON.parse(sessionStorage.getItem('currLines')) || []);
    const [azureServerError, setAzureServerError] = useState(false); // set if azure trans didn't work
    const [abort, setAbort] = useState(false); // force to cancel prev song checkNextTrans

    useEffect(() => {
        if (lines[0]) {
            checkNextTrans();
        }
    }, [lines, azureServerError]);

    const serverUri = 'https://musicline-backend.vercel.app';

    // const serverUri = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'http://localhost:5000' : 'https://musicline-backend.vercel.app';

    const getSongLyrics = (splittedSongTitle, songTitle) => {
        setAbort(true);

        songTitle = songTitle.replace(/[\])}[{(]/g, '').trim();
        let linesParent = document.querySelectorAll(".gsc-expansionArea")[0];
        loadersContext.openLoader('main');

        // first try to get from LS
        if (localStorageGetSong(songTitle, linesParent)) {
            return;
        }

        fetch(`${serverUri}/lyrics`, {
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
            .then(data => {

                loadersContext.closeLoader('main');
                sessionStorage.removeItem('currLines');
                sessionStorage.removeItem('currSongTitle');

                if (linesParent) linesParent.style.pointerEvents = "all";

                if (data?.combined && Array.isArray(data?.combined)) {
                    setTitle(songTitle);
                    setSong_id(data.id)
                    setLines(data.combined);
                    utils.lsSaveSong({ title: songTitle, lines: data.combined });
                    utils.clearGsc();
                    sessionStorage.setItem('currLines', JSON.stringify(data.combined));
                    sessionStorage.setItem('currSongTitle', (songTitle));
                } else if (data?.lyrics) {
                    setTitle(songTitle);
                    let ly = data.lyrics;
                    let newLines = [];

                    ly.split(/(?:\r\n|\r|\n)/g).map((line) => {
                        if (line.length >= 2) {

                            if (utils.isMostlyEnglish(line)) {
                                newLines.push({ src: line.replace('.', ''), trans: '', transError: false });
                            } else {
                                console.log("Not supported lang: " + line);
                                newLines.push({ src: "*NOT SUPPORTED TEXT*", trans: '', transError: false });
                            }

                        };
                    });
                    setAbort(false);
                    setLines(newLines);

                    utils.clearGsc();
                } else {
                    setAbort(false);
                    bannersContext.createBanner('error', 'error', 'אנו עובדים על המילים לשיר הזה, חפשו שיר אחר או נסו שוב במועד מאוחר יותר', '');
                };
            }
            ).catch((e) => {
                setAbort(false);
                console.log(e);
                loadersContext.closeLoader('main');
                bannersContext.createBanner('error', 'error', 'אנו עובדים על המילים לשיר הזה, חפשו שיר אחר או נסו שוב במועד מאוחר יותר', '');
                if (linesParent) linesParent.style.pointerEvents = "all";
            });
    }

    const localStorageGetSong = (songTitle, linesParent) => {
        let lsSong = utils.lsFindSong(songTitle);
        if (lsSong && Array.isArray(lsSong.newLines)) {
            if (linesParent) linesParent.style.pointerEvents = "all";
            setTitle(songTitle);
            setLines(lsSong.newLines);
            utils.clearGsc();
            loadersContext.closeLoader('main');

            sessionStorage.setItem('currLines', JSON.stringify(lsSong.newLines));
            sessionStorage.setItem('currSongTitle', (songTitle));

            return true;
        } else {
            return false;
        }
    }

    const checkNextTrans = () => {
        if(abort) return;
        lines.every((line, index) => {
            if (!line.trans.length || line.transError) {
                azureServerError ? getSingleLineTrans(line.src, index) : getFullTrans(line.src, index); // get reverso translation if azure is blocked
                return false; // break the loop (will start again after getSingleLineTrans(); )
            }
            return true;
        });
    };

    const getPartlyTrans = (src, index) => { // doesn't work properly

    }

    const getFullTrans = (src, index) => {
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
                    utils.lsSaveSong({ title, newLines });
                    sessionStorage.setItem('currLines', JSON.stringify(newLines));
                    sessionStorage.setItem('currSongTitle', (title));

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
    }

    const getSingleLineTrans = (src, index) => {
        let newLines = [...lines];

        fetch(`${serverUri}/trans/single-line`, {
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
                    }
                } else {
                    if (lines[index].trans === undefined) {
                        newLines[index] = { src: src, trans: 'מנסה שוב..', transError: true };
                    } else if (lines[index].trans === 'מנסה שוב..') {
                        newLines[index] = { src: src, trans: "[תרגום חסר]", transError: false };
                    }

                    setLines(newLines);

                    let lastTrans = lines[lines.length - 1]?.trans;

                    if (lastTrans.length >= 1) {
                        sessionStorage.setItem('currLines', JSON.stringify(newLines));
                        sessionStorage.setItem('currSongTitle', (title));
                    }
                }
            }
            ).catch((e) => {
                if (lines[index].trans === '') {
                    newLines[index] = { src: src, trans: 'מנסה שוב..', transError: true };
                } else if (lines[index].trans === 'מנסה שוב..') {
                    newLines[index] = { src: src, trans: "[תרגום חסר]", transError: false };
                }

                setLines(newLines);

                let lastTrans = lines[lines.length - 1]?.trans;

                if (lastTrans.length >= 1) {
                    sessionStorage.setItem('currLines', JSON.stringify(lines));
                    sessionStorage.setItem('currSongTitle', (title));
                    setAzureServerError(false);
                }
                console.log(e);
            });
    }

    const actions = { getSongLyrics, getFullTrans, checkNextTrans, setLines };

    return (
        <CurrLyricsContext.Provider value={{ title, lines, ...actions }}>
            {props.children}
        </CurrLyricsContext.Provider>
    );
};