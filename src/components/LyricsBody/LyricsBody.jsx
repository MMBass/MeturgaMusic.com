import { useContext } from "react";
import { useSearchParams, useParams } from "react-router-dom";

import T from "./LyricsBodyI18n";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import useMediaQuery from '@mui/material/useMediaQuery';

import LyricToolTip from '@components/LyricToolTip/StyledLyricToolTip';
import ToggleFullScreen from '@components/ToggleFullScreen/StyledToggleFullScreen';
import ToggleSaveSong from '@components/ToggleSaveSong/StyledToggleSaveSong';
import BuyMeCoffeeBtn from '@components/BuyMeCoffeeBtn/StyledBuyMeCoffeeBtn';
import Gifts from '@components/Gifts/StyledGifts';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { SettingsContext } from '@context/SettingsContext';

import { LYRICS_BODY } from '@/constants';
import TUtils from '@/i18n-utils';
import utils from "@/utils";

function LyricsBody({ className }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { urlSong } = useParams(); // Song of path="/songs/:directSong"
  const paramsSong = searchParams.get("song"); // Song of /?song= (with hash and without)
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const handleBackToHome = () => {
    window.location.href = "/";
  }

  return (
    <Paper elevation={3} className={className}>
      <Grid container rowSpacing={1} columnSpacing={0}>

        <Grid item xs={12} className="l-body-top">

          <Grid container className="l-body-top-actions" justifyContent={window.innerWidth > 600 ? "space-between" : "flex-start"} alignItems="center">

            <IconButton onClick={() => currLyricsContext.resetSong(urlSong ? handleBackToHome : setSearchParams /* If the song is from /songs path, change also the path on reset */)}>
              <CloseOutlinedIcon className='remove-icon' />
            </IconButton>

            {currLyricsContext.translatedBy &&
              <Chip className='trans-by-chip'
                label={TUtils.TransBy + currLyricsContext.translatedBy + '-translator'}
                color="default" variant="filled" size='small' />
            }

            <div className="l-body-top-actions-left">
              <ToggleSaveSong songTitle={currLyricsContext.title}></ToggleSaveSong>
              <ToggleFullScreen></ToggleFullScreen>
            </div>
          </Grid>

          {!urlSong &&
            <Typography
              variant="h6"
              component="h3"
              style={{ fontSize: settingsContext.fontSize.lg, direction: "ltr", marginTop: '20px' }}
            >
              {currLyricsContext.title &&
                currLyricsContext.title.split(' ').map((word, i) => {
                  if (word.includes(LYRICS_BODY.PHRASE_BREAK)) { return }; // For AZ cases
                  return (
                    <LyricToolTip key={i} lyric={word} lyricID={'title' + i}></LyricToolTip>
                  )
                })
              }

            </Typography>
          }

          {/* This section creates H1 for the songs in site-map, for seo (crawlers)
          if the url is from path="/songs/:directSong" */}
          {urlSong &&
            <Typography
              variant="h6"
              component="h1"
              style={{ fontSize: settingsContext.fontSize.lg + 8, direction: "ltr", textAlign: 'center', marginTop: '20px' }}
            >
              {currLyricsContext.title &&
                currLyricsContext.title
              }
              <br></br>
              {TUtils.Translated}
            </Typography>
          }
          {/* Set the PARTIAL LYRICS alert */}
          {currLyricsContext.lines[currLyricsContext.lines.length - 1].src.includes(LYRICS_BODY.PARTIAL_LYRICS) &&
            <Alert className="partialLyrics-mui-alert inLyrics-mui-alert" severity="error">
              <AlertTitle>{T.LyricsErrTitle}</AlertTitle>
              {T.PartialLyricsErr}
            </Alert>
          }
        </Grid>

        {(currLyricsContext.linesVersion === (currLyricsContext.lines[1]?.src + currLyricsContext.lines[2]?.src)) &&
          currLyricsContext.lines.map((line, y) => {
            if (line.src.includes('[') || line.src.includes('|')) {
              line.trans = '   ';
              line.src = line.src.replaceAll('[', '|')
              line.src = line.src.replaceAll(']', '|')
            }
            return (
              <Grid item xs={12} key={y}>

                <Box className="lyrics-line en-line"
                  style={{
                    fontSize: settingsContext.fontSize.md,
                    paddingTop: ((y > 0 && line.src.includes('|')) ? '20px' : '0px'), // | means a line break
                    lineHeight: (settingsContext.fontSize.md < 18 ? settingsContext.fontSize.md + 3 + 'px' : (settingsContext.fontSize.md > 35 ? settingsContext.fontSize.md + 30 + 'px' : settingsContext.fontSize.md + 10 + 'px')),
                  }}
                >
                  {line.src.split(' ').map((word, i) => {
                    if (line.src.includes(LYRICS_BODY.PARTIAL_LYRICS)) { return };
                    if (word.includes(LYRICS_BODY.PHRASE_BREAK)) { return }; // Also For AZ cases
                    if (word.slice(-1) === "'") word = word.replaceAll("'", "g"); // Change short Pronunciation spelling like goin' to - going
                    return (
                      <LyricToolTip key={i} lyric={word} lyricID={y.toString() + i.toString()} ></LyricToolTip>
                    )
                  })}
                </Box>

                <Box className="lyrics-line he-line"
                  style={{
                    fontSize: settingsContext.fontSize.md,
                    lineHeight: (settingsContext.fontSize.md < 18 ? settingsContext.fontSize.md + 3 + 'px' : (settingsContext.fontSize.md > 35 ? settingsContext.fontSize.md + 30 + 'px' : settingsContext.fontSize.md + 10 + 'px')),
                  }}
                >
                  <>
                    {(() => {
                      if (line.trans?.includes(LYRICS_BODY.PHRASE_BREAK)) { return }; // Don't show a phrase breaks
                      return line.trans?.length ?
                        <>{line.trans === '   ' ? '' : <p className="single-trans">{line.trans}</p>}</>
                        :
                        <small className="single-trans">{TUtils.LoadingTrans}</small>
                    })()}
                  </>
                </Box>

                {(line.src.includes('|')) && <br></br>} {/* | means a line break */}
              </Grid>
            );
          })}

        {(currLyricsContext.linesVersion !== currLyricsContext.lines[1]?.src + currLyricsContext.lines[2]?.src) &&
          <Alert className="inLyrics-mui-alert" severity="error">
            <AlertTitle>{T.LyricsErrTitle}</AlertTitle>
            {T.ContextErrorText}
          </Alert>
        }

        <Grid item xs={12}>
          <Gifts className={'gifts-component'}></Gifts>
        </Grid>

      </Grid>
    </Paper>
  );
}

export default LyricsBody;
