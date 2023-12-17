import { useContext, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';
import { default as LyricsBody } from '@components/LyricsBody/StyledLyricsBody';

import utils from '@/utils';
import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import { DrawerContext } from '@context/DrawerContext';

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

            <Grid item xs={12} sm={6}>
              <Typography variant="h1" className="page-h1">
                שירים <br className="h1-br"></br>מתורגמים
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h3" className="page-h3">

                <span className="h3-start h3-start-top">
                  האתר ללימוד אנגלית באמצעות שירים
                </span>

                <span className="h3-start h3-start-one">
                  חפשו בין מיליוני שירים ברשת
                </span>

                <span className="h3-start h3-start-two">
                  והאתר יתרגם את השיר
                </span>

                <span className="h3-middle">
                  בצורה נוחה ללימוד אנגלית
                </span>

                <span className="h3-bottom">
                  ללא איבוד טקסט המקור
                </span>

              </Typography>

              <SearchBar locat={"main"} size={"large"}></SearchBar>
            </Grid>

          </Grid>

          <Grid container className="home-t-about">
            <Grid item xs={12} sm={6}>

            </Grid>
          </Grid>
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