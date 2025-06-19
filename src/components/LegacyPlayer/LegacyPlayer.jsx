import { useContext, useState, useEffect } from 'react';
import Draggable from 'react-draggable';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { LOCAL_STORAGE_KEYS, EXTERNAL_LINKS } from '@/constants';

function LegacyPlayer({ className }) {
  const [hide, setHide] = useState(true);
  const [fullSize, setFullSize] = useState(false);
  const currLyricsContext = useContext(CurrLyricsContext);

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SHOW_PLAYER)) localStorage.setItem(LOCAL_STORAGE_KEYS.SHOW_PLAYER, 'true');
  }, []);

  useEffect(() => {
    setHide(!JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SHOW_PLAYER)));
  }, [currLyricsContext.title]);

  function toggleFull() {
    setFullSize(!fullSize);
  };

  return (
    <>
      {(!hide && currLyricsContext.videoId && currLyricsContext.lines?.[0]) &&
        <Draggable handle=".player-drag-icon" bounds="body" className={'draggable-container'}>
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
                src={EXTERNAL_LINKS.YOUTUBE_EMBED_URL + currLyricsContext.videoId + EXTERNAL_LINKS.YOUTUBE_EMBED_PROPS}
                title={'video'}
                allowFullScreen={false}
                className={fullSize ? "full-frame" : ""}
                width={fullSize ? "420" : "250"}
                height={fullSize ? "240" : "135"}
                frameBorder={0}
              ></iframe>}
              component="div"
              alt="Youtube Music Player"
            />
          </Card>
        </Draggable>
      }
    </>

  );
}

export default LegacyPlayer;