import { styled } from '@mui/material/styles';
import FooterLinks from './FooterLinks';

const StyledFooterLinks = styled(FooterLinks)`
   max-width: 1300px;
   margin: auto;

   svg, .MuiSvgIcon-root, .Email-Icon{
      font-size: 20px;
      padding-inline-end: 10.5px;
   }

   li{
      padding: unset;
   }

   .l-body-buyMe-container{
      margin-top: 30px;
      text-align: center;
   }
`;

export default StyledFooterLinks;