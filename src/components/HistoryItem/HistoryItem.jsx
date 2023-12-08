import { NavLink } from "react-router-dom";

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
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
              <Typography>
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
