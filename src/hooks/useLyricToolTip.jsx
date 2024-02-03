import { useState } from "react";
import fetchSingleTrans from '@services/fetchSingleTrans';

// Keep the ttip open while parent rerender - using sessionStorage; (the useMemo saving only if parent not rerender)
export default function useLyricToolTip(lyric, lyricID) {
    const currTTip = JSON.parse(sessionStorage.getItem("TTip" + lyricID));
    const [results, setResults] = useState(currTTip || []);
    const [open, setOpen] = useState(currTTip || false);

    const handleTooltipOpen = async () => {
        setOpen(true);
        if (!results[0]) {
            Object.keys(sessionStorage).forEach(key => { if (key.includes("TTip")) sessionStorage.removeItem(key) });
            sessionStorage.setItem("TTip" + lyricID, JSON.stringify([]));
            const res = await fetchSingleTrans(lyric);
            setResults(res);
            sessionStorage.setItem("TTip" + lyricID, JSON.stringify(res));
        } else {
            sessionStorage.setItem("TTip" + lyricID, JSON.stringify(results));
        }
    };

    const handleTooltipClose = () => {
        Object.keys(sessionStorage).forEach(key => { if (key.includes("TTip")) sessionStorage.removeItem(key) });
        setOpen(false);
    };

    return { results, open, handleTooltipOpen, handleTooltipClose };
}
