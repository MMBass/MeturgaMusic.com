import { useEffect } from 'react';

import T from "./SpotifyExtensionPageI18n";
import extensionImage from '../../images/screenshots/spoShot2.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useCopyToClipboard from '@hooks/useCopyToClipboard';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

function SpotifyExtensionPage({ className, pageTitle }) {
  const { copiedOpen, handleCopy } = useCopyToClipboard();

  useEffect(() => {
    document.title = pageTitle;
  }, []); 

  return (
    <div className={className} style={{ backgroundImage: `url(${extensionImage.toString()})` }}>
      <Grid container spacing={0} >

        <Grid item xs={12} sm container>
          <Grid item container direction="column" spacing={0} className='headers-container'>
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

          <Grid item container direction="column" spacing={0} className='copy-key-container'>
            <Grid item xs className="copy-key-p">
              <Typography variant="h6">
                {T.NeedToCopyKey}
              </Typography>
            </Grid>
            <Grid item xs>
              <CopyToClipboard text={"MC476db2b49M92347bYeRCe"} onCopy={() => handleCopy()} aria-label="share">
                <Tooltip
                  title={<Typography component={'p'} sx={{textAlign: 'center', fontSize: '12px'}}>{T.Copied}</Typography>}
                  PopperProps={{ disablePortal: false }}
                  open={copiedOpen}
                  arrow
                >
                  <Chip className="copy-key-chip" size="large" variant="evelated" label="MC476db2b49M92347bYeRCe" icon={<ContentCopyIcon color="white"/>} />
                </Tooltip>
              </CopyToClipboard>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SpotifyExtensionPage;
