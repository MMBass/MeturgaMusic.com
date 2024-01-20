import { useContext, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import T from "./HeaderI18n";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';

import ChangeSize from '@components/ChangeSize/StyledChangeSize';
import DeterminateLinearProgress from '@components/DeterminateLinearProgress/StyledDeterminateLinearProgress';
import SearchBar from '@components/SearchBar/StyledSearchBar';
import ChangeColors from '@components/ChangeColors/StyledChangeColors';

import { DrawerContext } from '@context/DrawerContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import { LoadersContext } from '@context/LoadersContext';
import { SettingsContext } from '@context/SettingsContext';

import { NavLink } from 'react-router-dom';

const Header = ({ className, changeColors }) => {
  const [topSearchBar, setTopSearchBar] = useState(false);

  const theme = useTheme();

  const drawerContext = useContext(DrawerContext);
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const loadersContext = useContext(LoadersContext);
  const settingsContext = useContext(SettingsContext);

  const rrdLocation = useLocation();

  useEffect(() => {
    setTopSearchBar(false);
    window.scrollTo(0, 0); // scroll on router or song changes
    if (bannersContext.error) bannersContext.closeBanner('error');
    drawerContext.closeDrawer();
  }, [rrdLocation, currLyricsContext.title]);

  useEffect(() => {
    setTopSearchBar(false);
    if (bannersContext.error) bannersContext.closeBanner('error');
  }, [drawerContext.open]);

  const handleToggleSideBar = () => {
    if (bannersContext.error) bannersContext.closeBanner('error');
    if (!drawerContext.open) {
      drawerContext.openDrawer(true, 'left', 'temporary');
    } else {
      drawerContext.closeDrawer();
    };
  };

  return (
    <AppBar position="sticky" className={className} sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.dark
    }}>

      {(loadersContext.main.open) &&
        <DeterminateLinearProgress color={loadersContext.main.color}></DeterminateLinearProgress>
      }

      <Container maxWidth={false}>

        <Toolbar disableGutters>
          <Box>
            <IconButton
              size="large"
              aria-label="menu-appbar"
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
                      {topSearchBar && <SearchBar locat={"top"} size={"small"} setTopSearchBar={() => { setTopSearchBar() }}></SearchBar>}
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
                <span id="h2-part1" style={{
                  color: theme.palette.secondary.dark
                }}>
                  {T.H2Part1}
                </span>
                <span id="h2-part2" style={{
                  color: 'white'
                }}>
                   {T.H2Part2}
                </span>

              </Typography>
            </NavLink>
          }

          {(rrdLocation.pathname === "/" && !topSearchBar && !currLyricsContext.lines?.[0]) &&
            <ChangeColors changeColors={changeColors}></ChangeColors>
          }
          {(rrdLocation.pathname === "/" && !topSearchBar && currLyricsContext.lines?.[0]) &&
            <ChangeSize></ChangeSize>
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

    </AppBar >
  );
};

export default Header;