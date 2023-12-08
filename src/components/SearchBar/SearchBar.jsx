import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import CircularProgress from '@mui/material/CircularProgress';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import utils from '@/utils';

function SearchBar({ className, ...props }) {
  const [start, setStart] = useState(false);
  const [currVal, setCurrVal] = useState('');
  const [isIos, setIsIos] = useState(false);

  const routerNavigate = useNavigate();

  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);

  useEffect(() => {
    if (!props.addRecordMode) {
      setCurrVal(currLyricsContext.title);
    }
  }, [currLyricsContext.title]);

  useEffect(() => {
    ifIOS();
  }, []);

  const ifIOS = () => {
    if (utils.getMobileOS()) {
      setIsIos(true);
    };
  };

  function showGscBar() { //if IOS show the original, hide the mui bar
    if (utils.getMobileOS()) {
      const hiddenElem = document.querySelectorAll(".gsc-control-cse")[0];
      hiddenElem.style.visibility = "visible";
      hiddenElem.style.marginTop = "90px";
    }
  }

  useEffect(() => {
    utils.loadGscScript();
    observeMyWrapper();
  }, []);

  function observeMyWrapper() {
    // observe when gsc loaded, then we can find the .gsc-results-wrapper-nooverlay to observe it

    // Loads faster without window.onload ?
    // window.onload = () => {
    const checkgsc = document.querySelector("#gcse-my-wrapper #___gcse_0");
    if (checkgsc) {
      showGscBar();
      track___gcse_0SearchInput();
    } else {
      const wrapperNode = document.querySelector("#gcse-my-wrapper");
      const observerOptions = {
        childList: true,
        attributes: true,

        // Omit (or set to false) to observe only changes to the parent node
        subtree: false
      }

      function callback() {
        track___gcse_0SearchInput();
      }

      const observer = new MutationObserver(callback);
      observer.observe(wrapperNode, observerOptions);
    }
    // }
  }

  function track___gcse_0SearchInput() { // observe when gsc lines change
    setStart(true); // replacing the loader and able search
    const targetNode = document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0];
    const observerOptions = {
      childList: false,
      attributes: true,

      // Omit (or set to false) to observe only changes to the parent node
      subtree: false
    }

    function callback() {
      linesChange();
    }

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);
  }

  function setVal(e) {
    setCurrVal(e.target.value);
    if (e.nativeEvent.data !== ' ') {
      handleSearch(e.target.value);
    }
    else return;
  }

  function handleSearch(eValue) {
    if (bannersContext.error) {
      bannersContext.closeBanner('error');
    }

    let gsc_input = document.querySelector('#gsc-i-id1');
    let en_pattern = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;

    if (gsc_input) {
      if (eValue.length <= 1) {
        // clear gsc input
        let gsc_clear = document.querySelector('.gsst_a');
        if (gsc_clear) {
          gsc_clear.dispatchEvent(new Event('click'));
        }
      } else if (en_pattern.test(eValue)) {
        gsc_input.value = eValue;
        let gsc_btn = document.querySelectorAll('.gsc-search-box button')[0];

        if (gsc_btn) {

          setTimeout(() => {
            gsc_btn.type = "button"; // todo test on ios and safari
  
            gsc_btn.dispatchEvent(new Event('click'));
          }, 50 * Math.floor(Math.random() * 4));

        } else {
          bannersContext.createBanner('error', 'error', 'משהו השתבש, נסה לרענן את העמוד', '(no gsc loaded)');
          console.error("no gsc loaded, try reload the page");
        }
      } else {
        bannersContext.createBanner('error', 'error', ' החיפוש הוא עבור שירים באנגלית בלבד', '');
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
      bannersContext.createBanner('error', 'error', 'משהו השתבש, נסה לרענן את העמוד', '(no gsc loaded)');
      console.error("no gsc loaded, try reload the page");
    }
  }

  const linesChange = () => {
    setTimeout(() => {
      let sResults = document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");

      // move the ads to bottom
      // const gscAdBlocks = document.querySelectorAll('.gsc-adBlock');
      // gscAdBlocks.forEach((ad)=>{
      //   ad.parentNode.appendChild(ad);
      // }); 

      if (sResults) {
        sResults.forEach((line, i) => {
          if (line.innerText.includes("Lyrics")) {

            if (line.innerText.includes("(")) {
              let inside = line.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();
              if (inside?.includes("live") || inside?.includes("mix") || inside?.includes("remix")) {
                line.parentElement.parentElement.parentElement.remove();
                return;
              };
            }

            let songTitle = line.innerText.split("Lyrics")[0];
            songTitle = songTitle.replaceAll('–', "-"); // g results comes with some special ' – ' sign

            if (!utils.isMostlyEnglish(songTitle)) {
              line.parentElement.parentElement.parentElement.remove();
              return;
            } // after removing all the around text - check its lang

            line.innerHTML = `<strong>${songTitle.split('-')[0]}</strong> - <span>${songTitle.split('-')[1]}</span>`;

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

    if (props.addRecordMode === true) {
      if (props.addRecord) { props.addRecord(songTitle) };
      line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "all";
      utils.clearGsc();
      setCurrVal(' ');
      return;
    }
    if (currLyricsContext.title.replaceAll(' ', '') == songTitle.replaceAll(' ', '')) {
      line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "all";
      utils.clearGsc();
    }
    if (currLyricsContext.title.replaceAll(' ', '') != songTitle.replaceAll(' ', '')) {
      currLyricsContext.getSongLyrics(splittedSongTitle, songTitle);
    }
    setCurrVal(songTitle);
    if (location.hash != "#/") routerNavigate("/");
  };

  return (
    <div className={className}>
      {(!isIos && !props.addRecordMode) &&
        <TextField size={props.size} id="outlined-search" label={!start ? <CircularProgress size={18} ></CircularProgress> : "חיפוש שיר באינטרנט"} type="search" className={props.locat == "main" ? "main-input" : "top-input"} onChange={start ? setVal : null} autoFocus={false} autoComplete='off' placeholder="GOOGLE  מופעל באמצעות" value={currVal} />
      }

      {(!isIos && props.addRecordMode) &&
        <TextField label={' הוסף שיר +'} type="search" className={'add-record-input'} onChange={start ? setVal : null} autoFocus={false} autoComplete='off' placeholder="מופעל באמצעות GOOGLE" value={currVal} fullWidth variant="filled" />
      }

      <div id="gcse-my-wrapper" className={(props.addRecordMode && "gcse-my-wrapper-add-record-mode")}>
        <div className="gcse-search"></div>
      </div>

    </div>
  );

}


export default SearchBar;
