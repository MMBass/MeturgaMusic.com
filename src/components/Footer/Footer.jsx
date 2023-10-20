import { useEffect } from "react";

import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Link
} from '@mui/material';

const pages = [{ name: 'אודותנו', url: '/About' }];
const social = [{ name: 'פייסבוק', url: 'https://facebook.com/meturgammusic' }];
const contact = [{ name: 'example@gmail.com', url: 'mailto:example@gmail.com' }];

function Footer({ className }) {

  useEffect(() => {
      // google ads array
      window.adsbygoogle = window.adsbygoogle || [] 
      ;
  }, []);

  return (
    <div id="FOOTER" className={className}>

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
              <ListItemText primary={' נבנה על ידי BassSites'} />
            </ListItem>
          </List>

          {/* <List>
            <ListItem component={Link} href="/#/about">
              <ListItemText primary={'אודותנו'} />
            </ListItem>
          </List> */}

        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
