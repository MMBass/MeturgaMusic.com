import { useContext, useState, useEffect } from "react";
import TUtils from '@/i18n-utils';

import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import BookMarkWord from '@components/BookMarkWord/StyledBookMarkWord';

import { SettingsContext } from '@context/SettingsContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';
import fetchSingleTrans from '@services/fetchSingleTrans';

function LyricToolTipChilds({ className, tooltipClose, lyric }) {
  const settingsContext = useContext(SettingsContext);
  const currLyricsContext = useContext(CurrLyricsContext);
  const [results, setResults] = useState(JSON.parse(sessionStorage.getItem('currTTip')) || []);

  useEffect(async () => {
    if (!results[0]) {
      const res = await fetchSingleTrans(lyric);
      setResults(res);
      sessionStorage.setItem('currTTip', JSON.stringify(res));
    }
  }, []);

  const Results = () => {
    if (results[0]) {
      let rText = '';

      results.map((r, i) => {
        if (i + 1 === results.length) rText += r;
        else rText += r + ", ";
      });
      return <p className="tt-p">{rText}</p>;
    } else {
      return (
        <p className="tt-p">
          {TUtils.NoMore}
        </p>
      );
    }
  }

  return (
    <ClickAwayListener onClickAway={tooltipClose}>
      <span className={className}>
        <Typography className="tt-top" color="inherit" style={{ fontSize: settingsContext.fontSize.md - 2 }}>
          {TUtils.MoreTrans}
        </Typography>
        {results[0] && <hr></hr>}
        <div className="tt-body" style={{ fontSize: settingsContext.fontSize.md - 2 }}>
          {results[0] ?
            <Results></Results>
            :
            <LinearProgress className="tt-body-linear" color={"inherit"} />
          }
        </div>
        {(results[0] && results[0] !== TUtils.NoMore) &&
          <BookMarkWord toSave={{ word: lyric, results: results, title: currLyricsContext.title }} variant={'Star'}></BookMarkWord>}
      </span>
    </ClickAwayListener>
  );
}

export default LyricToolTipChilds;
