import { useEffect } from 'react';

function AdsenseMultiplexAd({ className, adSlot }) {
  useEffect(() => {
    pushAd();
  }, []);

  const pushAd = () => {
    try {
       console.log(window.adsbygoogle);
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      return; // Ignore if push fails
    }
  };

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', overflow: 'hidden', margin: '15px auto' }}
        data-ad-client="ca-pub-8294214228053744"
        data-ad-slot={adSlot}
        data-ad-format="autorelaxed"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdsenseMultiplexAd;