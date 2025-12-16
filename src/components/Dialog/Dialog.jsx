import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import TUtils from '@/i18n-utils';

function MyDialog({ className, dialogContent, localStorageKey, show }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorageKey && localStorage.getItem(localStorageKey)) {
      setOpen(false);
      return;
    }
    
    setOpen(show);

  }, [show, localStorageKey]);

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick') {
      return;
    }
    setOpen(false);
    if (localStorageKey) localStorage.setItem(localStorageKey, 'true');
  };

  if (!dialogContent) {
    return null;
  }

  const { title, body, btnText, btnLink, btnLinkText } = dialogContent;

  return (
    <Dialog id="main-modal-root" className={className}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: 1500 }}
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {body}
          {btnLink && btnLinkText && (
            <>
              <br />
              <Link to={btnLink} style={{ color: 'inherit', textDecoration: 'underline' }}>
                {btnLinkText}
              </Link>
            </>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button aria-label="close-dialog" onClick={handleClose}>{btnText || TUtils.Close}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyDialog;
