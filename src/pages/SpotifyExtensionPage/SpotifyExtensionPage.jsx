
import T from "./SpotifyExtensionPageI18n";
import extensionImage from '../../images/screenshots/spoShot2.png';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function SpotifyExtensionPage({ className }) {

  return (
    <div className={className} style={{ backgroundImage: `url(${extensionImage.toString()})` }}>
      <Grid container spacing={0} >

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0} className='headers-container'>
            <Grid item xs>
              <Typography gutterBottom variant="h2" component={'h1'}>
                {T.TopH2}
              </Typography>
              <Typography variant="h2" gutterBottom className='middle-h2'>
                {T.MiddleH2}
              </Typography>
              <Typography variant="h3">
                {T.H3}
              </Typography>
            </Grid>
          </Grid>

          {/* <Grid item className='img-container'>
              <img
                src={extensionImage}
                alt={'extension-screenshot-image'}
                loading="lazy"
                className="screenshot-img"
              />
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default SpotifyExtensionPage;
