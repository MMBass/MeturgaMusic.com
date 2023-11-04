import { useContext } from 'react';

import { NavLink } from "react-router-dom";

import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

import { SettingsContext } from '@context/SettingsContext';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Chip
} from '@mui/material';

function SidePagesList({ className }) {
  const settingsContext = useContext(SettingsContext);

  const pages = [
    {
      name: 'היסטוריית שירים',
      url: '/history',
      icon: <RestoreOutlinedIcon className="side-icons"></RestoreOutlinedIcon>,
    },
    {
      name: 'תרגול מילים',
      url: '/exercise',
      icon: <Badge variant="dot" invisible={!settingsContext.badge} color='error'><BookmarkAddedIcon className="side-icons"></BookmarkAddedIcon></Badge>,
      chip: <Chip className='pages-list-chip' label="בקרוב" color="error" variant="outlined" size='small'/>,
    },
    {
      name: 'שירים שרציתי לתרגם',
      url: '/wish-list',
      icon: <ChecklistOutlinedIcon className="side-icons"></ChecklistOutlinedIcon>,
      chip: <Chip className='pages-list-chip' label="בקרוב" color="error" variant="outlined" size='small'/>,
    },

  ];

  return (
    <List className={className}>
      {pages.map((page, index) => (
        <NavLink to={page.url} key={index} className={'nav-link'}>
          <ListItem button key={page.name}>
            <ListItemIcon>
              {page.icon}
            </ListItemIcon>
            <ListItemText primary={page.name} primaryTypographyProps={{ style: { color: 'black' } }} />
            {page.chip && page.chip}
          </ListItem>
          <hr style={{ background: '#c7c7c7', border: 'none', height: '0.5px' }}></hr>
        </NavLink>
      ))}
    </List>
  );
}

export default SidePagesList;
