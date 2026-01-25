import { styled } from '@mui/material/styles';
import RecSongs from './RecSongs.jsx';

const StyledRecSongs = styled(RecSongs)(({ theme }) => ({
    padding: '15px 0 15px 0',
    wordWrap: 'break-word',
    width: '80%',

    '.MuiChip-root': {
        backgroundColor: theme.mode !== 'dark' ? '#e8e8e8' : '#6f6f6f',
    },

    '.MuiChip-label': {
        fontWeight: '500',
        color: theme.palette.primary.contrastText,
    },

    '& a': {
        textDecoration: 'none',
    },
}));

export default StyledRecSongs;
