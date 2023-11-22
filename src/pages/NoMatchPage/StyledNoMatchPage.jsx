import { styled } from '@mui/material/styles';
import NoMatchPage from './NoMatchPage';

const StyledNoMatchPage = styled(NoMatchPage)`
    min-height: 70vh;
    padding-top: 30px;
    text-align: center;

    .page-h2, .page-h3{
        margin-top: 30px;
    }
`;

export default StyledNoMatchPage;