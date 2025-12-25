import { styled } from '@mui/material/styles';
import TermsPage from './TermsPage';

const StyledTermsPage = styled(TermsPage)`
  padding: 40px 30px;
  text-align: start;
  max-width: 800px;
  margin: 0 auto;

  .page-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .page-content{
    white-space: pre-line;
  }
`;

export default StyledTermsPage;
