import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import utils from '@/utils';
import T from "./FooterLinksI18n";

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Tooltip from '@mui/material/Tooltip';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';

import OfferInstall from '@components/OfferInstall/StyledOfferInstall';

function FooterLinks({ className }) {
  const [copiedOpen, setCopiedOpen] = useState(false);

  const handleCopy = () => {
    setTimeout(() => {
      setCopiedOpen(true);
    }, 200);
    setTimeout(() => {
      setCopiedOpen(false);
    }, 1000);
  };

  return (
    <Grid className={className} container rowSpacing={1} columnSpacing={0}>

      {(utils.getMobileOS !== "Apple" && !window.matchMedia('(display-mode: standalone)').matches) &&
        <Grid className={'install-section'} item xs={12} sm={3}>
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
            <IconButton component={Link} aria-label="whatsapp" href={"https://api.whatsapp.com/send?text=" + T.WhatsappMessage + " MeturgaMusic.com "} >
              <WhatsAppIcon />
            </IconButton>
            <ListItemText primary={T.WPShare} />
          </ListItem>

          <ListItem>
            <CopyToClipboard text={"MeturgaMusic.com"} onCopy={() => handleCopy()}>
              <IconButton aria-label="share">
                <Tooltip
                  title={<Typography component={'p'} sx={{ textAlign: 'center', fontSize: '14px' }}>{T.Copied}</Typography>}
                  arrow
                  PopperProps={{
                    disablePortal: false,
                  }}
                  open={copiedOpen}
                  disableFocusListener
                  disableTouchListener
                  disableHoverListener
                >
                  <LinkIcon />
                </Tooltip>
              </IconButton>
            </CopyToClipboard>
            <ListItemText primary={T.SiteLink} />
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
            <IconButton component={Link} href="https://www.instagram.com/meturgamusic" aria-label="link" >
              <InstagramIcon />
            </IconButton>
            <ListItemText primary={T.Insta} />
          </ListItem>

          <ListItem>
            <IconButton component={Link} href="https://www.facebook.com/people/MeturgaMusic/100088145167989" aria-label="link">
              <FacebookIcon />
            </IconButton>
            <ListItemText primary={T.FB} />
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
            <IconButton component={Link} href="mailto:meturgamusic@gmail.com" aria-label="link" >
              <EmailIcon />
            </IconButton>
            <ListItemText primary={'MeturgaMusic@gmail.com'} />
          </ListItem>

          <ListItem>
            <IconButton component={Link} href="https://www.facebook.com/people/MeturgaMusic/100088145167989" aria-label="link">
              <MessageIcon />
            </IconButton>
            <ListItemText primary={T.SendFBMessage} />
          </ListItem>
        </List>
      </Grid>

    </Grid>
  );
}

export default FooterLinks;
