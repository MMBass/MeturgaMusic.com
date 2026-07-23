import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';

function AdsenseSingleAd({ className, adSlot, adType }) {
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
      <div className="loader">
        <Chip
          label="AD"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            height: '16px',
            fontSize: '0.6rem',
            fontWeight: '700',
            backgroundColor: '#eeeeee',
            color: '#757575',
            borderRadius: '4px',
            '& .MuiChip-label': {
              paddingLeft: '4px',
              paddingRight: '4px',
            }
          }}
        />
        <CircularProgress sx={{ color: 'darkgray' }} />
      </div>

      {inView &&
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            //  overflow: 'hidden',
            //  margin: 'auto', // not used in feed-ads
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