import { styled } from '@mui/material/styles';
import ToggleFullScreen from './ToggleFullScreen';

const StyledToggleFullScreen = styled(ToggleFullScreen)`
  margin-inline-start: 5px;
  font-size: 10px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    
    & .MuiChip-icon {
      margin: 5px;
    }
    
    & .MuiChip-label {
      font-size: 0px;
      padding: 0;
    }
  }
`;

export default StyledToggleFullScreen;