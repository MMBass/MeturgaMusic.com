import { useContext } from 'react';
import { DrawerContext } from '@context/DrawerContext';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import { default as SidePagesList } from '@components/SidePagesList/StyledSidePagesList';

function MyDrawer({ className, ...props }) {
  const drawerContext = useContext(DrawerContext);

  return (
    <Drawer
      className={className}
      anchor={drawerContext.anchor}
      open={drawerContext.open}
      variant={drawerContext.permanent}
      onClose={()=>{drawerContext.closeDrawer()}}
    >
      <Box
        className='drawer-layout'
        role="presentation"
        onClick={()=>{drawerContext.closeDrawer()}}
      >
       <SidePagesList changeColors={props.changeColors}></SidePagesList>
      </Box>
    </Drawer>
  );
}

export default MyDrawer;
