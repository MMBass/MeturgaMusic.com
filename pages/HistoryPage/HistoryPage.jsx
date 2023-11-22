import { useState } from 'react';

import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

import { default as HistoryItem } from '@components/HistoryItem/StyledHistoryItem';

import {
  Grid,
  List,
  Box,
  Typography,
  Button
} from '@mui/material';

function HistoryPage({ className }) {
  const [songs, setSongs] = useState(JSON.parse(localStorage.getItem('meturgamm_songs')) || []);

  const handleDeleteClick = (id) => {
    let newSongs = songs.filter((row) => row.id !== id);
    setSongs(newSongs);
    localStorage.setItem("meturgamm_songs", JSON.stringify(newSongs));
  };

  const handleDeleteAll = () => {
    setSongs([]);
    localStorage.setItem("meturgamm_songs", JSON.stringify([]));
  };

  return (
    <div className={className}>
      {songs[0] &&
        <Box >
          <Button className='d-all-btn' component="label" onClick={() => { handleDeleteAll() }} variant="outlined" startIcon={<DeleteSweepOutlinedIcon />}>
            מחק הכל
          </Button>

          <List sx={{ width: '100%' }} component="div">
            <Grid container spacing={1}>
              {songs.map((song, i) => (
                <Grid item key={song.title + i} xs={12} md={6}>
                  <HistoryItem title={song.title} song_id={song.id} deleteOneSong={handleDeleteClick}>
                  </HistoryItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Box>
      }
      {!songs[0] && <Typography sx={{ margin: '100px', textAlign: 'center' }}>אין שירים בהיסטוריה</Typography>}
    </div>
  );

}

export default HistoryPage;
