import { useState, useRef, useEffect } from "react";

import Tooltip from '@mui/material/Tooltip';

import LyricToolTipChilds from '@components/LyricToolTipChilds/StyledLyricToolTipChilds';
import BookMarkWord from '@components/BookMarkWord/StyledBookMarkWord';

import fetchSingleTrans from '@services/fetchSingleTrans';

function LyricToolTip({ className, lyric, lyricIndex, /* open, setOpen */ }) {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleTooltipOpen = () => {
    setOpen(true);

    if (!results[0]) {
      callResults();
    }
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  async function callResults() {
    const res = await fetchSingleTrans(lyric);
    setResults(res);
  }

  return (
    <>
      {/* <BookMarkWord toSave={{ word: lyric, results: results || ['top bookMark'] }} saved={saved} variant={'BookMark'}></BookMarkWord> */}
      <Tooltip className={className}
        title={
          <LyricToolTipChilds tooltipClose={handleTooltipClose} className="tt-childs" lyric={lyric} results={results}></LyricToolTipChilds>}
        arrow
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
