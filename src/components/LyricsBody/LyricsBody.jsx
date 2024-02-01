import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams, useParams } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import LyricToolTip from '@components/LyricToolTip/StyledLyricToolTip';
import OfferInstall from '@components/OfferInstall/StyledOfferInstall';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { SettingsContext } from '@context/SettingsContext';
import utils from '@/utils';
import TUtils from '@/i18n-utils';

function LyricsBody({ className }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { directSong } = useParams(); // song of path="/songs/:directSong"
  const sname = searchParams.get("song"); // song of /?song= (with hash and without)
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    // Avoiding infinite HomePage useEffect that depends on rrdLocation (page params) 
    const paramsSong = directSong || sname || null;
    if (!paramsSong) {
      setSearchParams(utils.titleToParams(currLyricsContext.title));
    } else if (!utils.titleToParams(currLyricsContext.title) == paramsSong) {
      setSearchParams(utils.titleToParams(currLyricsContext.title));
    } else {
      return;
    }
  }, [currLyricsContext.title]);

  return (
    <Paper elevation={3} className={className}>
      <Grid container rowSpacing={1} columnSpacing={0}>

        <Grid item xs={12} className="l-body-top">
          <IconButton onClick={() => currLyricsContext.removeSsLines(setSearchParams)}>
            <CloseOutlinedIcon className='remove-icon' />
          </IconButton>

          {currLyricsContext.translatedBy &&
            <Chip className='trans-by-chip'
              label={TUtils.TransBy + currLyricsContext.translatedBy + '-translator'}
              color="default" variant="filled" size='small' />
          }

          {!directSong &&
            <Typography
              variant="h6"
              component="h3"
              style={{ fontSize: settingsContext.fontSize.lg, direction: "ltr" }}
            >
              {currLyricsContext.title &&
                currLyricsContext.title.split(' ').map((word, i) => {
                  return (
                    <LyricToolTip key={uuidv4()} lyric={word} lyricID={'title' + i}></LyricToolTip>
                  )
                })
              }
            </Typography>
          }

          {/* This section creates H1 for the songs in site-map, for seo (crawlers)
          if the url is from path="/songs/:directSong" */}
          {directSong &&
            <Typography
              variant="h6"
              component="h1"
              style={{ fontSize: settingsContext.fontSize.lg + 8, direction: "ltr", textAlign: 'center' }}
            >
              {currLyricsContext.title &&
                currLyricsContext.title.split(' ').map((word, i) => {
                  return (
                    <LyricToolTip key={uuidv4()} lyric={word} lyricID={'h1' + i}></LyricToolTip>
                  )
                })
              }
              <br></br>
              {TUtils.Translated}
            </Typography>
          }
        </Grid>

        {currLyricsContext.lines.map((line, y) => {
          if (line.src.includes('[') || line.src.includes('|')) {
            line.trans = '   ';
            line.src = line.src.replaceAll('[', '|')
            line.src = line.src.replaceAll(']', '|')
          }
          return (
            <Grid item xs={12} key={uuidv4()}>

              <Box className="lyrics-line en-line"
                style={{
                  fontSize: settingsContext.fontSize.md,
                  paddingTop: ((y > 0 && line.src.includes('|')) ? '20px' : '0px'),
                  lineHeight: (settingsContext.fontSize.md < 18 ? settingsContext.fontSize.md + 3 + 'px' : settingsContext.fontSize.md + 10 + 'px'),
                }}
              >
                {line.src.split(' ').map((word, i) => {
                  if (word.slice(-1) === "'") word = word.replaceAll("'", "g"); // change short Pronunciation spelling like goin' to - going
                  return (
                    <LyricToolTip key={uuidv4()} lyric={word} lyricID={y.toString() + i.toString()} ></LyricToolTip>
                  )
                })}
              </Box>

              <Box className="lyrics-line he-line"
                style={{
                  fontSize: settingsContext.fontSize.md,
                  lineHeight: (settingsContext.fontSize.md < 18 ? settingsContext.fontSize.md + 3 + 'px' : settingsContext.fontSize.md + 10 + 'px'),
                }}
              >
                <>
                  {
                    line.trans?.length ?
                      <>{line.trans === '   ' ? '' : <p className="single-trans">{line.trans}</p>}</>
                      :
                      <small className="single-trans">{TUtils.LoadingTrans}</small>
                  }
                </>
              </Box>

              {(line.src.includes('|')) && <br></br>}
            </Grid>
          );
        })}
        {/* <OfferInstall></OfferInstall> */}
      </Grid>
    </Paper>
  );
}

export default LyricsBody;
