import { styled } from '@mui/material/styles';
import OfferInstall from './OfferInstall';

const StyledOfferInstall = styled(OfferInstall)`
    max-width: 90%;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 15px;
    margin-top: 15px;

    img{
        height: 50px;
        width: 50px;
    }

    button{
        font-size: 13px;
    }
`;

export default StyledOfferInstall;