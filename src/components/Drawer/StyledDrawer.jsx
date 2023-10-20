import { styled } from '@mui/material/styles';
import Drawer from './Drawer';

const StyledDrawer = styled(Drawer)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${props => props.theme.palette.primary.light};
    color: ${props => props.theme.palette.secondary.main};
  }

  svg{
    color: ${props => props.theme.palette.secondary.main};
  }

  a{
    color: ${props => props.theme.palette.secondary.main};
    text-decoration: none;
  }
`;

export default StyledDrawer;