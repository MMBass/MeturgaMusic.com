import React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const recSongsData = [
    { artist: 'Alex Warren', title: 'Ordinary', url: 'https://meturgamusic.com/?song=Alex-Warren_Ordinary' },
    { artist: 'Teddy Swims', title: 'Lose Control', url: 'https://meturgamusic.com/?song=Teddy-Swims_Lose-Control' },
    { artist: 'Olivia Dean', title: 'So Easy (To Fall In Love)', url: 'https://meturgamusic.com/?song=Olivia-Dean_So-Easy-To-Fall-In-Love' },
    { artist: 'RAYE', title: 'Where Is My Husband', url: 'https://meturgamusic.com/?song=RAYE_WHERE-IS-MY-HUSBAND%21' },
    { artist: 'Brick + Mortar', title: 'Brighter Than The Sun', url: 'https://meturgamusic.com/?song=Brick-%2B-Mortar_Brighter-Than-The-Sun' },
    { artist: 'Saint Motel', title: 'Hold My Place In Heaven', url: 'https://meturgamusic.com/?song=Saint-Motel_Hold-My-Place-In-Heaven' },
];

const RecSongs = ({ className }) => {
    return (
        <Box className={className}>
            <Grid container spacing={1}>
                {recSongsData.map((song, index) => (
                    <Grid item>
                        <a href={song.url} key={index}>
                            <Chip
                                label={`${song.artist} - ${song.title}`}
                                clickable
                                size='medium'
                            />
                        </a>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RecSongs;
