import { styled } from '@mui/material/styles';
import AdsenseSingleAd from './AdsenseSingleAd';

const StyledAdsenseSingleAd = styled(AdsenseSingleAd)`
    border-radius: 25px;
    overflow: hidden;

    p{
      display: none;
    }

    /* Looks strictly for: Direct Child -> Direct Grandchild -> Direct Great-grandchild */
    &:has(> * > * > *) {
        padding: 12px 0;
        margin-top: 25px;
        background: #f1f1f1d9;

        p{
            display: block;
        }
    }
     
`;

export default StyledAdsenseSingleAd;