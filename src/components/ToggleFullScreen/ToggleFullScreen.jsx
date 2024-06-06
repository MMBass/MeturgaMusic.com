
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

function ToggleFullScreen({ className }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      document.body.requestFullscreen();
      document.body.style.overflowY = 'scroll';
    } else {
      document.exitFullscreen();
      document.body.style.overflowY = 'auto';
    }
    setIsFullScreen(prev => !prev);
  };

  return (
    <IconButton>
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