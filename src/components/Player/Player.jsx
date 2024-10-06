import { useContext, useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import constants from '@/constants';

function Player({ className }) {
  const [hide, setHide] = useState(true);
  const [fullSize, setFullSize] = useState(false);
  const currLyricsContext = useContext(CurrLyricsContext);
  const youtubePlayer = useRef(null);
  const [isFirstPlaying, setIsFirstPlaying] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setHide(!JSON.parse(localStorage.getItem('showPlayer')));
    if (!localStorage.getItem('showPlayer')) localStorage.setItem('showPlayer', 'true');

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      youtubePlayer.current = new window.YT.Player('youtube-player', {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };
  }, []);

  useEffect(() => {
    setHide(!JSON.parse(localStorage.getItem('showPlayer')));
  }, [currLyricsContext.title]);

  useEffect(() => {
    const trackInterval = setInterval(() => {
      if (youtubePlayer.current && isPlaying) {
        const time = youtubePlayer.current.getCurrentTime();
        if (time > 0) {
          setIsFirstPlaying(false);
        }
        setCurrentTime(time);
      }
    }, 200);
    return () => clearInterval(trackInterval);
  }, [isPlaying]);

  const onPlayerReady = (event) => {
    setDuration(event.target.getDuration());
  };

  const onPlayerStateChange = (event) => {
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
  };

  // function toggleFull() {
  //   setFullSize(!fullSize);
  // }

  const togglePlay = () => {
    if (isPlaying) {
      youtubePlayer.current.pauseVideo();
    } else {
      youtubePlayer.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const skipSeconds = (seconds) => {
    if (youtubePlayer.current) {
      const newTime = currentTime + seconds;
      youtubePlayer.current.seekTo(newTime, true);
      setCurrentTime(newTime);
    }
  };

  const skipBySlider = (newValue) => {
    if (youtubePlayer.current) {
      youtubePlayer.current.seekTo(newValue, true);
      setCurrentTime(newValue);
      youtubePlayer.current.playVideo();
    }
  };

  const handleVolumeChange = (e, newValue) => {
    setVolume(newValue);
    if (youtubePlayer.current) {
      youtubePlayer.current.setVolume(newValue);
    }
  };

  const toggleMute = () => {
    if (youtubePlayer.current) {
      if (isMuted) {
        youtubePlayer.current.unMute();
        setVolume(10);
      } else {
        youtubePlayer.current.mute();
        setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>

      {(!hide && currLyricsContext.videoId && currLyricsContext.lines?.[0]) &&
        <Draggable handle=".drag-handle" bounds="parent">
          <Card sx={{ display: 'flex', flexDirection: 'column', width: fullSize ? '300px' : '250px' }} className={className}>
            {/* <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 8px' }}>

              <Box sx={{ width: '60%', display: 'flex', alignItems: 'center', marginTop: '0 auto' }}>
                <IconButton onClick={toggleMute}>
                  {isMuted ? <VolumeOffIcon fontSize='small' /> : <VolumeUpIcon fontSize='small' />}
                </IconButton>

                <Slider
                  value={volume}
                  onChange={handleVolumeChange}
                  sx={{ margin: '0 8px', height: 4, '& .MuiSlider-thumb': { width: 12, height: 12 } }}
                />
              </Box>
            </Box> */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 8px' }}>
              <IconButton onClick={() => setHide(true)}>
                <CloseOutlinedIcon className='remove-icon' onTouchStart={() => setHide(true)} />
              </IconButton>
              {/* <IconButton onTouchStart={toggleFull} onClick={toggleFull}>
                {fullSize ? <CloseFullscreenIcon fontSize={'small'} /> : <OpenInFullIcon fontSize={'small'} />}
              </IconButton> */}

              <IconButton onClick={() => skipSeconds(-10)}>
                <FastForwardIcon />
              </IconButton>
              <IconButton disableRipple={true} sx={{ visibility: !isFirstPlaying ? 'hidden' : 'visible', position: !isFirstPlaying ? 'fixed' : 'relative' }}>
                <span className='iframe-parent-btn'>
                  <iframe
                    style={{ borderRadius: '25px' }}
                    id='youtube-player'
                    src={constants.youtubeEmbedUri + currLyricsContext.videoId + constants.youtubeEmbedProps}
                    title={'video'}
                    allowFullScreen={false}
                    width={isFirstPlaying ? "30" : "0"}
                    height={isFirstPlaying ? "30" : "0"}
                  ></iframe>
                </span>

              </IconButton>
              <IconButton onClick={togglePlay} style={{ display: isFirstPlaying ? 'none' : 'block' }}>
                {isPlaying ? <PauseIcon fontSize='large' /> : <PlayArrowIcon fontSize='large' />}
              </IconButton>
              <IconButton onClick={() => skipSeconds(10)}>
                <FastRewindIcon />
              </IconButton>
              <IconButton className='drag-handle'>
                <DragIndicatorIcon className='drag-icon' />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '5px 20px', }}>
              <Typography variant='button' component='p' >{formatTime(currentTime)}</Typography>
              <Slider
                value={currentTime}
                max={duration}
                onChange={(e, newValue) => skipBySlider(newValue)}
                sx={{ margin: '0 13px' }}
              />
              <Typography variant='body2' component='p'>{formatTime(duration)}</Typography>
            </Box>

          </Card>
        </Draggable>
      }
    </>
  );
}

export default Player;