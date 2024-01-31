import Tooltip from '@mui/material/Tooltip';

import LyricToolTipChilds from '@components/LyricToolTipChilds/StyledLyricToolTipChilds';
import BookMarkWord from '@components/BookMarkWord/StyledBookMarkWord';

function LyricToolTip({ className, lyric, lyricID, open, setOpen}) {

  const handleTooltipOpen = () => {
    if(lyricID) sessionStorage.removeItem('currTTip');
    setOpen(lyricID);
  };

  const handleTooltipClose = () => {
    setOpen(null);
    sessionStorage.removeItem('currTTip');
  };

  return (
    <>
      {/* <BookMarkWord toSave={{ word: lyric, results: results || ['top bookMark'] }} saved={saved} variant={'BookMark'}></BookMarkWord> */}
      <Tooltip className={className}
        title={
          <LyricToolTipChilds tooltipClose={handleTooltipClose} className="tt-childs" lyric={lyric}></LyricToolTipChilds>}
        arrow

        enterNextDelay={0}
        enterDelay={0}
        enterTouchDelay={0}
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
