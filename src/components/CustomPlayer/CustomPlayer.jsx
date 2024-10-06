import { useContext, useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import T from "./CustomPlayerI18n";

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import constants from '@/constants';

import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

function CustomPlayer({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);
  const [hide, setHide] = useState(true);

  const [pos, setPos] = useState({ x: 20, y: 20 });
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // const playerRef = useRef(null);
  const youtubePlayer = useRef(null);

  useEffect(() => {
    setHide(!JSON.parse(localStorage.getItem('showPlayer')));
  }, [currLyricsContext.title]);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      youtubePlayer.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'GNZ4za6cMtM',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };
  }, []);

  const onPlayerReady = (event) => {
    setDuration(event.target.getDuration());
  };

  const onPlayerStateChange = (event) => {
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (youtubePlayer.current && isPlaying) {
        const time = youtubePlayer.current.getCurrentTime();
        setCurrentTime(time);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

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
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (youtubePlayer.current) {
      youtubePlayer.current.setVolume(newVolume);
    }
  };

  const toggleMute = () => {
    if (youtubePlayer.current) {
      if (isMuted) {
        youtubePlayer.current.unMute();
      } else {
        youtubePlayer.current.mute();
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
        <Draggable>
          <div
            id="container"
            className={className + " relative w-[800px] h-[600px] bg-gray-100 border-2 border-gray-300 rounded-lg"}
          >
            <div id="youtube-player" style={{ display: 'none' }}></div>

            <div
              id="player"
              className="absolute bg-zinc-800 rounded-lg p-2 shadow-lg"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                width: '220px'
              }}
              onMouseDown={onMouseDown}
            >
              <div className="bg-zinc-700 rounded-lg p-1 mb-2 cursor-move">
                <div className="h-1 w-12 bg-zinc-600 rounded-full mx-auto" />
              </div>

              <div className="text-white">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center justify-center space-x-2 flex-1">
                    <button onClick={() => skipSeconds(-5)} className="p-1 hover:bg-zinc-700 rounded-full">
                      <SkipBack className="w-5 h-5" />
                    </button>

                    <button onClick={togglePlay} className="p-1 hover:bg-zinc-700 rounded-full">
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>

                    <button onClick={() => skipSeconds(5)} className="p-1 hover:bg-zinc-700 rounded-full">
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button onClick={toggleMute} className="p-1 hover:bg-zinc-700 rounded-full">
                      {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-12 h-1 bg-zinc-600 rounded-full appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="relative flex items-center space-x-1">
                  <span className="text-[10px] text-zinc-400 w-7">{formatTime(currentTime)}</span>
                  <div className="flex-grow">
                    <div className="relative h-1 bg-zinc-600 rounded-full cursor-pointer">
                      <div
                        className="absolute h-full bg-blue-500 rounded-full"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-400 w-7 text-right">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>

        </Draggable>
      }
    </>
  );
}

export default CustomPlayer;