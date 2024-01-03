
import { default as FooterLinks } from "@components/FooterLinks/StyledFooterLinks";

function Footer({ className }) {

  return (
    <div id="FOOTER" className={className} >
      <FooterLinks></FooterLinks>
    </div>
  );
}

export default Footer;
