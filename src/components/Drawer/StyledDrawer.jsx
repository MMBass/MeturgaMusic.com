import { styled } from '@mui/material/styles';
import Drawer from './Drawer';

const StyledDrawer = styled(Drawer)`

  @media (min-width: 600px) {
    right: 5px;
  }

  .drawer-layout{
    padding-top: 60px;
  }

  a{
    text-decoration: none;
  }
`;

export default StyledDrawer;