import { styled } from '@mui/material/styles';
import ChangeSize from './ChangeSize';

const StyledChangeSize = styled(ChangeSize)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${props => props.theme.palette.secondary.light};
    color: ${props => props.theme.palette.primary.contrastText};
    padding: unset;
  }

  .font-size-disabled{
    /* pointer-events: unset;
    cursor: unset; */
    color: #fff !important;
    font-size: 12px;
    padding: 0 10px;
    background: #eaa0a06b;
  }

  .Mui-disabled {
    border: unset !important;
}

`;

export default StyledChangeSize;