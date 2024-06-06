import { useContext, useEffect } from "react";
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
  const { urlSong } = useParams(); // Song of path="/songs/:directSong"
  const paramsSong = searchParams.get("song"); // Song of /?song= (with hash and without)
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    // Avoiding infinite HomePage useEffect that depends on rrdLocation (page params) 
    if (urlSong) {
      return;
    } else if (!paramsSong) {
      setSearchParams(utils.titleToParams(currLyricsContext.title));
    } else if (!utils.titleToParams(currLyricsContext.title) == paramsSong) {
      setSearchParams(utils.titleToParams(currLyricsContext.title));
    } else {
      return;
    }
  }, [currLyricsContext.title]);

  const handleBackToHome = () => {
    window.location.href = "/";
  }

  return (
    <Paper elevation={3} className={className}>
      <Grid container rowSpacing={1} columnSpacing={0}>

        <Grid item xs={12} className="l-body-top">
          {!urlSong && // If the song is from /songs path - Don't show the remove icon
            <IconButton onClick={() => currLyricsContext.resetSong(setSearchParams)}>
              <CloseOutlinedIcon className='remove-icon' />
            </IconButton>
          }
          {urlSong && // If the song is from /songs path - Don't show the remove icon
            <IconButton onClick={() => currLyricsContext.resetSong(handleBackToHome)}>
              <CloseOutlinedIcon className='remove-icon' />
            </IconButton>
          }

          {currLyricsContext.translatedBy &&
            <Chip className='trans-by-chip'
              label={TUtils.TransBy + currLyricsContext.translatedBy + '-translator'}
              color="default" variant="filled" size='small' />
          }

          {!urlSong &&
            <Typography
              variant="h6"
              component="h3"
              style={{ fontSize: settingsContext.fontSize.lg, direction: "ltr" }}
            >
              {currLyricsContext.title &&
                currLyricsContext.title.split(' ').map((word, i) => {
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
              style={{ fontSize: settingsContext.fontSize.lg + 8, direction: "ltr", textAlign: 'center' }}
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
                  paddingTop: ((y > 0 && line.src.includes('|')) ? '20px' : '0px'),
                  lineHeight: (settingsContext.fontSize.md < 18 ? settingsContext.fontSize.md + 3 + 'px' : settingsContext.fontSize.md + 10 + 'px'),
                }}
              >
                {line.src.split(' ').map((word, i) => {
                  if (word.slice(-1) === "'") word = word.replaceAll("'", "g"); // Change short Pronunciation spelling like goin' to - going
                  return (
                    <LyricToolTip key={i} lyric={word} lyricID={y.toString() + i.toString()} ></LyricToolTip>
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
