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

  const [startSearchConnection, setStartSearchConnection] = useState(false);
  const [searchProccessing, setSearchProccessing] = useState(false);
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
    searchStarter(linesChange, setStartSearchConnection);
  }, []);

  // Setting the mui TextField value, and calling the g search handler
  function setVal(e) {
    setSearchProccessing(true);
    setCurrVal(e.target.value);
    if (e.nativeEvent.data !== ' ') {
      handleSearch(e.target.value);
    }
    else return;
  }

  // Programmatically clicking the g search btn
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
          console.error("No gsc loaded, try reload the page");
        }
      } else {
        bannersContext.createBanner('error', 'error', T.EnglishOnlyBanner, '');
        setTimeout(() => {
          let gsc_clear = document.querySelector('.gsst_a');
          if (gsc_clear) {
            gsc_clear.dispatchEvent(new Event('click'));
          }
        }, 250);
        // setCurrVal(utils.keyboardHEENSwitcher(eValue)); // To fix - still cuts the first letter every time
        return;
      }
    } else {
      bannersContext.createBanner('error', 'error', T.TryReloadBanner, '(No gsc loaded)');
      console.error("No gsc loaded, try reload the page");
    }
  }

  // Recreating and adding click event to every text inside the results dropdown
  const linesChange = () => {

    setTimeout(() => {
      let sResults = document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");
      let noResults = document.querySelectorAll(".gsc-no-results-result")[0];

      // color the no results text
      if (noResults) {
        noResults.style.color = "#000";
      }

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
              if (inside?.toLowerCase().includes("live") || inside?.toLowerCase().includes("mix") || inside?.toLowerCase().includes("remix")) {
                line.parentElement.parentElement.parentElement.remove();
                return;
              };
            }

            let songTitle = line.innerText.replaceAll('–', "-"); // g Results comes with some special ' – ' sign
            if (songTitle.split('-')[0].includes('Lyrics')) { // Check for the edge case
              // Revers in edge cases when the title comes before the artist:
              songTitle = songTitle.replaceAll('Lyrics', ""); // They comes with extra 'Lyrics'
              songTitle = songTitle.split(' - ')[1] + " - " + songTitle.split(' - ')[0]; // Reorder
            } else {
              songTitle = songTitle.split("Lyrics")[0];
            }
            songTitle = songTitle.replaceAll(' | Genius', "");

            if (!utils.isMostlyEnglish(songTitle)) {
              line.parentElement.parentElement.parentElement.remove();
              return;
            } // After removing all the around text - check it's lang

            line.classList.add('fixed-gs-title');
            line.innerHTML = `<strong>${songTitle.split(' - ')[0]} - <span>${songTitle.split(' - ')[1]}</span> </strong>`;

            const splittedSongTitle = {
              artistName: encodeURI(songTitle.split('-')[0]),
              songName: encodeURI(songTitle.split('-')[1])
            };

            if (line.nodeName !== 'A') {
              const webSongUrl = line.parentElement.parentElement.parentElement.querySelector('a').href;
              line.parentElement.parentElement.parentElement.addEventListener('click', () => { handleLineClickEvent(line, songTitle, splittedSongTitle, webSongUrl || null) });
            };

            line.style.display = "block";

          } else if (!line.innerText.includes("Lyrics")) {

            if (line.parentElement.parentElement.parentElement.className.includes('gsc-webResult')) {
              line.parentElement.parentElement.parentElement.remove();
            };
          };

        });

      }
      setSearchProccessing(false);
    }, 50);
  }

  // Click event for very text in results dropdown
  const handleLineClickEvent = (line, songTitle, splittedSongTitle, webSongUrl) => {
    line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "none";

    if (addRecordMode === true) {
      if (addRecord) { addRecord(songTitle) };
      line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "all";
      utils.clearGsc();
      setCurrVal(' ');
      return;
    } else if (utils.compareTitles(currLyricsContext.title, songTitle)) {
      line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "all";
      utils.clearGsc();
    } else {
      currLyricsContext.getSongLyrics(splittedSongTitle, songTitle, webSongUrl, setSearchProccessing);
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
          label={
            (!startSearchConnection || searchProccessing) ?
              <> <CircularProgress size={16}></CircularProgress> {T.Label} </>
              :
              <> <TravelExploreIcon></TravelExploreIcon> {T.Label} </>
          }
          type="search"
          onChange={startSearchConnection ? setVal : null}
          autoFocus={false} autoComplete='off'
          placeholder={"GOOGLE " + T.PoweredBy}
          value={currVal} />
      }

      {(addRecordMode) &&
        <TextField label={T.AddRecordLabel} d="outlined-search" type="search" className={'add-record-input'} onChange={startSearchConnection ? setVal : null} autoFocus={false} autoComplete='off' placeholder={T.PoweredBy + " GOOGLE "} value={currVal} fullWidth variant="filled" />
      }

      <div id="gcse-my-wrapper" className={(addRecordMode && "gcse-my-wrapper-add-record-mode")}>
        <div className="gcse-search"></div>
      </div>

    </div>
  );

}

export default SearchBar;