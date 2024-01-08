import { useContext, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
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

import mainPic from '../../images/screenshots/latest/combined-shot-whiteBg-player.png';
import mainPic2 from '../../images/screenshots/latest/combined-shot-white-ttip.png';

function HomePage({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const drawerContext = useContext(DrawerContext);
  const [searchParams, setSearchParams] = useSearchParams(); // using the react-router hook, works with hashed pages
  const sname = searchParams.get("song");

  useEffect(() => {
    // note! the params in HashRouter works only this pattern: http://.../#/?song=artist_title
    drawerContext.closeDrawer();
    if (bannersContext.error) bannersContext.closeBanner('error');

    if (sname && sname.includes("_")) {
      callSongIfQuery(sname);
    };
  }, []); // use if there is a direct song in the url

  function callSongIfQuery() {
    let songTitle = sname;
    songTitle = songTitle.replaceAll('-', " ");

    const splittedSongTitle = {
      artistName: encodeURI(` ${songTitle.split('_')[0]} `),
      songName: encodeURI(` ${songTitle.split('_')[1]} `)
    };

    songTitle = songTitle.replaceAll('_', " - ");

    currLyricsContext.getSongLyrics(splittedSongTitle, songTitle);
  }

  return (

    <div className={className}>
      {!currLyricsContext.lines?.[0] &&
        <Container className="home-top" maxWidth={false}>
          <Grid container className="home-t-container">

            {/* <Grid item xs={12} sm={6}>
              <Typography variant="h1" className="page-h1">
                {T.OldPageH1part1} <br className="h1-br"></br>{T.OldPageH1part2}
              </Typography>
            </Grid> */}

            <Grid item className="mainPics-container" xs={12} sm={6}>
              <img className="wide-pic" src={mainPic}></img>  
              <img className="mobile-pic" src={mainPic2}></img>  
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h3" className="page-h3">

                <Typography variant="h1" className="h3-start h3-start-top">
                  {T.H3StartTop}
                </Typography>

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

              <SearchBar locat={"main"} size={"large"}></SearchBar>
            </Grid>

          </Grid>

          {/* <AboutBody></AboutBody> */}
        </Container>
      }

      {currLyricsContext.lines?.[0] &&
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