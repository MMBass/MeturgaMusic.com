import React, { useEffect } from 'react';

function AdsenseMediaWebAd({ className, adSlot }) {
  useEffect(() => {
    // Inject the Google AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Try to push a new ad slot once the script is present
    const pushAd = () => {
      try {
        setTimeout(() => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, 1500);
      } catch (e) {
        // ignore if push fails
      }
    };

    // If script already loaded, push immediately; otherwise wait for load
    if (script.readyState === 'complete' || script.readyState === 'loaded') {
      pushAd();
    } else {
      script.addEventListener('load', pushAd);
    }

    return () => {
      script.removeEventListener('load', pushAd);
    };
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', overflow: 'hidden', margin: '15px auto' }}
        data-ad-client="ca-pub-8294214228053744"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdsenseMediaWebAd;