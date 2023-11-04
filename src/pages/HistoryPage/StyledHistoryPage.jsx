import { styled } from '@mui/material/styles';
import HistoryPage from './HistoryPage';

const StyledHistoryPage = styled(HistoryPage)`
   min-height: 100vh;

   .my-data-grid{
      min-height: 90vh;
      direction: rtl;
   }
`;

export default StyledHistoryPage;