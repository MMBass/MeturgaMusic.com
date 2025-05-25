import { styled } from '@mui/material/styles';
import ToggleSaveSong from './ToggleSaveSong';

const StyledToggleSaveSong = styled(ToggleSaveSong)`
  margin-inline-start: 5px;
  font-size: 10px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  }
 
  @media (min-width: 600px) {
    & .MuiChip-icon{
        margin-inline-start: 6px;
        margin-top: 1px;
        font-size: 16px;  
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    
    & .MuiChip-icon {
      margin: 6px;
    }
    
    & .MuiChip-label {
      font-size: 0px;
      padding: 0;
    }
  }
`;

export default StyledToggleSaveSong;