import { styled } from '@mui/material/styles';
import Player from './Player';

const StyledPlayer = styled(Player)`
   position: fixed;
   bottom: 32px;
   left: 80px;
   z-index: 1300;
   
   @media (max-width: 600px) {
       left: 10px;
   }
`;

export default StyledPlayer;