import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from "react-router-dom";

import {
  Grid,
  Box,
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { default as LyricToolTip } from '@components/LyricToolTip/StyledLyricToolTip';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { SettingsContext } from '@context/SettingsContext';
import utils from '@/utils';

function LyricsBody({ className, ...props }) {
  let [searchParams, setSearchParams] = useSearchParams();
  
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    setSearchParams(utils.titleToParams(currLyricsContext.title));
  }, [currLyricsContext.title]);

  const removeSsLines = () => {
    currLyricsContext.setAbort(true);
    sessionStorage.removeItem('currLines');
    currLyricsContext.setLines([]);
    currLyricsContext.setTitle('');
    setSearchParams('');
  }

  return (
    <Paper elevation={3} className={className}>
      <Grid container rowSpacing={1} columnSpacing={0}>

        <Grid item xs={12}>
          <IconButton onClick={() => removeSsLines()}>
            <CloseOutlinedIcon className='remove-icon' />
          </IconButton>

          <Typography
            variant="h6"
            component="h3"
            style={{ fontSize: settingsContext.fontSize.lg, direction: "ltr" }}
          >
            {currLyricsContext.title &&
              currLyricsContext.title.split(' ').map((word, i) => {
                return (
                  <LyricToolTip key={uuidv4()} lyric={word} open={false}></LyricToolTip>
                )
              })
            }
          </Typography>
        </Grid>

        {currLyricsContext.lines.map((line, y) => {
          if (line.src.includes('[')) {
            line.trans = '   ';
          }
          return (
            <Grid item xs={12} key={uuidv4()}>
              {(y > 0 && line.src.includes('[')) && <><br></br><br></br></>}

              <Box className="lyrics-line en-line"
                style={{ fontSize: settingsContext.fontSize.md }}
              >
                {line.src.split(' ').map((word, i) => {
                  if (word.slice(-1) === "'") word = word.replaceAll("'", "g"); // change short Pronunciation spelling like goin' to - going
                  return (
                    <LyricToolTip key={uuidv4()} lyric={word} open={(y == 1 & i == 1)}></LyricToolTip>
                  )
                })}
              </Box>

              <Box className="lyrics-line he-line"
                style={{ fontSize: settingsContext.fontSize.md }}
              >
                <>
                  {
                    line.trans?.length ?
                      line.trans.split(' ').map((word, i) => {
                        if (line.trans === '   ') return;
                        return (
                          <small className="single-trans" key={uuidv4()}>{word} &nbsp;</small>
                        )
                      })
                      :
                      <small className="single-trans">טוען תרגום...</small>
                  }
                </>
              </Box>
            </Grid>
          );
        })}

        {/* <Grid item xs={12} key={"ad-lyrics-body-bottom"}> */}
          {/* single text body AD */}
          {/* <ins className="adsbygoogle"
              style={{ display: "block", textAlign: "center" }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-8294214228053744"
              data-ad-slot="5288837770"></ins> */}
          {/* END single text body AD */}
        {/* </Grid> */}

      </Grid>
    </Paper>
  );
}

export default LyricsBody;
