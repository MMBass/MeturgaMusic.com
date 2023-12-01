import { styled } from '@mui/material/styles';
import Modal from './Modal';

const StyledModal = styled(Modal)`
  #main-modal-root{
    z-index: 1500;
    background-color: ${props => props.theme.palette.primary.main};
  }
`;

export default StyledModal;