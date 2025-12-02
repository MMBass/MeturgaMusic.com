import { useEffect } from 'react';

function AdsenseMultiplexAd({ className }) {
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
      <ins
        className="adsbygoogle"
        style={{ display: 'block', overflow: 'hidden', margin: '15px auto' }}
        data-ad-client="ca-pub-8294214228053744"
        data-ad-slot={2008052409}
        data-ad-format="autorelaxed"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdsenseMultiplexAd;