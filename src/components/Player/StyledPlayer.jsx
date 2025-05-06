import { styled } from '@mui/material/styles';
import Player from './Player';

const StyledPlayer = styled(Player)`
   background-color: #e4e4e4f1;
   position: fixed;
   bottom: 32px;
   right: 30vw;
   z-index: 1200;
   
   @media (max-width: 600px) {
      right: 20px;
      bottom: 15px;
   }

   .player-card{
      position: fixed;
      z-index: 1200;
      width: 250px;

      @media (min-width: 1500px) {
         width: 450px;
      }
   }

   p {
      font-family: 'Poppins','Roboto', 'sans-serif';
      font-size: 11px;
      color: #555555;
   }

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
         background-color: #e4e4e4fe;
         pointer-events: all; /* Since using onClick={() => skipSeconds(-10)} Don't Allow clicks to pass through */
         top: 0;
         left: 0;
         width: 105%;
         height: 110%;
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius: 25px;
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