import { useState } from 'react';
import { Modal as MuiModal} from '@mui/material';

function Modal({ className , ...props}) {
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
      {props.children}
    </MuiModal>
  );
}

export default Modal;
