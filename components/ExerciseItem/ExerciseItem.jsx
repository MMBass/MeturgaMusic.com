import { useState, useEffect } from 'react';

import { NavLink } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
  Divider,
  Link
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import utils from '@/utils';

function ExerciseItem({ className, ...props }) {
  const [lyric, setLyric] = useState(props.lyric);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDeleteClick = () => {
    props.deleteOneWord(props.lyric.id);
  };

  const Results = () => {
    if (lyric.results[0]) {
      let rText = '';

      lyric.results.map((r, i) => {
        if (i + 1 === lyric.results.length) rText += r;
        else rText += r + ", ";
      });
      return <span className="inline-results-p">{rText}</span>;
    } else {
      return null;
    }
  }

  return (
    <span className={className}>

      <ListItem
        secondaryAction={
          <IconButton onClick={() => { handleDeleteClick() }} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemButton onClick={handleOpen}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary={lyric.word} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            {/* <ListItemIcon>
              <ClearAllIcon />
            </ListItemIcon> */}
            <ListItemText primary={<>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
              >
                <Results />
              </Typography>
            </>} 
            secondary={
            <ListItemButton component={'span'} sx={{mt:'10px'}}>
              <NavLink to={'/' + utils.titleToParams(lyric.title)}>
                <Link component={'button'}>
                  <i>
                    {lyric.title}
                  </i>
                </Link>
              </NavLink>
            </ListItemButton>
            }
            />


          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </span>
  );
}

export default ExerciseItem;
