import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { mainPinkTheme } from '@/themes/mainPinkTheme';
import { darkTheme } from '@/themes/darkTheme';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';

import utils from '@/utils';
import { LOCAL_STORAGE_KEYS, URLS, ROUTES } from '@/constants';
import T from './AppI18n';

import Header from '@components/Header/StyledHeader';
import Layout from '@components/Layout/StyledLayout';
import Footer from '@components/Footer/StyledFooter';
import Drawer from '@components/Drawer/StyledDrawer';
import MiniDrawer from '@components/MiniDrawer/MiniDrawer';
import MainBackdrop from '@components/MainBackdrop/StyledMainBackdrop';
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
import AccessibilityPage from '@pages/AccessibilityPage/StyledAccessibilityPage';
import PrivacyPage from '@pages/PrivacyPage/StyledPrivacyPage';
import NoMatchPage from '@pages/NoMatchPage/StyledNoMatchPage';
import TermsPage from '@pages/TermsPage/StyledTermsPage';

const urlParams = new URLSearchParams(window.location.search);
const refFromUrl = urlParams.get('ref');

function App({ className }) {
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);

  const [currTitle, setCurrTitle] = useState(T.MainTitle);
  const [currTheme, setCurrTheme] = useState(localStorage.getItem(LOCAL_STORAGE_KEYS.PREFER_DARK) === 'true' ? darkTheme : mainPinkTheme);

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    serverInit();
    utils.jsObserveAndRemoveParentElmByChild('body ins .goog-rtopics, body ins .google-anno-sc', 2); // Put here all unwanted ad elements
  };

  // Send every visit and its ref (if exsist) to the server
  const serverInit = () => {
    if (utils.isLocalhost()) return;
    const initId = localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);
    if (refFromUrl?.length < 50) fetch(`${URLS.PROD_SERVER_URL}/?initId=${initId}&ref=${refFromUrl}`);
    else fetch(`${URLS.PROD_SERVER_URL}/?initId=${initId}`);
  };

  const changeTheme = () => {
    let newCurrTheme = currTheme === darkTheme ? mainPinkTheme : darkTheme;
    setCurrTheme(newCurrTheme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.PREFER_DARK, newCurrTheme === darkTheme ? 'true' : 'false');
  }

  const privacySnackbarClose = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PRIVACY_DIALOG_SHOWN, true);
  }

  return (
    <div className={className}>
      <MuiThemeProvider theme={currTheme}>
        <CacheProvider value={cacheRtl}>
          <Router>
            <HeadTags currTitle={currTitle}></HeadTags>
            <Layout>
              <Header className="layout-header" changeColors={changeTheme}></Header>

              {(bannersContext.main?.open) &&
                <Alert severity="warning" className='main-alert'>
                  <AlertTitle>{bannersContext.main.title}</AlertTitle>
                  {bannersContext.main.message}
                </Alert>
              }

              <main>
                <Routes>
                  <Route path={ROUTES.HOME} element={<HomePage className="page" rank={1} />} />
                  <Route path={ROUTES.EXERCISE} element={<ExercisePage className="page" pageTitle={T.MainH1 + ' - ' + T.Exercise} rank={1} />} />
                  <Route path={ROUTES.HISTORY} element={<HistoryPage className="page" pageTitle={T.MainH1 + ' - ' + T.History} rank={1} />} />
                  <Route path={ROUTES.WISHLIST} element={<WishlistPage className="page" pageTitle={T.MainH1 + ' - ' + T.Wishlist} rank={1} />} />
                  <Route path={ROUTES.SPOTIFY_EXTENSION} element={<SpotifyExtensionPage className="page" pageTitle={T.MainH1 + ' - ' + T.SpotifyExtension} rank={1} />} />
                  <Route path={ROUTES.ABOUT} element={<AboutPage className="page" pageTitle={T.MainH1 + ' - ' + T.About} rank={1} />} />
                  <Route path={ROUTES.ACCESSIBILITY} element={<AccessibilityPage className="page" pageTitle={T.MainH1 + ' - ' + T.Accessibility} rank={1} />} />
                  <Route path={ROUTES.PRIVACY} element={<PrivacyPage className="page" pageTitle={T.MainH1 + ' - ' + T.Privacy} rank={1} />} />
                  <Route path={ROUTES.TERMS} element={<TermsPage className="page" pageTitle={T.MainH1 + ' - ' + 'תנאי שימוש'} rank={1} />} />
                  <Route path={ROUTES.SONGS} element={<HomePage className="page" rank={1} />} />
                  <Route path={ROUTES.SONG} element={<HomePage className="page" rank={1} />} />
                  <Route path={ROUTES.NOT_FOUND} element={<NoMatchPage className="page" />} />
                </Routes>
              </main>


              {/*Dynamic overlay elements*/}
              {(loadersContext.backdrop.open) &&
                <MainBackdrop></MainBackdrop>
              }
              {(drawerContext.open) &&
                <Drawer className="drawer" changeColors={changeTheme}></Drawer>
              }
              {/* <MiniDrawer className="desktop-mini-drawer" changeColors={changeTheme}></MiniDrawer> */}

              {(bannersContext.privacySnackbar?.open) &&
                <Snackbar open={bannersContext.privacySnackbar.open} autoHideDuration={6000} onClose={() => privacySnackbarClose}>
                  <Alert
                    onClose={() => { bannersContext.closeBanner('privacySnackbar'); localStorage.setItem(LOCAL_STORAGE_KEYS.PRIVACY_DIALOG_SHOWN, 'true')}}
                    severity={bannersContext.privacySnackbar.severity}
                    // on large screens show half width alert
                    sx={{ width: { xs: '100%', sm: '50%' } }}
                  >
                    {bannersContext.privacySnackbar.message}
                    {bannersContext.privacySnackbar?.action &&
                      <Link
                        paddingInlineStart={'5px'}
                        href={bannersContext.privacySnackbar?.action.actionHref}
                        rel="noopener noreferrer"
                        data-nosnippet
                      >
                        {bannersContext.privacySnackbar?.action.actionText}
                      </Link>}
                  </Alert>
                </Snackbar>}

              <ScrollTop></ScrollTop>

              <Player></Player>

              {/*End of Dynamic overlay elements*/}

              <Footer></Footer>

            </Layout>
          </Router>

        </CacheProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;