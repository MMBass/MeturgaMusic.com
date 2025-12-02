
import FooterLinks from "@components/FooterLinks/StyledFooterLinks";
import AdsenseMultiplexAd from "@components/AdsenseMultiplexAd/StyledAdsenseMultiplexAd";
import utils from '@/utils';

function Footer({ className }) {
  return (
    <>
    {/* Display the footer links for not installed version*/}
      {!window.matchMedia('(display-mode: standalone)').matches &&
        <div id="FOOTER" className={className} >
          <FooterLinks
            canInstall={(!utils.isApple())}></FooterLinks>
          <AdsenseMultiplexAd></AdsenseMultiplexAd>
        </div>
      }
    </>
  );
}

export default Footer;
