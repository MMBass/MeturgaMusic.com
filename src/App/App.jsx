import { useState, useEffect, useContext, useMemo } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

import { mainPinkTheme } from '@/themes/mainPinkTheme';
import { darkTheme } from '@/themes/darkTheme';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';
import utils from '@/utils';

import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Footer } from '@components/Footer/StyledFooter';
import { default as Drawer } from '@components/Drawer/StyledDrawer';
// import { default as MiniDrawer } from '@components/MiniDrawer/StyledMiniDrawer';
import { default as Dialog } from '@components/Dialog/StyledDialog';
import { default as Modal } from '@components/Modal/StyledModal';
import { default as ScrollTop } from '@components/ScrollTop/StyledScrollTop';
import { default as Player } from '@components/Player/StyledPlayer';
import HeadTags from '@components/HeadTags/HeadTags';

import { default as HomePage } from '@pages/HomePage/StyledHomePage';
import { default as HistoryPage } from '@pages/HistoryPage/StyledHistoryPage';
import { default as WishlistPage } from '@pages/WishlistPage/StyledWishlistPage';
import { default as ExercisePage } from '@pages/ExercisePage/StyledExercisePage';
import { default as SpotifyExtensionPage } from '@pages/SpotifyExtensionPage/StyledSpotifyExtensionPage';
import { default as NoMatchPage } from '@pages/NoMatchPage/StyledNoMatchPage';

function App({ className }) {
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const [currTitle, setCurrTitle] = useState("מתורגמיוזיק - שירים מתורגמים מאנגלית");
  const [currTheme, setCurrTheme] = useState(mainPinkTheme);

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useEffect(() => {
    init();
  }, []);

  // Not good the first use to be black
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersDarkMode = false;
  useEffect(() => {
    if (localStorage.getItem('preferedDark')) {
      if (localStorage.getItem('preferedDark') === 'true') setCurrTheme(darkTheme);
    } else setCurrTheme(prefersDarkMode ? darkTheme : mainPinkTheme); // set to device mode only if user hasens't switch colors before
  }, [prefersDarkMode]); 

  const init = () => {
    utils.directParamsToHash();
    serverInit();
    ifIOS();
  };

  const serverInit = () => {
    const serverUri = 'https://musicline-backend.vercel.app';
    if (!localStorage.getItem('init')) localStorage.setItem('init', 'INITID:'+uuidv4());
    let initId = localStorage.getItem('init');
    fetch(`${serverUri}/?initId=` + initId);
  }; // Send every visit to the server

  const ifIOS = () => {
    if (utils.getMobileOS()) {
      bannersContext.createBanner("infoSnackbar", 'error', '', 'החיפוש עלול שלא לעבוד במכשירי אפל (אייפון, מקבוק וכדומה)');
    };
  };

  const changeTheme = () => {
    let newCurrTheme = currTheme === darkTheme ? mainPinkTheme : darkTheme;
    setCurrTheme(newCurrTheme);
    localStorage.setItem('preferedDark', newCurrTheme === darkTheme ? 'true' : 'false');
  }

  return (
    <div className={className}>
      <MuiThemeProvider theme={currTheme}>
        {/* <CssBaseline /> */}
        <CacheProvider value={cacheRtl}>
          <Router>
            <HeadTags currTitle={currTitle} theme={currTheme}></HeadTags>
            <Layout>
              {/* {isMobile ? <Header className="header" changeColors={ChangeColors}></Header> : <MiniDrawer></MiniDrawer>} */}
              <Header className="header" changeColors={changeTheme}></Header>

              {(bannersContext.main?.open) &&
                <Alert severity="warning" className='main-alert'>
                  <AlertTitle>{bannersContext.main.title}</AlertTitle>
                  {bannersContext.main.message}
                </Alert>
              }

              <Routes>
                <Route path={"/"} element={<HomePage className={'page'} rank={1} />} />
                <Route path="/Exercise" element={<ExercisePage className={'page'} rank={1} />} />
                <Route path="/History" element={<HistoryPage className={'page'} rank={1} />} />
                <Route path="/Wish-list" element={<WishlistPage className={'page'} rank={1} />} />
                <Route path="/Spotify-extension" element={<SpotifyExtensionPage className={'page'} rank={1} />} />

                {/* NoMatchPage works only in hash paths */}
                <Route path="*" element={<NoMatchPage className={'page'} />} />
              </Routes>

              {/*dynamic global elements*/}
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
              {/* <Dialog></Dialog> */}
              {/* <Modal> */}
              {/* Modal must have a children */}
              {/* </Modal> */}
              {/*end dynamic global elements*/}
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