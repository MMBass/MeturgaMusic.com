//** Uses for conditional and dynamic head tags **/
import { useContext, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useTheme } from '@mui/material/styles';

import { CurrLyricsContext } from '@context/CurrLyricsContext';

function HeadTags({ currTitle }) {
  const theme = useTheme();
  const currLyricsContext = useContext(CurrLyricsContext);

  useEffect(() => {
    // ** Use if using utils.loadGoogleAds in other comps

    // Remove existing Google ads scripts and stale ad nodes to prevent duplicates
    // const existingScripts = document.querySelectorAll('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]');
    // if (existingScripts.length > 0) {
    //   existingScripts.forEach(script => script.remove());
    // }

    // // Reset the global AdSense queue so the next song change can push a fresh ad.
    // if (window.adsbygoogle) window.adsbygoogle = [];
  }, [currLyricsContext.title]);

  return (
    <Helmet>
      <title>
        {currTitle}
      </title>
      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>

      {/* Google adsense global tag */}
      {currLyricsContext.title &&
        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"
          crossOrigin="anonymous"
          key={`adsense-${Date.now()}`}
        ></script>
      }
    </Helmet>
  );
}

export default HeadTags;
