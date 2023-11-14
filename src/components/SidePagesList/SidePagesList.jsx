import { useContext } from 'react';

import { NavLink } from "react-router-dom";

import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

import { SettingsContext } from '@context/SettingsContext';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Chip,
  Divider,
  Alert,
  AlertTitle
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
    },
    {
      name: 'שירים שרציתי לתרגם',
      url: '/wish-list',
      icon: <ChecklistOutlinedIcon className="side-icons"></ChecklistOutlinedIcon>,
      chip: <Chip className='pages-list-chip' label="חדש!" color="error" variant="outlined" size='small' />,
    },

  ];

  return (
    <List className={className} sx={{maxWidth: '320px'}}>
      <Alert severity="warning">
        {'חשוב לדעת: איננו אוספים מידע מהמשתמשים, על כן המידע בעמודים אלו נשמר באופן מקומי בדפדפן, עליך להשתמש באותו דפדפן אם ברצונך להשתמש בתכונות אלו'}
      </Alert>
      {pages.map((page, index) => (
        <NavLink to={page.url} key={index} className={'nav-link'}>
          <ListItem key={page.name}>
            <ListItemButton>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} primaryTypographyProps={{ style: { color: 'black' } }} />
              {page.chip && page.chip}
            </ListItemButton>
            <Divider />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default SidePagesList;
