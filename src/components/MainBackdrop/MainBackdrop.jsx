import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import T from './MainBackdropI18n';

function MainBackdrop({ className }) {
  const [loadingMessage, setLoadingMessage] = useState('');

  useEffect(() => {
    // Array of messages and their appearance time (in milliseconds)
    const messagesTimeline = [
      { delay: 2000, text: T.delayStrings[0] },
      { delay: 4000, text: T.delayStrings[1] },
      { delay: 6000, text: T.delayStrings[2] },
    ];

    const timeouts = messagesTimeline.map(item => 
      setTimeout(() => {
        setLoadingMessage(item.text);
      }, item.delay)
    );

    // Cleanup function to clear timeouts if component unmounts
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <Backdrop
      className={className}
      open={true}
      style={{
        backgroundSize: '200px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} 
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress color="inherit" size={190} />
        
        {/* Render text centered inside the spinner only if message exists */}
        {loadingMessage && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ color: 'inherit', fontWeight: 'bold' }}>
              {loadingMessage}
            </Typography>
          </Box>
        )}
      </Box>
    </Backdrop>
  );
}

export default MainBackdrop;