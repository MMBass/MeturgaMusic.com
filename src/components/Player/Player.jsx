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

import { CurrLyricsContext } from '@context/CurrLyricsContext';

import Draggable from 'react-draggable';

function Player({ className }) {
  const [hide, setHide] = useState(false);
  const currLyricsContext = useContext(CurrLyricsContext);

  const theme = useTheme();

  useEffect(() => {
    setHide(false);
  }, [currLyricsContext.title]);

  return (
    <>
      {(!hide && currLyricsContext.videoId && currLyricsContext.lines?.[0]) &&
        <Draggable >
          <Card sx={{ display: 'flex' }} className={className}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => setHide(true)}>
                  <CloseOutlinedIcon className='remove-icon' />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              children={<iframe
                src={`https://www.youtube.com/embed/${currLyricsContext.videoId}`}
                title={'video'}
                allowFullScreen={false}
                width="250" height="135"
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

