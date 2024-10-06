import { styled } from '@mui/material/styles';
import Player from './Player';

const StyledPlayer = styled(Player)`
   background-color: #e4e4e4;

   position: fixed;
   bottom: 32px;
   left: 80px;
   z-index: 1200;
   
   .iframe-parent-btn{
      width: 35px;
      height: 35px;
      border-radius: 25px;
      border: unset;
      position: relative;

      iframe{
         margin-top: 4px;
      }

      &::before {
         content: '\u25B6'; // Unicode for play sign
         position: absolute;
         width: 110%;
         height: 110%;
         border-radius: 25px;
         background-color: rgb(228 228 228); // Adjust color and opacity as needed
         pointer-events: none; // Allows clicks to pass through
      }
   }
`;

export default StyledPlayer;