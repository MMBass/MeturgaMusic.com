import { styled } from '@mui/material/styles';
import ChangeColors from './ChangeColors';

const StyledChangeColors = styled(ChangeColors)`
text-align: end;
  margin-inline-end: 25px;
  flex-grow: 25;

  .mui-rounded-icon{
    background-color: ${props => props.theme.mode === 'light' ? '#000' : '#fff' };
    color: ${props =>  props.theme.mode === 'light' ? '#fff' : '#000' };
    border-radius: 12px;
  }
`;

export default StyledChangeColors;