import { styled } from '@mui/material/styles';
import HistoryPage from './HistoryPage';

const StyledHistoryPage = styled(HistoryPage)`
   min-height: 80vh;
   padding: 10px;
   
   .d-all-btn{
      background-color: #e8e8e86b;
      color: ${props => props.theme.palette.primary.dark};
   }
`;

export default StyledHistoryPage;