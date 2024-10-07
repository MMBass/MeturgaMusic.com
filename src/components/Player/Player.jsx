import { useContext, useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

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
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import FastRewindOutlinedIcon from '@mui/icons-material/FastRewindOutlined';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import constants from '@/constants';

function Player({ className }) {
  const [hide, setHide] = useState(!JSON.parse(localStorage.getItem('showPlayer')));
  const [fullSize, setFullSize] = useState(false);
  const currLyricsContext = useContext(CurrLyricsContext);
  const youtubePlayer = useRef(null);
  const [isFirstPlaying, setIsFirstPlaying] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [playerError, setPlayerError] = useState(false);

  useEffect(() => {
    // Reset player state when title or videoId changes:
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsFirstPlaying(true);
    setPlayerError(false);

    setHide(!JSON.parse(localStorage.getItem('showPlayer')));
    if (!localStorage.getItem('showPlayer')) localStorage.setItem('showPlayer', 'true');
    console.log(youtubePlayer.current);

    if (currLyricsContext.title && currLyricsContext.videoId) {
      if (youtubePlayer.current) {
        // API already loaded, skip the window.onYouTubeIframeAPIReady (while it's run only once at a session anyway - no use to wait for it)
        youtubePlayer.current = new window.YT.Player('youtube-player', {
          videoId: currLyricsContext.videoId,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      } else {
        // First time - need to load the API
        if (document.querySelector('script[src="https://www.youtube.com/iframe_api"]') === null) {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
          youtubePlayer.current = new window.YT.Player('youtube-player', {
            videoId: currLyricsContext.videoId,
            events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
              onError: onPlayerError
            }
          });
        };
      }
    }
  }, [currLyricsContext.videoId]);

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
    // event.target.playVideo(); // Not working? or works sometimes but than not fiering the API?
    setDuration(event.target.getDuration());
    youtubePlayer.current.setVolume(100); // TODO remove if using volume slider
  };

  const onPlayerStateChange = (event) => {
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
  };

  const onPlayerError = (event) => {
    console.log('Player Error: ' + event.data);
    if (event.data === 150) {
      setPlayerError("Video Unavailable");
    } else {
      setPlayerError("Something went wrong");
    }
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

              <IconButton onClick={() => skipSeconds(-10)}>
                <FastForwardOutlinedIcon />
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

                  {/* Play icon overlay */}
                  <div className="play-icon-overlay">
                    <PlayArrowOutlinedIcon fontSize="large" />
                  </div>
                </span>
              </IconButton>

              <IconButton onClick={togglePlay} style={{ display: isFirstPlaying ? 'none' : 'flex' }}>
                {playerError ?
                  <ErrorOutlineOutlinedIcon></ErrorOutlineOutlinedIcon>
                  :
                  <>{isPlaying ? <PauseIcon fontSize='large' /> : <PlayArrowOutlinedIcon fontSize='large' />}</>
                }
              </IconButton>

              <IconButton onClick={() => skipSeconds(10)}>
                <FastRewindOutlinedIcon />
              </IconButton>
              <IconButton className='drag-handle'>
                <DragIndicatorIcon className='drag-icon' />
              </IconButton>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', margin: '5px 20px', }}>
              {playerError ?
                <Typography variant='body2' component='p' margin={'auto'}>{playerError}</Typography>
                :
                <>
                  <Typography variant='button' component='p'>{formatTime(currentTime)}</Typography>
                  {duration ?
                    <Slider
                      value={currentTime}
                      max={duration}
                      onChange={(e, newValue) => skipBySlider(newValue)}
                      sx={{ margin: '0 13px' }}
                    />
                    :
                    <LinearProgress size={18} sx={{ margin: '0 13px', width: '100%' }} ></LinearProgress>
                  }
                  <Typography variant='body2' component='p'>{formatTime(duration)}</Typography>

                </>

              }

            </Box>

          </Card>
        </Draggable>
      }
      {(!hide && !currLyricsContext.videoId && currLyricsContext.lines?.[0]) &&
        <Draggable handle=".drag-handle" bounds="parent">
          <Card sx={{ display: 'flex', flexDirection: 'column', width: '250px' }} className={className}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 8px' }}>
              <ErrorOutlineOutlinedIcon></ErrorOutlineOutlinedIcon>
              <Typography variant='body2' component='p' margin={'auto'}>No video found</Typography>
              <IconButton onClick={() => setHide(true)}>
                <CloseOutlinedIcon className='remove-icon' onTouchStart={() => setHide(true)} />
              </IconButton>
            </Box>
          </Card>
        </Draggable>
      }
    </>
  );
}

export default Player;