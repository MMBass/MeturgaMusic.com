import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';

import { default as OfferInstall } from '@components/OfferInstall/StyledOfferInstall';

function Footer({ className }) {
  const [copiedOpen, setCopiedOpen] = useState(false);

  const handleCopy = () => {
    setCopiedOpen(true);
    setTimeout(() => {
      setCopiedOpen(false);
    }, 800);
  };

  return (
    <div id="FOOTER" className={className} >

      <Grid container rowSpacing={6} columnSpacing={2}>
        <Grid className={'install-section'} item xs={12} sm={4}>
          <OfferInstall></OfferInstall>
        </Grid>

        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              שתפו עם חברים
            </ListSubheader>
            <ListItem>
              <IconButton component={Link} aria-label="whatsapp" href="https://api.whatsapp.com/send?text=מצאתי אתר חדש, ייעודי ונוח, שעוזר ללמוד אנגלית עם שירים!
MeturgaMusic.com " >
                <WhatsAppIcon />
              </IconButton>
              <ListItemText primary={'שיתוף בווצאפ'} />
            </ListItem>

            <ListItem>
              <CopyToClipboard text={"MeturgaMusic.com"} onCopy={() => handleCopy()}>
                <IconButton aria-label="share">
                  <Tooltip
                    sx={{ textAlign: 'center' }}
                    title={'הועתק'}
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
              <ListItemText primary={'קישור לאתר'} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              עזרו לנו להתפתח! עקבו ושתפו
            </ListSubheader>
            <ListItem>
              <IconButton component={Link} href="https://www.instagram.com/meturgamusic" aria-label="link" >
                <InstagramIcon />
              </IconButton>
              <ListItemText primary={'אינסטגרם'} />
            </ListItem>

            <ListItem>
              <IconButton component={Link} href="https://www.facebook.com/people/MeturgaMusic/100088145167989" aria-label="link">
                <FacebookIcon />
              </IconButton>
              <ListItemText primary={'פייסבוק'} />
            </ListItem>
          </List>
        </Grid>


        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              לדיווח על תקלות
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
              <ListItemText primary={'או שלחו הודעה בעמוד הפייסבוק שלנו'} />
            </ListItem>
          </List>
        </Grid>

      </Grid>
    </div>
  );
}

export default Footer;
