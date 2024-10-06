import { styled } from '@mui/material/styles';
import Player from './Player';

const StyledPlayer = styled(Player)`
   background-color: #d9d9d9f7;

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
      margin: auto;

      iframe{
         margin-top: 4px;
      }

      &::before {
         content: '\u25B6'; // Unicode for play sign
         position: absolute;
         width: 100%;
         height: 110%;
         padding-top: 2px;
         border-radius: 25px;
         background-color: #d9d9d9;
         pointer-events: none; // Allows clicks to pass through
         display: flex;
         justify-content: center;
         font-size: calc(1em + 2px);
      }
   }
`;

export default StyledPlayer;