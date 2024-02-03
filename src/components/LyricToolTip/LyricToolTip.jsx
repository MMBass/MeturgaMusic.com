import Tooltip from '@mui/material/Tooltip';

import LyricToolTipChilds from '@components/LyricToolTipChilds/StyledLyricToolTipChilds';
import BookMarkWord from '@components/BookMarkWord/StyledBookMarkWord';
import useLyricToolTip from '@hooks/useLyricToolTip';

function LyricToolTip({ className, lyric, lyricID }) {
  const { results, open, handleTooltipOpen, handleTooltipClose } = useLyricToolTip(lyric, lyricID);

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
