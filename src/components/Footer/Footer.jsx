
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
            className="google-anno-skip"
            canInstall={!utils.isApple()}></FooterLinks>
        </div>
      }
    </>
  );
}

export default Footer;
