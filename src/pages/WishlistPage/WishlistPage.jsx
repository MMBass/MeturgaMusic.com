import { useState } from 'react';
import { NavLink } from "react-router-dom";

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';

import LaunchIcon from '@mui/icons-material/Launch';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import utils from '@/utils';
import T from "./WishlistPageI18n";
import { LOCAL_STORAGE_KEYS } from '@/constants';
import savedSongsService from  '@services/savedSongs';

import SearchBar from '@components/SearchBar/StyledSearchBar';

function WishlistPage({ className }) {

  const [songs, setSongs] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.WISHLIST)) || []);

  const [closeDescBanner, setCloseDescBanner] = useState(localStorage.getItem(LOCAL_STORAGE_KEYS.WISH_CLOSE_DESC_BANNER) === 'true');

  const handleCloseDescBanner = () => {
    setCloseDescBanner(true);
    localStorage.setItem(LOCAL_STORAGE_KEYS.WISH_CLOSE_DESC_BANNER, 'true');
  };

  function handleAddSong(title, webSongUrl) {
    let lsSongs = savedSongsService.handleAddSong(title, webSongUrl);
    setSongs(lsSongs);
  };

  const handleDeleteClick = (id) => {
    let newSongs = savedSongsService.handleDeleteClick(id);
    setSongs(newSongs);
  };

  return (
    <Box className={className}>

      {!closeDescBanner &&
        <Alert severity='warning'
          action={
            <Button color="inherit" size="small" aria-label='close-banner' onClick={() => { handleCloseDescBanner() }}>
              <CloseOutlinedIcon fontSize={'small'}></CloseOutlinedIcon>
            </Button>
          }
        >
          <AlertTitle> {T.AlertTitle} </AlertTitle>
          <i> {T.AlertDesc} </i>
        </Alert>
      }

      <List subheader={<SearchBar addRecordMode={true} locat={'main'} addRecord={handleAddSong}></SearchBar>}>
        <Grid container spacing={1}>
          {songs.map((song, i) => (
            <Grid item key={song.title + i} xs={12} md={6}>
              <ListItem 
                // key={i} // What's the use  of this key?
                secondaryAction={
                  <IconButton onClick={() => { handleDeleteClick(song.id) }} edge="end" aria-label="deletcoe" color='info'>
                    <ClearRoundedIcon size="small" className='remove-wish-icon' color='info'/>
                  </IconButton>
                }>
                <ListItemText sx={{ border: "1px solid #e8e8e8", borderRadius: '3px' }}>
                  <NavLink to={'/' + utils.titleToParams(song.title)}>
                    <ListItemButton>
                      <LaunchIcon color='disabled' fontSize='inherit' sx={{ marginInlineEnd: '4px' }}></LaunchIcon>
                      <Typography>
                        {song.title.replaceAll('%26', '&')}
                      </Typography>
                    </ListItemButton>
                  </NavLink>
                </ListItemText>
              </ListItem>
            </Grid>
          ))}
        </Grid>
        {!songs[0] && <Typography sx={{ margin: '100px', textAlign: 'center' }}>{T.NoSongs}</Typography>}
      </List>
    </Box>

  );
}

export default WishlistPage;
