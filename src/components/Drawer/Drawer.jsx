import { useContext } from 'react';
import { DrawerContext } from '@context/DrawerContext';

import {Drawer as MuiDrawer, Box} from '@mui/material';

import { default as SidePagesList } from '@components/SidePagesList/StyledSidePagesList';

function Drawer({ className, ...props }) {
  const drawerContext = useContext(DrawerContext);

  return (
    <MuiDrawer
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
    </MuiDrawer>
  );
}

export default Drawer;
