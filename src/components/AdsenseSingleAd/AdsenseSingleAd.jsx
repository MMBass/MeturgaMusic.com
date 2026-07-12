import { useEffect } from 'react';

import Typography from "@mui/material/Typography";

function AdsenseSingleAd({ className, adSlot, adType }) {
  useEffect(() => {
    pushAd();
  }, []);

  const pushAd = () => {
    try {
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 2500);
    } catch (e) {
      // ignore if push fails
    }
  };

  return (
    <div className={className}>
      <Typography textAlign="center" fontSize="small">מודעה</Typography>
      {/* todo  - use the style and data attrs by adType in condition */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', overflow: 'hidden', margin: 'auto',
          // article type: - use if need
          // textAlign: 'center'
         }}
        data-ad-client="ca-pub-8294214228053744"
        data-ad-slot={adSlot}

        {...(adType === 'web' && {
          'data-ad-format': 'auto',
          'data-full-width-responsive': 'true'
        })}
        {...(adType === 'feed' && {
          'data-ad-format': 'fluid',
          'data-ad-layout-key': '-fb+5w+4e-db+86'
        })}   
        {...(adType === 'article' && {
          'data-ad-layout': 'in-article',
          'data-ad-format': 'fluid'
        })}
      />
    </div>
  );
}

export default AdsenseSingleAd;