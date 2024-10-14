import { styled } from '@mui/material/styles';
import LegacyPlayer from './LegacyPlayer';

const StyledLegacyPlayer = styled(LegacyPlayer)`
   background-color: #e4e4e4;
   position: fixed;
   bottom: 32px;
   right: 30vw;
   z-index: 1200;

   iframe {
      margin: 5px 5px 5px 0px;
   }

   @media (max-width: 600px) {
      right: 20px;
      bottom: 15px;

      iframe{
         width: 190px;
         height: 109px;
      }

      .full-frame{
         width: 250px;
         height: 135px;
      }
   }
`;

export default StyledLegacyPlayer;