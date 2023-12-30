import { useState, useEffect, useContext, useMemo } from 'react';
import utils from '@/utils';
import T from "./OfferInstallI18n";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function OfferInstall({ className }) {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    setInstallPrompt(event);
  });
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
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {T.Header}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {T.Description}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardActions>
            <Button size="medium">{T.Install}</Button>
          </CardActions>
        </Card>
      }
    </>
  );
}

export default OfferInstall;
