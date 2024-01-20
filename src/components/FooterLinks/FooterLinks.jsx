import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import T from "./FooterLinksI18n";

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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

function FooterLinks({ className, canInstall }) {
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

      {canInstall &&
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
            <ListItemButton component="a" aria-label="whatsapp" href={"https://api.whatsapp.com/send?text=" + T.WhatsappMessage + " MeturgaMusic.com "} target="_blank">
              <WhatsAppIcon />
              <ListItemText primary={T.WPShare} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <CopyToClipboard text={"MeturgaMusic.com"} onCopy={() => handleCopy()} aria-label="share">
              <ListItemButton>
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
            <ListItemButton component="a" href="https://www.instagram.com/meturgamusic" target="_blank" aria-label="link">
              <InstagramIcon />

              <ListItemText primary={T.Insta} />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component="a" href="https://www.facebook.com/people/MeturgaMusic/100088145167989" target="_blank" aria-label="link">
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
          <ListItemButton component="a" href="mailto:meturgamusic@gmail.com" target="_blank" aria-label="link">
            <EmailIcon />
            <ListItemText primary={'MeturgaMusic@gmail.com'} />
          </ListItemButton>
          </ListItem>

          <ListItem>
          <ListItemButton component="a" href="https://www.facebook.com/people/MeturgaMusic/100088145167989 " target="_blank" aria-label="link">
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
