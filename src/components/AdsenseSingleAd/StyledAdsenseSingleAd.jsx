import { styled } from '@mui/material/styles';
import AdsenseSingleAd from './AdsenseSingleAd';

const StyledAdsenseSingleAd = styled(AdsenseSingleAd)`
    overflow: hidden;

    p{
      display: none;
    }

    /* Looks strictly for: Direct Child -> Direct Grandchild -> Direct Great-grandchild
    and use the style only if the ad wasn't blocked 
    */
    /* Use if using prnet style and mui text: */
    /* border-radius: 25px; */
    /* &:has(> * > * > *) {
        padding: 12px 0;
        margin: 12px 0;
        background: #f1f1f1d9;

        p{
            display: block;
            margin-bottom: 5px;
        }
    } */
     
`;

export default StyledAdsenseSingleAd;