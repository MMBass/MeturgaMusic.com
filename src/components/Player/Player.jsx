import { useContext } from 'react';

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

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function Player({className}) {
  const currLyricsContext = useContext(CurrLyricsContext);

  const theme = useTheme();

  return (
    <>
      {currLyricsContext.videoId && 
        <Card sx={{ display: 'flex' }} className={className}>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box> */}
        <CardMedia
          children={<iframe
            src={`https://www.youtube.com/embed/${currLyricsContext.videoId}`}
            title={'video'}
            allowFullScreen={false}
            width="250" height="135"
            rel='0'
          ></iframe>}
          component="div"
          // sx={{ width: 100 }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Card>
      }
    </>
  );
}

export default Player;

