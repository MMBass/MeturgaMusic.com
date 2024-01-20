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

import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import utils from '@/utils';
import T from "./WishlistPageI18n";

import SearchBar from '@components/SearchBar/StyledSearchBar';

function WishlistPage({ className }) {

  const [songs, setSongs] = useState(JSON.parse(localStorage.getItem('meturgamm_wish')) || []);

  const [closeDescBanner, setCloseDescBanner] = useState(localStorage.getItem('wish_closeDescBanner'));

  const handleCloseDescBanner = () => {
    setCloseDescBanner(true);
    localStorage.setItem('wish_closeDescBanner', 'true');
  };

  function handleAddSong(title) {
    if (!localStorage.getItem('meturgamm_wish')) localStorage.setItem('meturgamm_wish', JSON.stringify([]));
    const lsSongs = JSON.parse(localStorage.getItem('meturgamm_wish'));
    const song = { title, id: lsSongs.length.toString() };

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

        {!songs[0] && <Typography sx={{ margin: '100px', textAlign: 'center' }}>{T.NoSongs}</Typography>}
      </List>
    </Box>

  );
}

export default WishlistPage;
