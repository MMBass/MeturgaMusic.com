import { useState, useEffect, useContext, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { mainPinkTheme } from '@/themes/mainPinkTheme';
import { darkTheme } from '@/themes/darkTheme';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import utils from '@/utils';
import constants from '@/constants';
import T from './AppI18n';

import Header from '@components/Header/StyledHeader';
import Layout from '@components/Layout/StyledLayout';
import Footer from '@components/Footer/StyledFooter';
import Drawer from '@components/Drawer/StyledDrawer';
import MainBackdrop from '@components/MainBackdrop/StyledMainBackdrop';
import Dialog from '@components/Dialog/StyledDialog';
import Modal from '@components/Modal/StyledModal';
import ScrollTop from '@components/ScrollTop/StyledScrollTop';
import Player from '@components/Player/StyledPlayer';
import HeadTags from '@components/HeadTags/HeadTags';

import HomePage from '@pages/HomePage/StyledHomePage';
import HistoryPage from '@pages/HistoryPage/StyledHistoryPage';
import WishlistPage from '@pages/WishlistPage/StyledWishlistPage';
import ExercisePage from '@pages/ExercisePage/StyledExercisePage';
import SpotifyExtensionPage from '@pages/SpotifyExtensionPage/StyledSpotifyExtensionPage';
import AboutPage from '@pages/AboutPage/StyledAboutPage';
import NoMatchPage from '@pages/NoMatchPage/StyledNoMatchPage';

function App({ className }) {
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const [currTitle, setCurrTitle] = useState(T.MainTitle);
  const [currTheme, setCurrTheme] = useState(localStorage.getItem('preferedDark') === 'true' ? darkTheme : mainPinkTheme);

  const appRef = useRef(null);

  const handleFullscreen = () => {
    if (appRef.current) {
      if (!document.fullscreenElement) {
        appRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (!utils.isLocalhost()) serverInit();
  };

  // Send every visit to the server
  const serverInit = () => {
    if (!localStorage.getItem('init')) localStorage.setItem('init', 'INITID:' + uuidv4());
    let initId = localStorage.getItem('init');
    fetch(`${constants.prodServerUri}/?initId=` + initId);
  };

  const changeTheme = () => {
    let newCurrTheme = currTheme === darkTheme ? mainPinkTheme : darkTheme;
    setCurrTheme(newCurrTheme);
    localStorage.setItem('preferedDark', newCurrTheme === darkTheme ? 'true' : 'false');
  }

  return (
    <div className={className} ref={appRef}>
      <MuiThemeProvider theme={currTheme}>
        <CacheProvider value={cacheRtl}>
          <Router>
            <HeadTags currTitle={currTitle}></HeadTags>
            <Layout>
              <Header className="header" changeColors={changeTheme} changeToFullScreen={handleFullscreen}></Header>
              {(bannersContext.main?.open) &&
                <Alert severity="warning" className='main-alert'>
                  <AlertTitle>{bannersContext.main.title}</AlertTitle>
                  {bannersContext.main.message}
                </Alert>
              }

              <Routes>
                <Route path={"/"} element={<HomePage className={'page'} rank={1} />} />
                <Route path="/Exercise" element={<ExercisePage className={'page'} pageTitle={T.MainH1 + " - " + T.Exercise} rank={1} />} />
                <Route path="/History" element={<HistoryPage className={'page'} pageTitle={T.MainH1 + " - " + T.History} rank={1} />} />
                <Route path="/Wish-list" element={<WishlistPage className={'page'} pageTitle={T.MainH1 + " - " + T.Wishlist} rank={1} />} />
                <Route path="/Spotify-extension" element={<SpotifyExtensionPage className={'page'} pageTitle={T.MainH1 + " - " + T.SpotifyExtension} rank={1} />} />
                <Route path="/About" element={<AboutPage className={'page'} pageTitle={T.MainH1 + " - " + T.About} rank={1} />} />
                <Route path="/songs/:urlSong" element={<HomePage className={'page'} rank={1} />} />

                {/* NoMatchPage works only in hash paths */}
                <Route path="*" element={<NoMatchPage className={'page'} />} />
              </Routes>

              {/*Dynamic global elements*/}
              {(loadersContext.backdrop.open) &&
                <MainBackdrop></MainBackdrop>
              }
              {(drawerContext.open) &&
                <Drawer className="drawer" changeColors={changeTheme}></Drawer>
              }
              {(bannersContext.infoSnackbar?.open) &&
                <Snackbar open={bannersContext.infoSnackbar.open} autoHideDuration={6000} onClose={() => { }}>
                  <Alert onClose={() => { bannersContext.closeBanner('infoSnackbar') }} severity={bannersContext.infoSnackbar.severity} sx={{ width: '100%' }}>
                    {bannersContext.infoSnackbar.message}
                  </Alert>
                </Snackbar>
              }
              {/*end of Dynamic global elements*/}

              <Footer></Footer>
              <ScrollTop></ScrollTop>

              <Player></Player>
            </Layout>
          </Router>

        </CacheProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;