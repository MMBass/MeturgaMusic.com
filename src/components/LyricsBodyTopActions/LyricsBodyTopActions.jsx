import { useContext, useEffect, useState } from "react";

import T from "./LyricsBodyTopActionsI18n";
import utils from '@/utils';
import TUtils from '@/i18n-utils';

import { CurrLyricsContext } from '@context/CurrLyricsContext';

// TODO: finish the LyricsBodyTopActions component
function LyricsBodyTopActions({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);

  return (
    // <Grid container className={className + " l-body-top-actions"} justifyContent={window.innerWidth > 600 ? "space-between" : "flex-start"} alignItems="center">
    //   <IconButton onClick={() => currLyricsContext.resetSong(urlSong ? handleBackToHome : setSearchParams /* If the song is from /songs path, change also the path on reset */)}>
    //     <CloseOutlinedIcon className='remove-icon' />
    //   </IconButton>

    //   {currLyricsContext.translatedBy &&
    //     <Chip className='trans-by-chip'
    //       label={TUtils.TransBy + currLyricsContext.translatedBy + '-translator'}
    //       color="default" variant="filled" size='small' />
    //   }

    //   <div className="l-body-top-actions-left">
    //     <ToggleSaveSong songTitle={currLyricsContext.title}></ToggleSaveSong>
    //     <ToggleFullScreen></ToggleFullScreen>
    //   </div>
    // </Grid>
  );
}

export default LyricsBodyTopActions;