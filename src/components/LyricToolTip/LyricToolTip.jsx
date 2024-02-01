import { useState } from "react";

import Tooltip from '@mui/material/Tooltip';

import LyricToolTipChilds from '@components/LyricToolTipChilds/StyledLyricToolTipChilds';
import BookMarkWord from '@components/BookMarkWord/StyledBookMarkWord';
import fetchSingleTrans from '@services/fetchSingleTrans';

function LyricToolTip({ className, lyric, lyricID }) {
  const currTTip = JSON.parse(sessionStorage.getItem("TTip" + lyricID)); // Make the tooltip stay open while rerendering 
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

  return (
    <>
      {/* <BookMarkWord toSave={{ word: lyric, results: results || ['top bookMark'] }} saved={saved} variant={'BookMark'}></BookMarkWord> */}
      <Tooltip className={className}
        title={
          <LyricToolTipChilds tooltipClose={handleTooltipClose} className="tt-childs" lyric={lyric} results={results}></LyricToolTipChilds>}
        arrow
        TransitionProps={{ timeout: 0 }}
        leaveTouchDelay={60 * 1000}
        leaveDelay={3 * 1000}
        PopperProps={{
          disablePortal: false,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableTouchListener
        disableHoverListener
      >
        <span> <p className="single-lyric" onClick={handleTooltipOpen}> {lyric} </p></span>
      </Tooltip>
    </>
  );
}

export default LyricToolTip;
