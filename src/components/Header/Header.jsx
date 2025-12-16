import { useContext, useState, useEffect } from 'react';
import { useLocation, NavLink } from "react-router-dom";

import T from "./HeaderI18n";
import TUtils from '@/i18n-utils';
import { ROUTES, LOCAL_STORAGE_KEYS } from '@/constants';

import { useTheme, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

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
import Dialog from '@components/Dialog/StyledDialog';
import BuyMeCoffeeBtn from '@components/BuyMeCoffeeBtn/StyledBuyMeCoffeeBtn';

import { DrawerContext } from '@context/DrawerContext';
import { CurrLyricsContext } from '@context/CurrLyricsContext';
import { BannersContext } from '@context/BannersContext';
import { LoadersContext } from '@context/LoadersContext';
import { SettingsContext } from '@context/SettingsContext';

const Header = ({ className, changeColors }) => {
  const rrdLocation = useLocation();
  const [topSearchBar, setTopSearchBar] = useState(false);
  const [isWelcomePage, setIsWelcomePage] = useState(true);
  const [privacyDialogShow, setPrivacyDialogShow] = useState(true);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();

  const drawerContext = useContext(DrawerContext);
  const currLyricsContext = useContext(CurrLyricsContext);
  const bannersContext = useContext(BannersContext);
  const loadersContext = useContext(LoadersContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {

    if (document.fullscreenElement) {
      document.exitFullscreen();
      document.body.style.overflowY = 'auto';
      settingsContext.toggleFullScreen(false);
    } // Make sure the fullScreen close when moving pages

    setIsWelcomePage(rrdLocation.pathname === "/" && !currLyricsContext.lines?.[0]);

    setTopSearchBar(false);
    // window.scrollTo(0, 0); // Scroll top on router or song changes
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

  useEffect(() => {
    console.log(rrdLocation.pathname === ROUTES.PRIVACY);
    if (rrdLocation.pathname !== ROUTES.PRIVACY) {
      setPrivacyDialogShow(true);
    }
    if (rrdLocation.pathname === ROUTES.PRIVACY) {
      setPrivacyDialogShow(false);
    }
  }, [rrdLocation.pathname]);


  const iconPages = [
    {
      name: T.ExercisePage,
      url: '/exercise',
      icon: <BookmarkAddedIcon className="side-icons"></BookmarkAddedIcon>,
    },
    {
      name: T.WishListPage,
      url: '/wish-list',
      icon: <PlaylistAddIcon className="side-icons"></PlaylistAddIcon>,
    },
    {
      name: T.HistoryPage,
      url: '/history',
      icon: <RestoreOutlinedIcon className="side-icons"></RestoreOutlinedIcon>,
    },
  ];

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <AppBar position="sticky" className={className}
      sx={{
        visibility: settingsContext.fullScreen ? 'hidden' : 'visible',
        height: settingsContext.fullScreen ? '0px' : '52px',
        backgroundColor: scrolled || !isWelcomePage ? theme.palette.primary.main : theme.palette.secondary.main,
        boxShadow: scrolled || !isWelcomePage ? 3 : 0,
        color: theme.palette.secondary.dark,
        transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      }}>

      {(loadersContext.main.open) &&
        <DeterminateLinearProgress className={'main-linear'} color={loadersContext.main.color}></DeterminateLinearProgress>
      }

      <Container maxWidth={false} className='header-container'>

        <Toolbar disableGutters sx={{ height: '52px', minHeight: 'unset !important' }}>
          {/* <Box> */}
          <IconButton
            className='menu-button'
            size="large"
            aria-label="menu-appbar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleToggleSideBar}
            sx={{ color: scrolled || !isWelcomePage ? theme.palette.primary.contrastText : theme.palette.primary.dark }}
          >
            {!drawerContext.open ?
              <Badge variant='dot' invisible={!settingsContext.badge}>
                <svg className='drawer-menu-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 24" width="24" height="24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Badge>
              :
              <CloseOutlinedIcon className='drawer-menu-icon' />
            }

          </IconButton>

          {!topSearchBar &&
            <NavLink to={'/'} className='nav-link top-nav-link'>
              <Typography
                variant="h6"
                noWrap
                component="h2"
                className="header-title"
                sx={{ display: 'flex' }}
              >
                <span id="h2-part1" style={{
                  color: theme.palette.primary.contrastText
                }}>
                  {T.H2Part1}
                </span>
                <span id="h2-part2" style={{
                  color: scrolled || !isWelcomePage ? 'white' : theme.palette.primary.dark,
                  transition: 'unset'
                }}>
                  {T.H2Part2}
                </span>

              </Typography>
            </NavLink>
          }

          {iconPages.map((page, index) => (
            // Not changing list - so we can use index as key
            <NavLink to={page.url} key={index} className={'nav-link top-nav-link'}
              sx={{}}
            >
              <IconButton
                // disabled={rrdLocation.pathname === page.url}
                className='top-nav-button'
                size="large"
                title={page.name}
                sx={{ color: scrolled || !isWelcomePage ? theme.palette.primary.contrastText : theme.palette.primary.dark, backgroundColor: rrdLocation.pathname === page.url ? alpha(theme.palette.primary.contrastText, 0.2) : 'transparent' }}
              >
                {page.icon}
              </IconButton>
            </NavLink>
          ))}
          {/* </Box> */}

          {(currLyricsContext.lines?.[0] || rrdLocation.pathname !== "/") &&
            <>
              {(rrdLocation.pathname !== "/wish-list" && !drawerContext.open) &&
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
          data-nosnippet
          action={bannersContext.error?.action &&
            <Link
              padding={'7px'}
              href={bannersContext.error?.action.actionHref}
              target="_blank"
              rel="noopener noreferrer"
              data-nosnippet
            >
              {bannersContext.error?.action.actionText}
            </Link>}
          onClose={() => { bannersContext.closeBanner('error') }}>
          <AlertTitle data-nosnippet>{bannersContext.error?.title}</AlertTitle>
          {bannersContext.error?.message}
        </Alert>
      </Collapse>

      <Dialog
        dialogContent={{
          title: TUtils.PrivacyDialogTitle,
          body: TUtils.PrivacyDialogMessage,
          btnText: TUtils.Close,
          btnLink: ROUTES.PRIVACY,
          btnLinkText: TUtils.PrivacyDialogLink
        }}
        localStorageKey={LOCAL_STORAGE_KEYS.PRIVACY_DIALOG_SHOWN}
        show={privacyDialogShow}
      ></Dialog>

    </AppBar >
  );
};

export default Header;