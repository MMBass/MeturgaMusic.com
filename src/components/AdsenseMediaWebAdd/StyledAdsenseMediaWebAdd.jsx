import { styled } from '@mui/material/styles';
import AdsenseMediaWebAdd from './AdsenseMediaWebAdd';

const StyledAdsenseMediaWebAdd = styled(AdsenseMediaWebAdd)`
    padding: '5px';

    @media (max-width: 600px) {
        padding: '2px';
    }
`;

export default StyledAdsenseMediaWebAdd;