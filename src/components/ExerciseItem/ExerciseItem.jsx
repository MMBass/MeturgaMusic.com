import { useState } from 'react';

import { NavLink } from "react-router-dom";

import  List from '@mui/material/List';
import  ListItem from '@mui/material/ListItem';
import  ListItemButton from '@mui/material/ListItemButton';
import  ListItemIcon from '@mui/material/ListItemIcon';
import  ListItemText from '@mui/material/ListItemText';
import  Collapse from '@mui/material/Collapse';
import  Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import  Link from '@mui/material/Link';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import utils from '@/utils';

function ExerciseItem({ className, lyric, deleteOneWord }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDeleteClick = () => {
    deleteOneWord(lyric.id);
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
