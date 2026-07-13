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
      }, 2500*(window.adsbygoogle?.length || 1)); // Delay the push based on the number of ads already pushed
    } catch (e) {
      return; // Ignore if push fails
    }
  };

  return (
    <div className={className}>
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
          //  feed-gray-1
          // 'data-ad-layout-key': '-fb+5w+4e-db+86'
          // feed-dark-1
          'data-ad-layout-key': '-eq+64+2f-cq+e2'
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