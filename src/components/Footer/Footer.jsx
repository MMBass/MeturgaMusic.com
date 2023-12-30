import { useEffect } from "react";

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import { default as OfferInstall } from '@components/OfferInstall/StyledOfferInstall';

function Footer({ className }) {

  useEffect(() => {
    // google ads array - for auto ads only?
    // window.adsbygoogle = window.adsbygoogle || [];
  }, []);

  return (
    <div id="FOOTER" className={className} >

      <Grid container rowSpacing={6} columnSpacing={2}>

        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              לדיווח על תקלות
            </ListSubheader>
            <ListItem component={Link} href="mailto:meturgamusic@gmail.com">
              <ListItemText primary={'MeturgaMusic@gmail.com'} />
            </ListItem>

            <ListItem component={Link} href="https://www.facebook.com/people/MeturgaMusic/100088145167989">
              <ListItemText primary={'או שלחו הודעה בעמוד הפייסבוק שלנו'} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <OfferInstall></OfferInstall>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
