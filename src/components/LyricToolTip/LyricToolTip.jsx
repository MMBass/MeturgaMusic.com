import { useState, useEffect } from "react";

import Tooltip from '@mui/material/Tooltip';

import LyricToolTipChilds from '@components/LyricToolTipChilds/StyledLyricToolTipChilds';
import BookMarkWord from '@components/BookMarkWord/StyledBookMarkWord';

import getSingleTrans from '@services/getSingleTrans';

function LyricToolTip({ className, ...props }) {
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
    const res = await getSingleTrans(props.lyric);
    setResults(res);
  }

  return (
    <>
      {/* <BookMarkWord toSave={{ word: props.lyric, results: results || ['top bookMark'] }} saved={saved} variant={'BookMark'}></BookMarkWord> */}
      <Tooltip className={className}
        title={
          <LyricToolTipChilds tooltipClose={handleTooltipClose} className="tt-childs" lyric={props.lyric} results={results}></LyricToolTipChilds>}
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
        <span> <p className="single-lyric" onClick={handleTooltipOpen}> {props.lyric} </p></span>
      </Tooltip>
    </>
  );
}

export default LyricToolTip;
