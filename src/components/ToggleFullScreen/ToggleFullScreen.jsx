
import { useState, useEffect } from 'react';

import Chip from '@mui/material/Chip';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import { SettingsContext } from '@context/SettingsContext';

import T from './ToggleFullScreenI18n';
function ToggleFullScreen({ className }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);


  const handleFullScreenChange = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      document.body.requestFullscreen();
      document.body.style.overflowY = 'scroll';
    } else {
      document.exitFullscreen();
      document.body.style.overflowY = 'auto';
    }
    setIsFullScreen(prev => !prev);
    SettingsContext.toggleFullScreen();
  };

  return (
    <Chip className={className}
    onClick={handleToggleFullScreen}
      icon={isFullScreen ?
        <CloseFullscreenIcon></CloseFullscreenIcon>
        :
        <OpenInFullIcon></OpenInFullIcon>}
      label={!isFullScreen ? T.Title: T.Exit}
    />
  );
}

export default ToggleFullScreen;