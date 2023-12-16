import { useState } from 'react';
import { NavLink } from "react-router-dom";

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LaunchIcon from '@mui/icons-material/Launch';

import utils from '@/utils';

import { default as SearchBar } from '@components/SearchBar/StyledSearchBar';

function WishlistPage({ className }) {
  const [songs, setSongs] = useState(JSON.parse(localStorage.getItem('meturgamm_wish')) || []);

  function handleAddSong(title) {
    const song = { title, id: songs.length.toString() };

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
    <Box className={className}>
      <Alert severity='warning' >
        <AlertTitle>שירים שמורים </AlertTitle>
        <i> כאן תוכלו לחפש ולשמור שירים אשר תרצו ללמוד מהם בעתיד</i>
      </Alert>
      <List

        subheader={
          <SearchBar addRecordMode={true} locat={'main'} addRecord={handleAddSong}></SearchBar>
        }
      >

        <Grid container spacing={1}>
          {songs.map((song, i) => (
            <Grid item key={song.title + i} xs={12} md={6}>
              <ListItem key={i}
                secondaryAction={
                  <IconButton onClick={() => { handleDeleteClick(song.id) }} edge="end" aria-label="deletcoe">
                    <DeleteIcon />
                  </IconButton>
                }>
                <ListItemText sx={{ border: "1px solid #e8e8e8", borderRadius: '3px' }}>
                  <NavLink to={'/' + utils.titleToParams(song.title)}>
                    <ListItemButton>
                      <LaunchIcon color='disabled' fontSize='inherit' sx={{ marginInlineEnd: '4px' }}></LaunchIcon>
                      <Typography>
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
    </Box>

  );
}

export default WishlistPage;
