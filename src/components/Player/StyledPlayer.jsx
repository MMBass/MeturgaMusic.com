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

      .play-icon-overlay {
         position: absolute;
         background-color: #d9d9d9;
         pointer-events: none; /* Allow clicks to pass through */
         top: 0;
         left: 0;
         width: 105%;
         height: 110%;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      .playerError-icon{
         pointer-events: all;
         cursor: text;
      }

   }

   .drag-icon{
      cursor: all-scroll;
   }
`;

export default StyledPlayer;