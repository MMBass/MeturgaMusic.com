import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function AdsenseMultiplexAd({ className, adSlot }) {
    const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

 useEffect(() => {
    if (inView) {
      pushAd();
    }
  }, [inView]);

  const pushAd = () => {
    try {
       console.log(window.adsbygoogle);
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      return; // Ignore if push fails
    }
  };

  return (
    <div className={className} ref={ref}>
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