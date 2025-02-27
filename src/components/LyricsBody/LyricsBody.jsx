import { useContext, useEffect, useState } from "react";
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

import LyricToolTip from '@components/LyricToolTip/StyledLyricToolTip';
import ToggleFullScreen from '@components/ToggleFullScreen/StyledToggleFullScreen';
import ToggleSaveSong from '@components/ToggleSaveSong/StyledToggleSaveSong';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { SettingsContext } from '@context/SettingsContext';
import utils from '@/utils';
import TUtils from '@/i18n-utils';

function LyricsBody({ className }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { urlSong } = useParams(); // Song of path="/songs/:directSong"
  const paramsSong = searchParams.get("song"); // Song of /?song= (with hash and without)
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    urlOnTitleChange();
  }, [currLyricsContext.title]);

  const urlOnTitleChange = () => {
    if (urlSong) {
      return;  // Avoid infinite HomePage useEffect that depends on rrdLocation (page params) 
    } else if (!paramsSong) {
      setSearchParams(utils.titleToParams(currLyricsContext.title));
    } else if (paramsSong && utils.compareTitles(paramsSong, currLyricsContext.title)) {
      // TODO fix the logic - the !utils.titleToParams(currLyricsContext.title) == paramsSong is always true?
      setSearchParams(utils.titleToParams(currLyricsContext.title));
    } else {
      return; // The song is the same, do nothing
    }
  }

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

            <div className="l-body-top-actions">
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
                  // TODO find a better way for PHARSE BREAKing
                  if (word.includes('PHARSE_BREAK')) { return }; // For some AZ cases - TODO remove after DB cleaning
                  if (word.includes('|####|')) { return }; // For AZ cases
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
        </Grid>

        {currLyricsContext.lines.map((line, y) => {
          if (line.src.includes('****PARTIAL LYRICS****')) {
            return <Alert className="partialLyrics-mui-alert" severity="error">
            <AlertTitle>{T.PartialLyricsErrTitle}</AlertTitle>
            {T.PartialLyricsErr}
          </Alert>
          }
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
                  if (line.src.includes('****PARTIAL LYRICS****')) { return };
                  if (word.includes('PHARSE_BREAK')) { return }; // For AZ cases - TODO remove after DB cleaning
                  if (word.includes('|####|')) { return }; // Also For AZ cases
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
                    ;
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
      </Grid>
    </Paper>
  );
}

export default LyricsBody;
