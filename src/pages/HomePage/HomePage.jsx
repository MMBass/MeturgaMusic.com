import { useContext, useEffect, useState } from "react";

import { useSearchParams, useParams, useLocation } from "react-router-dom";
import T from "./HomePageI18n";

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

import mainPic from '../../images/screenshots/combined-shot-whiteBg-player.png';
import mainPicDark from '../../images/screenshots/no-pink-shot-bordered-pink-dark-mode.png';

function HomePage({ className, setCurrTitle }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const drawerContext = useContext(DrawerContext);

  const [searchFocused, setSearchFocused] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsSong = searchParams.get("song"); // song of /?song= (with hash and without)
  const rrdLocation = useLocation();
  const { urlSong } = useParams(); // song of path="/songs/:directSong" 

  const theme = useTheme();

  useEffect(() => {
    // note! the params in HashRouter works only this pattern: http://.../#/?song=artist_title
    drawerContext.closeDrawer();
    if (bannersContext.error) bannersContext.closeBanner('error');
    if (urlSong && urlSong.includes("_")) {
      callSongIfQuery(urlSong);
    } else if (paramsSong && paramsSong.includes("_")) {
      callSongIfQuery(paramsSong);
    };
  }, [rrdLocation]); // use if there is a direct song in the url

  function callSongIfQuery(passedSong) {
    passedSong = passedSong.replaceAll('-', " ");
    passedSong.replace(passedSong.charAt(0), passedSong.charAt(0).toUpperCase());

    const splittedSongTitle = {
      artistName: encodeURI(` ${passedSong.split('_')[0]} `),
      songName: encodeURI(` ${passedSong.split('_')[1]} `)
    };
    
    passedSong = passedSong.replaceAll('_', " - ");
    if(currLyricsContext.title.replaceAll(' ', '') == passedSong.replaceAll(' ', '')){
      return; // Break if the song is the same song
    }else{
      // If the song is from /songs path - change the page title 
      if (urlSong) {setCurrTitle(passedSong + " " + T.Translated)};
      // Call the song
      currLyricsContext.getSongLyrics(splittedSongTitle, passedSong);
    }
  }

  return (

    <div className={`${className} page`}>
      {(!currLyricsContext.lines?.[0] || !currLyricsContext.title ) &&
        <Container className="home-top" maxWidth={false}>
          <Grid container className="home-t-container">

            <Typography variant="h2" className="page-h2">
              {T.MeturgaMusic}
            </Typography>

            <Grid item className="mainPics-container" xs={12} sm={6}>

              {theme.mode !== 'dark' ?
                <img className="wide-pic" alt="site-in-action" src={mainPic} loading="lazy" ></img>
                :
                <img className="wide-pic wide-pic-dark" alt="site-in-action" src={mainPicDark} loading="lazy"></img>
              }

            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h1" className="h3-start h3-start-top">
                {T.H3StartTop}
              </Typography>

              <Typography variant="h3" className="page-h3">

                <span className="h3-start h3-start-one">
                  {T.H3StartOne}
                </span>

                <span className="h3-start h3-start-two">
                  {T.H3StartTwo}
                </span>

                <span className="h3-middle">
                  {T.H3Middle}
                </span>

                <span className="h3-bottom">
                  {T.H3Bottom}
                </span>

              </Typography>

              <SearchBar focused={searchFocused} locat={"main"} size={"large"}></SearchBar>
            </Grid>

          </Grid>

        </Container>
      }

      {(!currLyricsContext.lines?.[0] && !currLyricsContext.title ) &&
        <AboutBody></AboutBody>
      }

      {(currLyricsContext.lines?.[0] && currLyricsContext.title ) &&
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