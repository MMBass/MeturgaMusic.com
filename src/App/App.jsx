import { useState, useEffect, useContext, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import { mainPinkTheme } from '@/themes/mainPinkTheme';
import { darkTheme } from '@/themes/darkTheme';

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';
import HeadTags from '@components/HeadTags/HeadTags';
import utils from '@/utils';

import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Footer } from '@components/Footer/StyledFooter';
import { default as Drawer } from '@components/Drawer/StyledDrawer';
import { default as Dialog } from '@components/Dialog/StyledDialog';
import { default as Modal } from '@components/Modal/StyledModal';
import { default as HiddenGetLyricsForm } from '@components/HiddenGetLyricsForm/StyledHiddenGetLyricsForm';
import { CircularProgress, Snackbar, Alert, AlertTitle } from '@mui/material';

import { default as HomePage } from '@pages/HomePage/StyledHomePage';
import { default as AboutPage } from '@pages/AboutPage/StyledAboutPage';
import { default as NoMatchPage } from '@pages/NoMatchPage/StyledNoMatchPage';

import { default as ScrollTop } from '@components/ScrollTop/StyledScrollTop';

function App({ className }) {
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);

  const [currTitle, setCurrTitle] = useState("מתורגמיוזיק - שירים מתורגמים מאנגלית");
  const [currTheme, setTheme] = useState(mainPinkTheme);

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  function init() {
    loadGscScript();
  }

  const loadGscScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cse.google.com/cse.js?cx=a85c2374ffc8b8898";
    script.defer = true;
    document.body.appendChild(script);
    // 0d8465f607b0b1227 // MusixMatch2 id
    // <script defer src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898"></script>
    // <script defer src="/src/services/google-search-a85c2374ffc8b8898.js"></script>
    // ./assets/google-search-a85c2374ffc8b8898.js
  };

  useEffect(() => {
    init();
  }, []); // Todo explain why was depends on bannersContext, then depend on better thing

  const ifIOS = () => {
    if (utils.getMobileOS()) {
      bannersContext.createBanner("iosSnackbar", 'error', '', 'החיפוש עלול שלא לעבוד במכשירי אפל (אייפון, מקבוק וכדומה)');
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

  const ChangeColors = () => {
    setTheme(darkTheme)
  }

  return (
    <div className={className}>
      <MuiThemeProvider theme={currTheme}>
        <CacheProvider value={cacheRtl}>
          <Router hashType="noslash">
            <HeadTags currTitle={currTitle} theme={currTheme}></HeadTags>
            <Layout>
            <Header className="header" changeColors={ChangeColors}></Header>

            {(bannersContext.main?.open) &&
              <Alert severity="warning" className='main-alert'>
                <AlertTitle>{bannersContext.main.title}</AlertTitle>
                {bannersContext.main.message}
              </Alert>
            }

      
              <Routes>
                <Route path={"/"} element={<HomePage className={'page'} />} />
                {/* useParams not working */}
                {/* <Route path={"songs/:sname"} element={<HomePage className={'page'} />} /> */}
                <Route path="/About" element={<AboutPage className={'page'} />} />
                <Route path="*" element={<NoMatchPage className={'page'} />} />
              </Routes>

            {/*dynamic global elements*/}
            {(drawerContext.open && drawerContext.child) &&
              <Drawer className="drawer"></Drawer>
            }
            {(loadersContext.circular.open) &&
              <CircularProgress color={loadersContext.main.color || "primary"} />
              // use in specific component, or remove
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
            </Layout>
          </Router>

          <HiddenGetLyricsForm></HiddenGetLyricsForm>
          <ScrollTop></ScrollTop>
        </CacheProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;