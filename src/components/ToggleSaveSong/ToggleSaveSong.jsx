import { useState } from "react";

import Chip from '@mui/material/Chip';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

import T from "./ToggleSaveSongI18n";
import savedSongsService from '@services/savedSongs';

function ToggleSaveSong({ className, songTitle }) {
  const [isSongSaved, setIsSongSaved] = useState(savedSongsService.isSaved(songTitle));

  function handleAddSong() {
    if (!isSongSaved) {
      savedSongsService.handleAddSong(songTitle);
      setIsSongSaved(true);
    }
    if (isSongSaved) {
      savedSongsService.handleDeleteClick(isSongSaved);
      setIsSongSaved(false);
    }
  };

  return (
    <Chip
      className={className + (isSongSaved ? " song-checked" : "")}
      onClick={handleAddSong}
      icon={
      !isSongSaved
        ? <BookmarkAddIcon className='add-wish-icon' />
        : <BookmarkRemoveIcon className='add-wish-icon-saved' />
      }
      label={isSongSaved ? T.removeSong : T.saveSong}
      size='small'
      variant="outlined"
    />
  );
}

export default ToggleSaveSong;