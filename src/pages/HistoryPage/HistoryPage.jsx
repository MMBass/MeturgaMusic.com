import { useState } from 'react';
import T from "./HistoryPageI18n";
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

import HistoryItem from '@components/HistoryItem/StyledHistoryItem';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
    <div className={`${className} page`}>
      {songs[0] &&
        <Box >
          <Button className='d-all-btn' component="label" onClick={() => { handleDeleteAll() }} variant="outlined" startIcon={<DeleteSweepOutlinedIcon />}>
            {T.DelAll}
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
      {!songs[0] && <Typography sx={{ margin: '100px', textAlign: 'center' }}>{T.Empty}</Typography>}
    </div>
  );

}

export default HistoryPage;
