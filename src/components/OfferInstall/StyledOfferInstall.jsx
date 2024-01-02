import { styled } from '@mui/material/styles';
import OfferInstall from './OfferInstall';

const StyledOfferInstall = styled(OfferInstall)`
    max-width: 90%;
    text-align: center;
    margin-top: 15px;
    background-color: #00000024;
    color: white;

    button{
        width: 100%;
        height: 100%;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    img{
        height: 50px;
        width: 50px;
    }

    button{
        margin: auto;
        font-size: 13px;
    }
`;

export default StyledOfferInstall;