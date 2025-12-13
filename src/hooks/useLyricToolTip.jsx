import { useState } from "react";
import fetchSingleTrans from '@services/fetchSingleTrans';
import { SESSION_STORAGE_KEYS } from '@/constants';

// Keep the ttip open while parent rerender - using sessionStorage; (useMemo is saving only if parent not rerender)
export default function useLyricToolTip(lyric, lyricID) {
    const sessionData = sessionStorage.getItem(SESSION_STORAGE_KEYS.TTIP + lyricID);
    const currTTip = sessionData ? JSON.parse(sessionData) : null;
    
    const [results, setResults] = useState(currTTip || []);
    const [open, setOpen] = useState(currTTip || false);

    const handleTooltipOpen = async () => {
        setOpen(true);
        if (!results[0]) {
            Object.keys(sessionStorage).forEach(key => { if (key.includes(SESSION_STORAGE_KEYS.TTIP)) sessionStorage.removeItem(key) });
            sessionStorage.setItem(SESSION_STORAGE_KEYS.TTIP + lyricID, JSON.stringify([]));
            const res = await fetchSingleTrans(lyric);
            setResults(res);
            sessionStorage.setItem(SESSION_STORAGE_KEYS.TTIP + lyricID, JSON.stringify(res));
        } else {
            sessionStorage.setItem(SESSION_STORAGE_KEYS.TTIP + lyricID, JSON.stringify(results));
        }
    };

    const handleTooltipClose = () => {
        Object.keys(sessionStorage).forEach(key => { if (key.includes(SESSION_STORAGE_KEYS.TTIP)) sessionStorage.removeItem(key) });
        setOpen(false);
    };

    return { results, open, handleTooltipOpen, handleTooltipClose };
}
