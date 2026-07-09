import { useEffect } from 'react';

function AdsenseSingleAd({ className, adSlot }) {
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
        style={{ display: 'block', overflow: 'hidden', margin: 'auto',
          // In-article prop:
          textAlign: 'center' }}
        data-ad-client="ca-pub-8294214228053744"
        data-ad-slot={adSlot}

        // In-article props:
        data-ad-layout="in-article"
        data-ad-format="fluid"

        // Media-Web props:
        // data-ad-format="auto"
        // data-full-width-responsive="true"
      />
    </div>
  );
}
  

export default AdsenseSingleAd;