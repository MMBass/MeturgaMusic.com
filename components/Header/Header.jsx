import { useContext, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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
  Collapse,
  Badge,
  Link
} from '@mui/material';

import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';
import { default as SidePagesList } from '@components/SidePagesList/StyledSidePagesList';
import { default as ChangeColors } from '@components/ChangeColors/StyledChangeColors';

import { DrawerContext } from '@context/DrawerContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import { LoadersContext } from '@context/LoadersContext';
import { SettingsContext } from '@context/SettingsContext';

import { NavLink } from 'react-router-dom';

const Header = ({ className, ...props }) => {
  const [topSearchBar, setTopSearchBar] = useState(false);

  const drawerContext = useContext(DrawerContext);
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const loadersContext = useContext(LoadersContext);
  const settingsContext = useContext(SettingsContext);

  const rrdLocation = useLocation();

  useEffect(() => {
    setTopSearchBar(false);
    window.scrollTo(0, 0); // scroll on router or song changes
    bannersContext.closeBanner('error');
  }, [rrdLocation, currLyricsContext.title]);

  useEffect(() => {
    setTopSearchBar(false);
    bannersContext.closeBanner('error');
  }, [drawerContext.open]);

  const handleToggleSideBar = () => {
    bannersContext.closeBanner('error');
    if (!drawerContext.open) {
      drawerContext.openDrawer(true, 'left', 'temporary', SidePagesList);
    } else {
      drawerContext.closeDrawer();
    };
  };

  function HandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <AppBar position="sticky" className={className}>

      {(loadersContext.main.open) &&
        <DeterminateLinearProgress color={loadersContext.main.color}></DeterminateLinearProgress>
      }

      <Container maxWidth={false}>

        <Toolbar disableGutters>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleSideBar}
            >
              {!drawerContext.open ?
                <Badge variant='dot' invisible={!settingsContext.badge}>
                  <MenuIcon className='burger-icon' />
                </Badge>
                :
                <CloseOutlinedIcon className='burger-icon' />
              }

            </IconButton>
          </Box>

          {(currLyricsContext.lines?.[0] || rrdLocation.pathname !== "/") &&
            <>
              {rrdLocation.pathname !== "/wish-list" &&
                <>
                  <IconButton className='mui-search-icon-wrapper' onClick={() => setTopSearchBar(!topSearchBar)}>
                    <SearchIcon className='mui-search-icon'></SearchIcon>
                  </IconButton>

                  <Box className={topSearchBar && "collapse-search-box"}>
                    <Collapse className="search-ctr-collapse" orientation="horizontal" in={topSearchBar} collapsedSize={0} >
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={HandleSubmit}
                        className="search-ctr"
                      >
                        {topSearchBar && <SearchBar locat={"top"} size={"small"} setTopSearchBar={() => { setTopSearchBar() }}></SearchBar>}
                      </Box>
                    </Collapse>
                  </Box>
                </>
              }
            </>

          }

          {!topSearchBar &&
            <NavLink to={'/'} onClick={() => { return; }}>
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
          }


          {/* <ChangeColors theme={props.theme} changeColors={props.changeColors}></ChangeColors> */}
          {(rrdLocation.pathname === "/" && !topSearchBar && currLyricsContext.lines?.[0]) &&
            <>
              {
                <ChangeSize></ChangeSize>
              }
            </>
          }

        </Toolbar>
      </Container>

      <Collapse in={bannersContext.error?.open}>
        <Alert severity="error" className='error-alert'
          action={bannersContext.error?.action &&
            <Link
              padding={'7px'}
              href={bannersContext.error?.action.actionHref}
              target="_blank"
              rel="noopener noreferrer">
              {bannersContext.error?.action.actionText}
            </Link>}
          onClose={() => { bannersContext.closeBanner('error') }}>
          <AlertTitle>{bannersContext.error?.title}</AlertTitle>
          {bannersContext.error?.message}
        </Alert>
      </Collapse>

    </AppBar>
  );
};

export default Header;