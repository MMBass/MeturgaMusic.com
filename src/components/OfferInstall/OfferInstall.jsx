import { useState, useEffect, useContext, useMemo } from 'react';
import utils from '@/utils';
import T from "./OfferInstallI18n";
import bgImage from '../../images/bg-loader-8.png';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
      return;
    }
    await installPrompt.prompt();
    installPrompt = null;
  };

  return (
    <>
      {utils.getMobileOS !== "Apple" &&
        <Card sx={{ maxWidth: 345 }} >
          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography gutterBottom variant="h5" component="div">
              {T.Header}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {T.Description}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 150, width: 140, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            image={bgImage}
          />
          <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" fontSize: 20}}>
            <Button onClick={()=>offerInstallApp()} variant='outlined' size="large" >{T.Install}</Button>
          </CardActions>
        </Card>
      }
    </>
  );
}

export default OfferInstall;
