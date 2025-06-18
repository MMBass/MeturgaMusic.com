import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import Tooltip from '@mui/material/Tooltip';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import T from "./FooterLinksI18n";
import { URLS, EXTERNAL_LINKS } from "@/constants";
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import OfferInstall from '@components/OfferInstall/StyledOfferInstall';

function FooterLinks({ className, canInstall }) {
  const { copiedOpen, handleCopy } = useCopyToClipboard();

  return (
    <Grid className={className} container rowSpacing={1} columnSpacing={0}>

      {canInstall &&
        <Grid className='install-section' item xs={12} sm={3}>
          <OfferInstall></OfferInstall>
        </Grid>
      }

      <Grid item xs={12} sm={3}>
        <List>
          <ListSubheader
            variant="h5"
            component="h5"
          >
            {T.Share}
          </ListSubheader>
          <ListItem>
            <ListItemButton component="a" aria-label="whatsapp-link" href={EXTERNAL_LINKS.WHATSAPP_DRAFT_MESSAGE_URL + T.WhatsappMessage + URLS.METURGAMUSIC_URL} target="_blank">
              <WhatsAppIcon />
              <ListItemText primary={T.WPShare} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <CopyToClipboard text={URLS.METURGAMUSIC_URL} onCopy={() => handleCopy()} aria-label="share">
              <ListItemButton>
                <Tooltip
                  title={<Typography component={'p'} sx={{ textAlign: 'center', fontSize: '14px' }}>{T.Copied}</Typography>}
                  PopperProps={{disablePortal: false}}
                  open={copiedOpen}
                  disabled={true}
                >
                  <LinkIcon />
                </Tooltip>

                <ListItemText primary={T.SiteLink} />

              </ListItemButton>
            </CopyToClipboard>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={3}>
        <List>
          <ListSubheader
            variant="h5"
            component="h5"
          >
            {T.HelpUs}
          </ListSubheader>
          <ListItem>
            <ListItemButton component="a" href={EXTERNAL_LINKS.INSTA_PAGE_URL} target="_blank" aria-label="link">
              <InstagramIcon />

              <ListItemText primary={T.Insta} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href={EXTERNAL_LINKS.FACEBOOK_PAGE_URL} target="_blank" aria-label="link">
              <FacebookIcon />

              <ListItemText primary={T.FB} />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>


      <Grid item xs={12} sm={3}>
        <List>
          <ListSubheader
            variant="h5"
            component="h5"
          >
            {T.ReportUs}
          </ListSubheader>
          <ListItem>
            <ListItemButton component="a" href={"mailto:" + EXTERNAL_LINKS.METURGAMUSIC_MAIL} target="_blank" aria-label="link">
              <EmailIcon />
              <ListItemText primary={EXTERNAL_LINKS.METURGAMUSIC_MAIL} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href={EXTERNAL_LINKS.FACEBOOK_PAGE_URL} target="_blank" aria-label="link">
              <MessageIcon />
              <ListItemText primary={T.SendFBMessage} />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>

    </Grid>
  );
}

export default FooterLinks;