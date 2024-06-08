
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

function ToggleFullScreen({ className, fullScreenHelper }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      document.body.requestFullscreen();
      document.body.style.overflowY = 'scroll';
      document.body.style.setProperty('::-webkit-scrollbar', 'display: none');
      fullScreenHelper('enter');
    } else {
      document.exitFullscreen();
      document.body.style.overflowY = 'auto';
      fullScreenHelper('exsit');
    }
    setIsFullScreen(prev => !prev);
  };

  return (
    <IconButton className={className}>
      {
        isFullScreen ?
          <CloseFullscreenIcon onClick={handleToggleFullScreen}></CloseFullscreenIcon>
          :
          <OpenInFullIcon onClick={handleToggleFullScreen}></OpenInFullIcon>
      }
    </IconButton>
  );
}

export default ToggleFullScreen;