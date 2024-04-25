
import FooterLinks from "@components/FooterLinks/StyledFooterLinks";
import utils from '@/utils';

function Footer({ className }) {
  return (
    <>
    {/* Display the footer links for not installed version*/}
      {!window.matchMedia('(display-mode: standalone)').matches &&
        <div id="FOOTER" className={className} >
          <FooterLinks
            canInstall={(!utils.isApple())}></FooterLinks>
        </div>
      }
    </>
  );
}

export default Footer;
