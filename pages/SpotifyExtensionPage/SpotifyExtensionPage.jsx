import extensionImage from '../../screenshots/extensionImage.png';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function SpotifyExtensionPage({ className }) {
  return (
    <div className={className} style={{backgroundImage: `url(${extensionImage.toString()})`}}>
      <Grid container spacing={4} >

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2} className='headers-container'>
            <Grid item xs>
              <Typography gutterBottom variant="h2" component={'h1'}>
                התוסף שלנו לאתר ספוטיפיי.
              </Typography>
              <Typography variant="h2" gutterBottom className='middle-h2'>
                תנו למסך לעקוב אחר מהלך השיר, יחד עם התרגום, ללא איבוד המקור.
              </Typography>
              <Typography variant="h3">
                בקרוב!
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
