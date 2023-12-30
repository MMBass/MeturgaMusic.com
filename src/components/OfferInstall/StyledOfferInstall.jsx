import { styled } from '@mui/material/styles';
import OfferInstall from './OfferInstall';

const StyledOfferInstall = styled(OfferInstall)`
  display: flex;
  justify-content: center;
  align-items: center;
/* 
    text-align: center !important;
    justify-content: center !important;
    align-items: center !important;

    *{
        font-size: 19px !important;
        text-align: center !important;
        justify-content: center !important;
        align-items: center !important;
    } */

    img{
        height: 150px;
        width: 150px;
    }
`;

export default StyledOfferInstall;