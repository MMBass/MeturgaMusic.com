import { useContext } from 'react';

import { NavLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';

import { SettingsContext } from '@context/SettingsContext';

import { default as ChangeColors } from '@components/ChangeColors/StyledChangeColors';

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
} from '@mui/material';

function SidePagesList({ className, ...props }) {
  const settingsContext = useContext(SettingsContext);
  const theme = useTheme();

  const pages = [
    {
      name: 'היסטוריית חיפוש',
      url: '/history',
      icon: <RestoreOutlinedIcon className="side-icons"></RestoreOutlinedIcon>,
    },
    {
      name: 'מילים לתרגול ',
      url: '/exercise',
      icon: <Badge variant="dot" invisible={!settingsContext.badge} color='error'><BookmarkAddedIcon className="side-icons"></BookmarkAddedIcon></Badge>,
    },
    {
      name: 'שירים שמורים',
      url: '/wish-list',
      icon: <ChecklistOutlinedIcon className="side-icons"></ChecklistOutlinedIcon>,
      chip: <Chip className='pages-list-chip' label="חדש!" color="error" variant="outlined" size='small' />,
    },
    // {
    //   name: 'תוסף לספוטיפיי',
    //   url: '/spotify-extension',
    //   icon: <ContactlessRoundedIcon className="side-icons"></ContactlessRoundedIcon>,
    //   chip: <Chip className='pages-list-chip extension-chip' label="בקרוב!" color="secondary" variant="outlined" size='small' />,
    // },

  ];

  return (
    <List className={className} sx={{ maxWidth: '320px' }}>
      <Alert severity="warning">
        {'חשוב לדעת: איננו אוספים מידע מהמשתמשים, על כן המידע בעמודים אלו נשמר באופן מקומי בדפדפן, עליך להשתמש באותו דפדפן אם ברצונך להשתמש בתכונות אלו'}
      </Alert>
      {pages.map((page, index) => (
        <NavLink to={page.url} key={index} className={'nav-link'}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
              {page.chip && page.chip}
            </ListItemButton>
            <Divider />
          </ListItem>
        </NavLink>
      ))}

      <NavLink to={'/spotify-extension'} className={'nav-link'}>
        <ListItem sx={{ backgroundColor: 'lightGray' }}>
          <ListItemButton>
            <ListItemIcon>
              <ContactlessRoundedIcon className="side-icons" sx={{ rotate: '-90deg' }}></ContactlessRoundedIcon>
            </ListItemIcon>
            <ListItemText primary={'תוסף לספוטיפיי'} primaryTypographyProps={{ style: { color: 'black' } }} />
            <Chip className='pages-list-chip extension-chip' label="בקרוב!" color="secondary" variant="outlined" size='small' />
          </ListItemButton>
          <Divider />
        </ListItem>
      </NavLink>

      <ListItem>
        <ListItemButton onClick={props.changeColors} sx={{textAlign: 'center', justifyContent: 'center'}}>
          <Chip icon={<ChangeColors changeColors={props.changeColors}></ChangeColors>} className='pages-list-chip extension-chip' label="מצב כהה" color="secondary" variant="outlined" size='large' />
        </ListItemButton>
        <Divider />
      </ListItem>
    </List>
  );
}

export default SidePagesList;
