import { useContext, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { Typography, Grid, Container } from "@mui/material";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const sname = searchParams.get("song");

  useEffect(() => {
    // note! the params in HashRouter works only this pattern: http://.../#/?song=artist_title
    drawerContext.closeDrawer();
    if (bannersContext.error) bannersContext.closeBanner('error');

    utils.directParamsToHash();
    if (sname && sname.includes("_")) {
      callSongIfQuery(sname);
    };

    // utils.loadGoogleAds();
    // window.adsbygoogle = window.adsbygoogle || [];
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

            {!currLyricsContext.lines?.[0] &&
              <Grid item xs={12} sm={6}>
                <Typography variant="h1" className="page-h1">
                  שירים <br className="h1-br"></br>מתורגמים
                </Typography>
              </Grid>
            }

            <Grid item xs={12} sm={6}>
              {!currLyricsContext.lines?.[0] &&
                <Typography variant="h3" className="page-h3">

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
              }


              <SearchBar locat={"main"} size={"large"}></SearchBar>


              <Typography>
                לא נמצא? נסו לחפש עם שם האמן
              </Typography>
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
            {/* <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-8294214228053744"
              data-ad-slot="2008052409"></ins> */}
          </Grid>
        </Grid>
      }

    </div >
  );

};

export default HomePage;