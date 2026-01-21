import { styled } from '@mui/material/styles';
import RecSongs from './RecSongs.jsx';

const StyledRecSongs = styled(RecSongs)(({ theme }) => ({
    padding: '15px 0 15px 0',
    wordWrap: 'break-word',


    '& a': {
        textDecoration: 'none',
    },
}));

export default StyledRecSongs;
