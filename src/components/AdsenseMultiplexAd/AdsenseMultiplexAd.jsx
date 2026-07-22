import { useEffect, useRef } from 'react';

function AdsenseMultiplexAd({ className, adSlot }) {
  const hasPushedRef = useRef(false);

  useEffect(() => {
    pushAd();
  }, []);

  const pushAd = () => {
    try {
      if (hasPushedRef.current) return;
      hasPushedRef.current = true;
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 2500);
    } catch (e) {
      return; // ignore if push fails
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