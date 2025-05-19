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
`;

export default StyledFooterLinks;