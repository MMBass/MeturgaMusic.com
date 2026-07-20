import { styled } from '@mui/material/styles';
import AdsenseSingleAd from './AdsenseSingleAd';

const StyledAdsenseSingleAd = styled(AdsenseSingleAd)`
    display: block;
    width: 100%;
    min-width: 100%;
    min-height: 200px;
    margin: 15px 0 5px 0;
    overflow: hidden;
    position: relative;

    .loader {
        position: absolute;
        inset: 0;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.08);
        z-index: 10;
    }

    > .adsbygoogle {
        position: relative;
        z-index: 0;
    }

    &:has(html) .loader,
    &:has(iframe) .loader {
        display: none;
    }
`;

export default StyledAdsenseSingleAd;