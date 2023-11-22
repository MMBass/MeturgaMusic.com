import { useState, useEffect, useContext, useMemo } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { mainPinkTheme } from '@/themes/mainPinkTheme';
import { darkTheme } from '@/themes/darkTheme';

import { Snackbar, Alert, AlertTitle } from '@mui/material';

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';
import utils from '@/utils';

import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Footer } from '@components/Footer/StyledFooter';
import { default as Drawer } from '@components/Drawer/StyledDrawer';
import { default as MiniDrawer } from '@components/MiniDrawer/StyledMiniDrawer';
import { default as Dialog } from '@components/Dialog/StyledDialog';
import { default as Modal } from '@components/Modal/StyledModal';
import { default as ScrollTop } from '@components/ScrollTop/StyledScrollTop';
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
    ifIOS();
  }, []);

  const ifIOS = () => {
    if (utils.getMobileOS()) {
      bannersContext.createBanner("infoSnackbar", 'error', '', 'החיפוש עלול שלא לעבוד במכשירי אפל (אייפון, מקבוק וכדומה)');
    };
  };

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? 'dark' : 'light',
  //       },
  //     }),
  //   [prefersDarkMode],
  // );

  const ChangeColors = () => { // todo move and use the context settings method
    switch (currTheme) {
      case mainPinkTheme:
        setCurrTheme(darkTheme);
        break;
      // case darkTheme:
      //   setCurrTheme(whiteTheme);
      default:
        setCurrTheme(mainPinkTheme);
        break;
    }
  }

  return (
    <div className={className}>
      <MuiThemeProvider theme={currTheme}>
        <CacheProvider value={cacheRtl}>
          <Router>
            <HeadTags currTitle={currTitle} theme={currTheme}></HeadTags>
            <Layout>
              {/* {isMobile ? <Header className="header" changeColors={ChangeColors}></Header> : <MiniDrawer></MiniDrawer>} */}
              <Header className="header" changeColors={ChangeColors}></Header>

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
              {(drawerContext.open && drawerContext.child) &&
                <Drawer className="drawer"></Drawer>
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
            </Layout>
          </Router>

        </CacheProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;