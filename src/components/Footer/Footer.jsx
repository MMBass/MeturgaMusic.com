import { useEffect } from "react";

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import bgImage from '../../images/bg-footer.jpg';

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

          <List>
            <ListItem component={Link} href="https://basssites.com" className='built-by'>
              <ListItemText primary={' © BassSites 2023 '} />
            </ListItem>
          </List>

          {/* <List>
            <ListItem component={Link} href="/#/about">
              <ListItemText primary={'אודותנו'} />
            </ListItem>
          </List> */}

        </Grid>

        <Grid item xs={12} sm={4}>
          {/* single text body AD */}
          {/* <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8294214228053744"
            data-ad-slot="1741051993"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins> */}
          {/* END single text body AD */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
