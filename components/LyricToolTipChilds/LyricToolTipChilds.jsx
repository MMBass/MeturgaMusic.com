import { useContext } from "react";

import {
  Typography,
  LinearProgress,
  ClickAwayListener
} from '@mui/material';

import { default as BookMarkWord } from '@components/BookMarkWord/StyledBookMarkWord';

import { SettingsContext } from '@context/SettingsContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';

function LyricToolTipChilds({ className, ...props }) {
  const settingsContext = useContext(SettingsContext);
  const currLyricsContext = useContext(CurrLyricsContext);

  const Results = () => {
    if (props.results[0]) {
      let rText = '';

      props.results.map((r, i) => {
        if (i + 1 === props.results.length) rText += r;
        else rText += r + ", ";
      });
      return <p className="tt-p">{rText}</p>;
    } else {
      return (
        <p className="tt-p">לא נמצאו עוד</p>
      );
    }
  }

  return (
    <ClickAwayListener onClickAway={props.tooltipClose}>
      <span className={className}>
        <Typography className="tt-top" color="inherit" style={{ fontSize: settingsContext.fontSize.md - 2 }}> תרגומים נוספים </Typography>
        {props.results[0] && <hr></hr>}
        <div className="tt-body" style={{ fontSize: settingsContext.fontSize.md - 2 }}>
          {props.results[0] ?
            <Results></Results>
            :
            <LinearProgress className="tt-body-linear" color={"inherit"} />
          }
        </div>
        {props.results[0] !== 'לא נמצאו עוד' &&
          <BookMarkWord toSave={{ word: props.lyric, results: props.results, title: currLyricsContext.title }} variant={'Star'}></BookMarkWord>}
      </span>
    </ClickAwayListener>
  );
}

export default LyricToolTipChilds;
