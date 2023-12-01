import { styled } from '@mui/material/styles';
import Drawer from './Drawer';

const StyledDrawer = styled(Drawer)` 

.MuiDrawer-paper{
  background-color:  ${props => props.theme.palette.secondary.light + '!important'};
}

  @media (min-width: 600px) {
    right: 5px;
  }

  .drawer-layout{
    background-color:  ${props => props.theme.palette.secondary.light};
    padding-top: 60px;
  }

  a{
    text-decoration: none;
  }
`;

export default StyledDrawer;