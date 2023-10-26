import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import {
  Grid,
  Box,
  Typography
} from '@mui/material';

import { default as LyricToolTip } from '@components/LyricToolTip/StyledLyricToolTip';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { SettingsContext } from '@context/SettingsContext';

function LyricsBody({ className, ...props }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    const existingAdsScript = document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]');
    if (!existingAdsScript) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744';
      script.def = true;
      script.crossorigin = "anonymous";
      script.dataset.overlays = "bottom";
      document.body.appendChild(script);
    }
      
    // <!-- GOOGLE ads tag - Probabaly global for all account sites -->
    // <script def src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"
    //   crossorigin="anonymous"></script>
  }, []);

  return (
    <Box className={className}>
      <Grid container spacing={2}>
        {currLyricsContext.lines?.[0] &&
          <div id="lyrics_body">

            <Typography
              variant="h6"
              noWrap
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

            {currLyricsContext.lines.map((line, y) => {
              if (line.src.includes('[')) {
                line.trans = '   ';
              }
              return (
                <div key={uuidv4()}>
                  {(y > 0 && line.src.includes('[')) && <><br></br><br></br></>}

                  <Grid className="lyrics-line en-line" item
                    style={{ fontSize: settingsContext.fontSize.md }}
                  >
                    {line.src.split(' ').map((word, i) => {
                      if (word.slice(-1) === "'") word = word.replaceAll("'", "g"); // change short Pronunciation spelling like goin' to - going
                      return (
                        <LyricToolTip key={uuidv4()} lyric={word} open={(y == 1 & i == 1)}></LyricToolTip>
                      )
                    })}
                  </Grid>

                  <Grid item className="lyrics-line he-line"
                    style={{ fontSize: settingsContext.fontSize.sm }}
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
                  </Grid>
                </div>
              );
            })}


            {/* single text body AD */}
            {/* <ins className="adsbygoogle"
              style={{ display: "block", textAlign: "center", margin: '10px' }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-8294214228053744"
              data-ad-slot="5288837770"></ins> */}
            {/* END single text body AD */}
          </div>}

      </Grid>

    </Box >
  );
}

export default LyricsBody;
