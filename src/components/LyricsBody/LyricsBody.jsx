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
  const { directSong } = useParams();
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    if (!directSong) {
      setSearchParams(utils.titleToParams(currLyricsContext.title)); // use if hashRouter
    }
  }, [currLyricsContext.title]);

  const removeSsLines = () => {
    currLyricsContext.setAbort(true);
    sessionStorage.removeItem('currLines');
    currLyricsContext.setLines([]);
    currLyricsContext.setTitle('');
    currLyricsContext.setVideoId('');
    setSearchParams('');
  }

  return (
    <Paper elevation={3} className={className}>
      <Grid container rowSpacing={1} columnSpacing={0}>

        <Grid item xs={12} className="l-body-top">
          <IconButton onClick={() => removeSsLines()}>
            <CloseOutlinedIcon className='remove-icon' />
          </IconButton>

          {currLyricsContext.translatedBy &&
            <Chip className='trans-by-chip'
              label={TUtils.TransBy + currLyricsContext.translatedBy}
              color="default" variant="filled" size='small' />
          }

          {!directSong &&
            <Typography
              variant="h6"
              component="h3"
              style={{ fontSize: settingsContext.fontSize.lg, direction: "ltr" }}
            >
              {currLyricsContext.title &&
                currLyricsContext.title.split(' ').map((word) => {
                  return (
                    <LyricToolTip key={uuidv4()} lyric={word} open={false}></LyricToolTip>
                  )
                })
              }
            </Typography>
          }

          {directSong &&
            <Typography
              variant="h6"
              component="h1"
              style={{ fontSize: settingsContext.fontSize.lg + 8, direction: "ltr", textAlign: 'center' }}
            >
              {currLyricsContext.title &&
                currLyricsContext.title.split(' ').map((word) => {
                  return (
                    <LyricToolTip key={uuidv4()} lyric={word} open={false}></LyricToolTip>
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
                    <LyricToolTip key={uuidv4()} lyric={word} open={(y == 1 & i == 1)}></LyricToolTip>
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
                      <small className="single-trans">טוען תרגום...</small>
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
