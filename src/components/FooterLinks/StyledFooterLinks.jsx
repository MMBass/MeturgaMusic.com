import { styled } from '@mui/material/styles';
import FooterLinks from './FooterLinks';

const StyledFooterLinks = styled(FooterLinks)`
   max-width: 1300px;
   margin: auto;
   svg{
     padding-inline-end: 5px;
   }

   li{
    padding: unset;
   }
`;

export default StyledFooterLinks;