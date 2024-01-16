import { useContext } from 'react';
import { DrawerContext } from '@context/DrawerContext';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import SidePagesList from '@components/SidePagesList/StyledSidePagesList';

function MyDrawer({ className, changeColors }) {
  const drawerContext = useContext(DrawerContext);

  return (
    <Drawer
      className={className}
      anchor={drawerContext.anchor}
      open={drawerContext.open}
      variant={drawerContext.permanent}
      onClose={() => { drawerContext.closeDrawer() }}
    >
      <Box
        className='drawer-layout'
        role="presentation"
      >
        <SidePagesList changeColors={changeColors} closeDrawer={() => { drawerContext.closeDrawer() }}></SidePagesList>
      </Box>
    </Drawer>
  );
}

export default MyDrawer;
