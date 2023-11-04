import { useContext, useEffect } from "react";

import {
  useSearchParams,
} from "react-router-dom";

import { Typography, Box, Grid } from "@mui/material";
import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';
import { default as LyricsBody } from '@components/LyricsBody/StyledLyricsBody';

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

  function HandleSubmit(e) {
    e.preventDefault();
  }

  return (

    <div className={className}>
      <div className="home-top">
        <Grid container className="home-t-container">

          {!currLyricsContext.lines?.[0] &&
            <Grid item xs={12} sm={6}>
              <Typography variant="h1" className="page-h1">
                שירים מתורגמים
                {/* <br></br>
                שורה בשורה */}
              </Typography>
            </Grid>
          }

          <Grid item xs={12} sm={6}>
            {!currLyricsContext.lines?.[0] &&
              <Typography variant="h3" className="page-h3">

                <span className="h3-start h3-s-one">
                  חפשו בין מיליוני שירים באנגלית
                </span>
                <br></br>
                <span className="h3-start h3-s-two">
                  וקבלו את השיר מתורגם לעברית
                </span>
                <br></br>

                <p className="small-one">
                  לא נמצא? נסו לחפש עם שם האמן
                </p>
                <div className="small-two">
                  <small >
                    לחיצה על מילה תציג תרגומים נוספים
                  </small>
                </div>

              </Typography>
            }

            {!currLyricsContext.lines?.[0] &&
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={HandleSubmit}
                className="search-ctr"
              >
                <SearchBar locat={"main"} size={"large"}></SearchBar>
              </Box>
            }
          </Grid>

        </Grid>
      </div>

      {currLyricsContext.lines?.[0] &&
        <LyricsBody className={'lyrics-body'}></LyricsBody>
      }

    </div >
  );

};

export default HomePage;