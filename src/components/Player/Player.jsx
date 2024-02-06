import { useContext, useState, useEffect } from 'react';
import Draggable from 'react-draggable';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

// Imports for skip 10 seconds functionallity:
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import Constants from '@/constants';

function Player({ className }) {
  const [hide, setHide] = useState(true);
  const [fullSize, setFullSize] = useState(false);
  const currLyricsContext = useContext(CurrLyricsContext);

  useEffect(() => {
    setHide(!JSON.parse(localStorage.getItem('showPlayer')));

    if (!localStorage.getItem('showPlayer')) localStorage.setItem('showPlayer', 'true');
  }, []);

  useEffect(() => {
    setHide(!JSON.parse(localStorage.getItem('showPlayer')));
  }, [currLyricsContext.title]);

  function toggleFull() {
    setFullSize(!fullSize);
  };

  return (
    <>
      {(!hide && currLyricsContext.videoId && currLyricsContext.lines?.[0]) &&
        <Draggable>
          <Card sx={{ display: 'flex' }} className={className}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }} className='remove-icon-box'>
                <IconButton onClick={() => setHide(true)}>
                  <CloseOutlinedIcon className='remove-icon' onTouchStart={() => setHide(true)} />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }} className='remove-icon-box'>

                {fullSize ?
                  <IconButton onTouchStart={() => toggleFull()} onClick={() => toggleFull()}>
                    <CloseFullscreenIcon fontSize={'small'} />
                  </IconButton>
                  :
                  <IconButton onTouchStart={() => toggleFull()} onClick={() => toggleFull()}>
                    <OpenInFullIcon fontSize={'small'} />
                  </IconButton>
                }

              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <IconButton>
                  <DragIndicatorIcon className='drag-icon' />
                </IconButton>
              </Box>


            </Box>
            <CardMedia
              children={<iframe
                src={Constants.youtubeEmbedUri + currLyricsContext.videoId}
                title={'video'}
                allowFullScreen={false}
                className={fullSize ? "full-frame" : ""}
                width={fullSize ? "420" : "250"}
                height={fullSize ? "240" : "135"}
                rel='0'
                frameBorder={0}
              ></iframe>}
              component="div"
              alt="Music plsyer"
            />
          </Card>
        </Draggable>
      }
    </>

  );
}

export default Player;

