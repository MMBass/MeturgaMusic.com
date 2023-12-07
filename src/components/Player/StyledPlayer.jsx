import { styled } from '@mui/material/styles';
import Player from './Player';

const StyledPlayer = styled(Player)`
   position: fixed;
   bottom: 32px;
   left: 80px;
   z-index: 1200;
   
   iframe {
      margin: 5px 5px 5px 0px;
   }

      @media (max-width: 600px) {
         left: 10px;

         iframe{
            width: 190px;
            height: 109px;
         }
      }
`;

export default StyledPlayer;