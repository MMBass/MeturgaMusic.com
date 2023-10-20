import { useState, useEffect, useContext } from "react";

import { TextField } from "@mui/material";
import { CircularProgress } from '@mui/material';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import utils from '@/utils';

function SearchBar({ className }) {
  const [start, setStart] = useState(false);
  const [currVal, setCurrVal] = useState('');
  const [isIos, setIsIos] = useState(false);

  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);

  useEffect(() => {
    setCurrVal(currLyricsContext.title);
  }, [currLyricsContext.title]);

  useEffect(() => {
    ifIOS();
  }, []);

  const ifIOS = () => {
    if (utils.getMobileOS()) {
      setIsIos(true);
    };
  };

  function showGscBar(){
    if(utils.getMobileOS()){
      const hiddenElem = document.querySelectorAll(".gsc-control-cse")[0];
      hiddenElem.style.visibility = "visible";
      hiddenElem.style.marginTop = "90px";
    }
  }

  useEffect(() => {
    window.onload = () => {
      const checkgsc = document.querySelector("#gcse-my-wrapper #___gcse_0");
      if (checkgsc) {
        showGscBar();
        track___gcse_0();
      } else {
        const wrapperNode = document.querySelector("#gcse-my-wrapper");
        const observerOptions = {
          childList: true,
          attributes: true,

          // Omit (or set to false) to observe only changes to the parent node
          subtree: false
        }

        function callback() {
          track___gcse_0();
        }

        const observer = new MutationObserver(callback);
        observer.observe(wrapperNode, observerOptions);
      }
    }
  }, []);

  function track___gcse_0() { // todo comment why to use two observable?
    setStart(true); // todo comment what is that for?
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
    if(e.nativeEvent.data !== ' '){
      handleSearch(e.target.value);
    }
    else return;
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
            songTitle = songTitle.replaceAll('–', "-"); // genius results comes with some special ' – ' sign

            if(!utils.isMostlyEnglish(songTitle)){
              line.parentElement.parentElement.parentElement.remove();
              return;
            } // after removing all the around text - check its lang

            line.innerHTML = `<strong>${songTitle.split('-')[0]}</strong> - <span>${songTitle.split('-')[1]}</span>`;

            const splittedSongTitle = {
              artistName: encodeURI(songTitle.split('-')[0]),
              songName: encodeURI(songTitle.split('-')[1])
            };

            if (line.nodeName !== 'A') {
              line.parentElement.parentElement.parentElement.addEventListener('click', (e) => {
                if (bannersContext.error?.open) {
                  bannersContext.closeBanner('error');
                };

                line.parentElement.parentElement.parentElement.parentElement.style.pointerEvents = "none";

                setCurrVal(songTitle);
                currLyricsContext.getSongLyrics(splittedSongTitle, songTitle);
              });
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
            gsc_btn.dispatchEvent(new Event('click'));
          }, 50 * Math.floor(Math.random() * 4));

        } else {
          bannersContext.createBanner('error', 'error', 'משהו השתבש, נסה לרענן את העמוד', '(no gsc loaded)');
          console.error("no gsc loaded, try reload the page");
        }
      } else{
        bannersContext.createBanner('error', 'error', ' החיפוש הוא עבור שירים באנגלית בלבד' , '');
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

  return (
    <div id="" className={className}>
      {(!isIos) &&
        <TextField id="outlined-search" label={ !start ? <CircularProgress size={18} ></CircularProgress> : "חיפוש שיר" } type="search" className="main-input" onChange={start ? setVal : null} autoFocus={false} autoComplete='off' value={currVal}/>
      }

      <div id="gcse-my-wrapper">
        {/* todo track when gcse-search changes to ___gcse_0  with the wrapper */}
        <div className="gcse-search"></div>
      </div>


    </div>
  );

}


export default SearchBar;
