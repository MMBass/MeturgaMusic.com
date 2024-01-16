import { useState } from 'react';
import Modal from '@mui/material/Modal';

function MyModal({ className, children }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiModal
      className={className}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </MuiModal>
  );
}

export default MyModal;
