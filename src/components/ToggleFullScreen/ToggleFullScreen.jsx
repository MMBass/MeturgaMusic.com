
import { useState, useEffect, useContext } from 'react';

import Chip from '@mui/material/Chip';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import { SettingsContext } from '@context/SettingsContext';

import T from './ToggleFullScreenI18n';

function ToggleFullScreen({ className }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleNativeFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleNativeFullScreenChange);
    };
  }, []);

  const handleNativeFullScreenChange = () => {
    setIsFullScreen(!!document.fullscreenElement);
    settingsContext.toggleFullScreen(!!document.fullscreenElement);
  };

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      document.body.requestFullscreen();
      document.body.style.overflowY = 'scroll';
    } else {
      document.exitFullscreen();
      document.body.style.overflowY = 'auto';
    }
  };

  return (
    <Chip className={className}
      onClick={handleToggleFullScreen}
      icon={isFullScreen ?
        <CloseFullscreenIcon></CloseFullscreenIcon>
        :
        <OpenInFullIcon></OpenInFullIcon>}
      label={!isFullScreen ? T.Title : T.Exit}
      size='small'
      variant="outlined"
    />
  );
}

export default ToggleFullScreen;