import { useState } from 'react';

import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

function Dialog({ className }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiDialog id="main-modal-root" className={className}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: 1500 }}
    >
      <DialogTitle id="alert-dialog-title">
        {"ברוך הבא למתורגמיוזיק"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Built with love using Vite build tool, React and Mui UI library.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </MuiDialog>
  );
}

export default Dialog;
