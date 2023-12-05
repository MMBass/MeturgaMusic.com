import { useState, useEffect } from "react";

import {
  Tooltip,
} from '@mui/material';

import { default as LyricToolTipChilds } from '@components/LyricToolTipChilds/StyledLyricToolTipChilds';
import { default as BookMarkWord } from '@components/BookMarkWord/StyledBookMarkWord';

function LyricToolTip({ className, ...props }) {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // if (props.open == true) {
    //   setResults([' ']);
    //   let firstTTpcounter = 1;
    //   let firstTTinterval = setInterval(() => {
    //     setOpen((prevOpen) => !prevOpen);
    //     firstTTpcounter++;
    //     if (firstTTpcounter >= 1) {
    //       clearInterval(firstTTinterval);
    //       setOpen(false);
    //     }
    //   }, 300);

    //   return () => {
    //     clearInterval(firstTTinterval);
    //   };
    // }
  }, []);  // try to open the first ttip for example, but switching too fast

  const handleTooltipOpen = () => {
    setOpen(true);
    if (!results[0]) {
      callResults();
    }
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  function callResults() {

    const serverUri = 'https://musicline-backend.vercel.app';

    // const serverUri = 'https://musicline-backend-dev.vercel.app';

    // const serverUri = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'http://localhost:5000' : 'https://musicline-backend.vercel.app';

    let lyric = props.lyric.trim().toLowerCase();
    lyric = lyric.replaceAll(/[^a-zA-Z0-9']/g, ""); // removes special chars exept '
    if (lyric.slice(-1) === "'") lyric = lyric.replaceAll("'", "g"); // change short Pronunciation spelling like goin' to - going

    fetch(`${serverUri}/trans/single`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "single": encodeURI(lyric),
        "initId": localStorage.getItem('init'),
      })
    }).then(response => response.json())
      .then(data => {
        if (data?.results[0]) {
          setResults(data.results);
          return;
        } else {
          setResults(['לא נמצאו עוד']);
          return;
        }
      }
      ).catch((e) => {
        setResults(['לא נמצאו עוד']);
        console.log(e);
      });
  }

  return (
    <>
      {/* <BookMarkWord toSave={{ word: props.lyric, results: results || ['top bookMark'] }} saved={saved} variant={'BookMark'}></BookMarkWord> */}
      <Tooltip className={className}
        title={
          <LyricToolTipChilds tooltipClose={handleTooltipClose} className="tt-childs" lyric={props.lyric} results={results}></LyricToolTipChilds>}
        arrow
        leaveTouchDelay={60 * 1000}
        leaveDelay={3*1000}

        PopperProps={{
          disablePortal: false,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableTouchListener
        disableHoverListener
      >
        <span>&nbsp; <p className="single-lyric" onClick={handleTooltipOpen}> {props.lyric} </p></span>
      </Tooltip>
    </>
  );
}

export default LyricToolTip;
