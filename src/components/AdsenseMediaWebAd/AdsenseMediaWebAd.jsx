import React, { useEffect } from 'react';

function AdsenseMediaWebAd({ className, adSlot }) {
  useEffect(() => {
    pushAd();
  }, []);

  const pushAd = () => {
    try {
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 1500);
    } catch (e) {
      // ignore if push fails
    }
  };

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