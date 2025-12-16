import { styled } from '@mui/material/styles';
import AccessibilityPage from './AccessibilityPage';

const StyledAccessibilityPage = styled(AccessibilityPage)`
  padding: 40px 30px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  .page-title {
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: ${props => props.theme.palette.primary.main};
  }

  .page-content {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

export default StyledAccessibilityPage;