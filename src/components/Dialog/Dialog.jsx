import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MyDialog({ className }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog id="main-modal-root" className={className}
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
        <Button aria-label="close-dialog" onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyDialog;
