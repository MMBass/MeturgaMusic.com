import { useContext } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';

import { default as ChangeSize } from '@components/ChangeSize/StyledChangeSize';
import { default as DeterminateLinearProgress } from '@components/DeterminateLinearProgress/StyledDeterminateLinearProgress';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Alert,
  AlertTitle,
} from '@mui/material';
import Collapse from '@mui/material/Collapse';

import { default as SidePagesList } from '../SidePagesList/StyledSidePagesList';
import { default as NavBar } from '@components/NavBar/StyledNavBar';
import { default as ChangeColors } from '@components/ChangeColors/StyledChangeColors';

import { DrawerContext } from '@context/DrawerContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import { LoadersContext } from '@context/LoadersContext';

import { NavLink } from 'react-router-dom';

const Header = ({ className, ...props }) => {
  const drawerContext = useContext(DrawerContext);
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const loadersContext = useContext(LoadersContext);

  const handleOpenNavMenu = () => {
    drawerContext.openDrawer(true, 'left', 'temporary', SidePagesList);
  };

  const removeLsLines = function () {
    sessionStorage.removeItem('currLines');
    location.reload();
  }

  return (
    <AppBar position="sticky" className={className}>
      {(loadersContext.main.open) &&
        <DeterminateLinearProgress color={loadersContext.main.color}></DeterminateLinearProgress>
      }
      <Container maxWidth="xl">
        
        <Toolbar disableGutters>
        {/* <Box sx={{ display: { xs: 'flex', md: 'flex' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box> */}
          <NavLink to={'/'} onClick={() => { removeLsLines() }}>
            <Typography
              variant="h6"
              noWrap
              component="h2"
              sx={{ mr: 2, display: 'flex' }}
            >
              <span id="h2-part1">
                מתורגמ
              </span>
              <span id="h2-part2">
                יוזיק
              </span>

            </Typography>
          </NavLink>

          {/* <ChangeColors theme={props.theme} changeColors={props.changeColors}></ChangeColors> */}
          {currLyricsContext.lines?.[0] && <ChangeSize></ChangeSize>}

          {/* <NavBar className="nav-bar"></NavBar> */}

        </Toolbar>
      </Container>

      <Collapse in={bannersContext.error?.open}>
        <Alert severity="error" className='error-alert' onClose={() => { bannersContext.closeBanner('error') }}>
          <AlertTitle>{bannersContext.error?.title}</AlertTitle>
          {bannersContext.error?.message}
        </Alert>
      </Collapse>

    </AppBar>
  );
};

export default Header;