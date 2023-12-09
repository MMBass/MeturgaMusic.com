import { useContext, useState, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import { CurrLyricsContext } from '@context/CurrLyricsContext';

import Draggable from 'react-draggable';

function Player({ className }) {
  const [hide, setHide] = useState(false);
  const [fullSize, setFullSize] = useState(false);
  const currLyricsContext = useContext(CurrLyricsContext);

  const theme = useTheme();

  useEffect(() => {
    setHide(false);
  }, [currLyricsContext.title]);

  function toggleFull() {
    setFullSize(!fullSize);
  };

  return (
    <>
      {(!hide && currLyricsContext.videoId && currLyricsContext.lines?.[0]) &&
        <Draggable >
          <Card sx={{ display: 'flex' }} className={className}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }} className='remove-icon-box'>
                <IconButton>
                  <CloseOutlinedIcon className='remove-icon' onTouchStart={() => setHide(true)} onClick={() => setHide(true)} />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }} className='remove-icon-box'>
                <IconButton>
                  {fullSize ?
                    <CloseFullscreenIcon fontSize={'small'} onTouchStart={() => toggleFull()} onClick={() => toggleFull()} />

                    :
                    <OpenInFullIcon fontSize={'small'} onTouchStart={() => toggleFull()} onClick={() => toggleFull()} />

                  }
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <IconButton>
                  <DragIndicatorIcon className='drag-icon' />
                </IconButton>
              </Box>
          

            </Box>
            <CardMedia
              children={<iframe
                src={`https://www.youtube.com/embed/${currLyricsContext.videoId}`}
                title={'video'}
                allowFullScreen={false}
                className={fullSize ? "full-frame" : "" }
                width={fullSize ? "420" : "250" }
                height={fullSize ? "240" : "135" }
                rel='0'
                frameBorder={0}
              ></iframe>}
              component="div"
              image="/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Draggable>
      }
    </>

  );
}

export default Player;

