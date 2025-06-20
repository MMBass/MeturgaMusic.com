import { useContext, useEffect, useState, useRef } from "react";
import { useSearchParams, useParams, useLocation } from "react-router-dom";

import T from "./HomePageI18n";
import TUtils from '@/i18n-utils';
import utils from '@/utils.js';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SearchBar from '@components/SearchBar/StyledSearchBar';
import LyricsBody from '@components/LyricsBody/StyledLyricsBody';
import AboutBody from '@components/AboutBody/StyledAboutBody';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import { DrawerContext } from '@context/DrawerContext';

import { useTheme } from '@mui/material/styles';

import mainPic from '@/assets/screenshots/3Parts-main-shot-v3.png';
import mainPicDark from '@/assets/screenshots/no-pink-shot-bordered-pink-dark-mode.png';
import shot1Dark from '@/assets/screenshots/shotoneDark.png';

function HomePage({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const drawerContext = useContext(DrawerContext);

  const [searchFocused, setSearchFocused] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsSong = searchParams.get("song"); // Song of /?song= (with hash and without)
  const rrdLocation = useLocation();
  const { urlSong } = useParams(); // Song of path="/songs/:directSong" 
  const ignoreNextLocation = useRef(false);

  const theme = useTheme();

  useEffect(() => {
    // Note! the params in HashRouter works only this pattern: http://.../#/?song=artist_title
    drawerContext.closeDrawer();
    if (bannersContext.error) bannersContext.closeBanner('error');

    if (ignoreNextLocation.current) {
      ignoreNextLocation.current = false;
      return;
    }

    if (urlSong && urlSong.includes("_")) {
      callSongIfQuery(urlSong);
      const canonicalTag = document.head.querySelector('link[rel="canonical"]');
      if (canonicalTag) { canonicalTag.remove() }; // Remove for google indexing (pages that are not welcome page)
    } else if (paramsSong && paramsSong.includes("_")) {
      callSongIfQuery(paramsSong);
    };
  }, [rrdLocation]); // Use if there is a direct song in the url

  useEffect(() => {
    urlOnTitleChange();
  }, [currLyricsContext.title]);

  const urlOnTitleChange = () => {
    if (
      !currLyricsContext.title ||
      urlSong // If Song of path="/songs/:directSong - Do nothing, Avoid infinite HomePage useEffect that depends on rrdLocation (page params)
      || (paramsSong && utils.compareTitles(paramsSong, currLyricsContext.title)) // If titles are the same, do nothing
    ) {
      return;
    } else {
      ignoreNextLocation.current = true;
      setSearchParams(utils.titleToParams(currLyricsContext.title));
    }
  }

  function callSongIfQuery(passedSong) {
    if (utils.compareTitles(currLyricsContext.title, passedSong)) return; // Break If the song is the same

    passedSong = passedSong.replaceAll('-', " ");
    passedSong = passedSong.replace(passedSong.charAt(0), passedSong.charAt(0).toUpperCase());

    const splittedSongTitle = {
      artistName: encodeURI(` ${passedSong.split('_')[0]} `),
      songName: encodeURI(` ${passedSong.split('_')[1]} `)
    };

    passedSong = passedSong.replaceAll('_', " - "); // After splittedSongTitle - we need the _ to be - back

    if (urlSong) { document.title = (TUtils.SiteName + " " + passedSong + " " + T.Translated) }; // If the song is from /songs path - change the page title
    currLyricsContext.getSongLyrics(splittedSongTitle, passedSong); // Call the song
  }

  return (
    <div className={`${className} page`}>

      {(!currLyricsContext.lines?.[0] || !currLyricsContext.title) &&
        <Container className="home-top" maxWidth={false}>
          <Grid container className="home-t-parent-grid">

            <Grid className="home-top-p2" item xs={12} sm={6}>
              <Typography variant="h1" className="h3-start h3-start-top">
                {T.H3StartTop} <span>{"."}</span>
              </Typography>

              <Typography variant="h3" className="page-h3">
                {/* {T.H3StartOne}{" "} {T.H3StartTwo}{" "}  {T.H3Middle}{" "}  {T.H3Bottom} */}
                <span className="h3-start h3-start-one">
                  {T.H3StartOne}
                </span>

                <span className="h3-start h3-start-two">
                  {T.H3StartTwo}
                </span>

                <br className="page-h3-break"></br>

                <span className="h3-middle">
                  {T.H3Middle}
                </span>

                <span className="h3-bottom">
                  {T.H3Bottom}
                </span>

              </Typography>

              <SearchBar focused={searchFocused} locat={"main"} size={"large"}></SearchBar>
            </Grid>

            <Grid item className="mainPics-container" xs={12} sm={6}>

              {theme.mode !== 'dark' ?
                <img className="wide-pic" alt="site-in-action" src={mainPic} loading="lazy" ></img>
                :
                <img className="wide-pic wide-pic-dark" alt="site-in-action" src={shot1Dark} loading="lazy"></img>
              }

            </Grid>

          </Grid>

        </Container>
      }

      {(!currLyricsContext.lines?.[0] && !currLyricsContext.title) &&
        <AboutBody></AboutBody>
      }

      {(currLyricsContext.lines?.[0] && currLyricsContext.title) &&
        <Grid container spacing={1}>
          <Grid item md={12} lg={9}>
            <LyricsBody className={'lyrics-body'}></LyricsBody>
          </Grid>

          <Grid item xs={12} lg={3}>
            {/* on Lg - empty side space for ads */}
          </Grid>
        </Grid>
      }

    </div >
  );

};

export default HomePage;