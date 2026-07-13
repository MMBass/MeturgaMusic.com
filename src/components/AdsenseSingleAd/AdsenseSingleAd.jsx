import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function AdsenseSingleAd({ className, adSlot, adType }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '400px 0px',
  });

  useEffect(() => {
    pushAd();
  }, []);

  const pushAd = () => {
    try {
      // Delay the push based on the number of ads already pushed
      // Was 2500 - now 500 after useInView were added
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 500 * (window.adsbygoogle?.length || 1));
    } catch (e) {
      return; // Ignore if push fails
    }
  };

  return (
    <div ref={ref} className={className}>
      {inView &&
        <ins
          className="adsbygoogle"
          style={{
            display: 'block', overflow: 'hidden', margin: 'auto',
            // article type: - use if need
            // textAlign: 'center'
          }}
          {...(adType === 'feed' && {
            'data-ad-format': 'fluid',
            // feed-dark-1 & feed-white-1 - if same edit time may be the same layout-key
            'data-ad-layout-key': '-ew+5t+59-dw+69'
          })}
          data-ad-client="ca-pub-8294214228053744"
          data-ad-slot={adSlot}
          {...(adType === 'web' && {
            'data-ad-format': 'auto',
            'data-full-width-responsive': 'true'
          })}
          {...(adType === 'article' && {
            'data-ad-layout': 'in-article',
            'data-ad-format': 'fluid'
          })}
        />
      }
    </div>
  );
}

export default AdsenseSingleAd;