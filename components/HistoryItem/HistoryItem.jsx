import { NavLink } from "react-router-dom";

import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import utils from '@/utils';

function HistoryItem({ className, ...props }) {

  const handleDeleteOne = () => {
    props.deleteOneSong(props.song_id);
  };

  return (

    <ListItem
      className={className}
      secondaryAction={
        <IconButton onClick={() => { handleDeleteOne() }} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={
          <NavLink to={'/' + utils.titleToParams(props.title)}>
            <ListItemButton>
              <Typography sx={{ color: 'black' }}>
                {props.title}
              </Typography>
            </ListItemButton>
          </NavLink>
        }
      ></ListItemText>
    </ListItem>

  );
}

export default HistoryItem;
