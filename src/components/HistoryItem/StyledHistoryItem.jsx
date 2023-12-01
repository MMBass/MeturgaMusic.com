import { styled } from '@mui/material/styles';
import HistoryItem from './HistoryItem';

const StyledHistoryItem = styled(HistoryItem)`
  background-color: #e8e8e86b;
  margin-top: 5px;

  p{
    color: ${props => props.theme.palette.secondary.dark};
  }
`;

export default StyledHistoryItem;