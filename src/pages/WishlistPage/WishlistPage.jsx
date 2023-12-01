import { useState } from 'react';
import { NavLink } from "react-router-dom";

import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LaunchIcon from '@mui/icons-material/Launch';

import utils from '@/utils';

import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';

function WishlistPage({ className }) {
  const [songs, setSongs] = useState(JSON.parse(localStorage.getItem('meturgamm_wish')) || []);

  function handleAddSong(title) {
    const song = {title, id: songs.length.toString()};

    if (!localStorage.getItem('meturgamm_wish')) localStorage.setItem('meturgamm_wish', JSON.stringify([]));
    const lsSongs = JSON.parse(localStorage.getItem('meturgamm_wish'));
    lsSongs.unshift(song);  // {title: string, id: num}
    if (lsSongs.length >= 500) songs.shift();

    localStorage.setItem("meturgamm_wish", JSON.stringify(lsSongs));
    setSongs(lsSongs);
  };

  const handleDeleteClick = (id) => {
    let newSongs = songs.filter((row) => row.id !== id);
    setSongs(newSongs);
    localStorage.setItem("meturgamm_wish", JSON.stringify(newSongs));
  };

  return (
    <List
      className={className}
      subheader={
        <SearchBar addRecordMode={true} locat={'main'} addRecord={handleAddSong}></SearchBar>
      }
    >

      <Grid container spacing={1}>
        {songs.map((song, i) => (
          <Grid item key={song.title + i} xs={12} md={6}>
            <ListItem key={i}
              secondaryAction={
                <IconButton onClick={() => { handleDeleteClick(song.id) }} edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemText sx={{border: "1px solid #e8e8e8", borderRadius: '3px'}}>
                <NavLink to={'/' + utils.titleToParams(song.title)}>
                  <ListItemButton>
                  <LaunchIcon color='disabled' fontSize='inherit' sx={{marginInlineEnd: '4px'}}></LaunchIcon>
                    <Typography sx={{ color: 'black' }}>
                      {song.title}
                    </Typography>
                  </ListItemButton>
                </NavLink>
              </ListItemText>
            </ListItem>
          </Grid>
        ))}
      </Grid>

      {!songs[0] && <Typography sx={{ margin: '100px', textAlign: 'center' }}>אין שירים</Typography>}
    </List>
  );
}

export default WishlistPage;