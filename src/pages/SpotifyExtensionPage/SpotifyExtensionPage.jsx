
import T from "./SpotifyExtensionPageI18n";
import extensionImage from '../../images/screenshots/spoShot2.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
              <br/>
              <br/>
              <br/>
              <Typography variant="h6" style={{fontSize: '20px'}} >
                {T.NeedToCopyKey}
              </Typography>
              <br/>
              <br/>
              <CopyToClipboard text={"MC476db2b49M92347bYeRCe"} onCopy={() => handleCopy()} aria-label="share">
                <Chip sx={{padding: '15px', fontSize: '20px', background: 'gray', color: '#fff' }} size="large" variant="evelated" label="MC476db2b49M92347bYeRCe" onClick={()=>{}} icon={<ContentCopyIcon color="white"/>}/>
              </CopyToClipboard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SpotifyExtensionPage;
