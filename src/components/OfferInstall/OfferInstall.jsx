import { useState, useEffect } from 'react';
import utils from '@/utils';
import T from "./OfferInstallI18n";
import bgImage from '../../images/bg-loader-8.png';

import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function OfferInstall({ className }) {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    });
  }, []);

  // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event
  const offerInstallApp = async () => {
    if (!installPrompt) {
      alert(T.CantInstallAlert);
      return;
    }
    await installPrompt.prompt();
  };

  return (
    <>
      {(utils.getMobileOS !== "Apple" && !window.matchMedia('(display-mode: standalone)').matches) &&
        <Paper className={className}>
          <Grid container rowSpacing={3} columnSpacing={0}>
            <Grid item xs={12} >
              <Typography variant="body1" component="p">
                {T.Header}
              </Typography>
              <Typography variant="body2" component="p">
                {T.Description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img src={bgImage} alt="app-icon" />
            </Grid>

            <Grid item xs={12}>
              <Button onClick={() => offerInstallApp()} variant='outlined' size="small" >{T.Install}</Button>
            </Grid>
          </Grid>
        </Paper>
      }
    </>
  );
}

export default OfferInstall;
