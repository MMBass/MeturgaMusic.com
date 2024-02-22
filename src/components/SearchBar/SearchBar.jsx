import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import CircularProgress from '@mui/material/CircularProgress';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import searchStarter from '@services/searchStarter';
import utils from '@/utils';
import T from "./SearchBarI18n";
import constants from "@/constants";

function SearchBar({ className, addRecordMode, addRecord, size, locat }) {

  const [start, setStart] = useState(false);
  const [currVal, setCurrVal] = useState('');

  const routerNavigate = useNavigate();

  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);

  useEffect(() => {
    if (!addRecordMode) {
      setCurrVal(currLyricsContext.title);
    }
  }, [currLyricsContext.title]);

  useEffect(() => {
    utils.loadGscScript();
    searchStarter(linesChange, setStart);
  }, []);

  function setVal(e) {
    setCurrVal(e.target.value);
    if (e.nativeEvent.data !== ' ') {
      handleSearch(e.target.value);
    }
    else return;
  }

  function handleSearch(eValue) {
    if (bannersContext.error) bannersContext.closeBanner('error');

    let gsc_input = document.querySelector('#gsc-i-id1');

    if (gsc_input) {
      if (eValue.length <= 1) {
        utils.clearGsc(); // Clear gsc input
      } else if (constants.en_pattern.test(eValue)) {
        gsc_input.value = eValue;
        let gsc_btn = document.querySelectorAll('.gsc-search-box button')[0];

        if (gsc_btn) {

          setTimeout(() => {
            gsc_btn.type = "button";

            gsc_btn.dispatchEvent(new Event('click'));
          }, 50 * Math.floor(Math.random() * 4));

        } else {
          bannersContext.createBanner('error', 'error', T.TryReloadBanner, '(no gsc loaded)');
          console.error("no gsc loaded, try reload the page");
        }
      } else {
        bannersContext.createBanner('error', 'error', T.EnglishOnlyBanner, '');
        setTimeout(() => {
          let gsc_clear = document.querySelector('.gsst_a');
          if (gsc_clear) {
            gsc_clear.dispatchEvent(new Event('click'));
          }
        }, 250);
        // setCurrVal(utils.keyboardHEENSwitcher(eValue)); //to fix - still cuts the first letter every time
        return;
      }
    } else {
      bannersContext.createBanner('error', 'error', T.TryReloadBanner, '(no gsc loaded)');
      console.error("no gsc loaded, try reload the page");
    }
  }

  const linesChange = () => {
    setTimeout(() => {
      let sResults = document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");

      // Move the ads to bottom - if displayed
      // const gscAdBlocks = document.querySelectorAll('.gsc-adBlock');
      // gscAdBlocks.forEach((ad)=>{
      //   ad.parentNode.appendChild(ad);
      // }); 

      if (sResults) {
        sResults.forEach((line) => {
          if (line.innerText.includes("Lyrics")) {

            if (line.innerText.includes("(")) {
              let inside = line.innerText.match(constants.insideSearchResultsPattern)[1].toLowerCase();
              if (inside?.includes("live") || inside?.includes("mix") || inside?.includes("remix")) {
                line.parentElement.parentElement.parentElement.remove();
                return;
              };
            }

            let songTitle = line.innerText.split("Lyrics")[0];
            songTitle = songTitle.replaceAll(' | Genius', "");
            songTitle = songTitle.replaceAll('–', "-"); // g Results comes with some special ' – ' sign

            if (!utils.isMostlyEnglish(songTitle)) {
              line.parentElement.parentElement.parentElement.remove();
              return;
            } // After removing all the around text - check its lang

            line.innerHTML = `<strong>${songTitle.split(' - ')[0]}</strong> - <span>${songTitle.split(' - ')[1]}</span>`;

            const splittedSongTitle = {
              artistName: encodeURI(songTitle.split('-')[0]),
              songName: encodeURI(songTitle.split('-')[1])
            };

            if (line.nodeName !== 'A') {
              line.parentElement.parentElement.parentElement.addEventListener('click', () => { handleLineClickEvent(line, songTitle, splittedSongTitle) });
            };

            line.style.display = "block";

          } else if (!line.innerText.includes("Lyrics")) {

            if (line.parentElement.parentElement.parentElement.className.includes('gsc-webResult')) {
              line.parentElement.parentElement.parentElement.remove();
            };
          };

        });

      }
    }, 50);
  }

  const handleLineClickEvent = (line, songTitle, splittedSongTitle) => {
    line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "none";

    if (addRecordMode === true) {
      if (addRecord) { addRecord(songTitle) };
      line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "all";
      utils.clearGsc();
      setCurrVal(' ');
      return;
    } else if (currLyricsContext.title.replaceAll(' ', '') == songTitle.replaceAll(' ', '')) {
      line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "all";
      utils.clearGsc();
    } else {
      currLyricsContext.getSongLyrics(splittedSongTitle, songTitle);
    }
    setCurrVal(songTitle);
    if (location.hash != "#/") routerNavigate("/");
  };

  return (
    <div className={className} >

      {(!addRecordMode) &&
        <TextField size={size}
          id="outlined-search"
          className={locat == "main" ? "main-input" : "top-input"}
          label={!start ?
            <CircularProgress size={18} ></CircularProgress>
            :
            <><TravelExploreIcon></TravelExploreIcon>{T.Label}</>
          }
          type="search"
          onChange={start ? setVal : null}
          autoFocus={false} autoComplete='off'
          placeholder={"GOOGLE " + T.PoweredBy}
          value={currVal} />
      }

      {(addRecordMode) &&
        <TextField label={T.AddRecordLabel} d="outlined-search" type="search" className={'add-record-input'} onChange={start ? setVal : null} autoFocus={false} autoComplete='off' placeholder={T.PoweredBy + " GOOGLE "} value={currVal} fullWidth variant="filled" />
      }

      <div id="gcse-my-wrapper" className={(addRecordMode && "gcse-my-wrapper-add-record-mode")}>
        <div className="gcse-search"></div>
      </div>

    </div>
  );

}

export default SearchBar;
