import { useState, useContext } from 'react';

import { NavLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import { SettingsContext } from '@context/SettingsContext';
import utils from '@/utils';

import ChangeColors from '@components/ChangeColors/StyledChangeColors';
import OfferInstall from '@components/OfferInstall/StyledOfferInstall';

import LangsSwitch from '@components/LangsSwitch/StyledLangsSwitch';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';

function SidePagesList({ className, ...props }) {
  const settingsContext = useContext(SettingsContext);
  const [showPlayer, setShowPlayer] = useState(JSON.parse(localStorage.getItem('showPlayer')));
  const theme = useTheme();

  function handleShowPlayer() {
    setShowPlayer(!showPlayer);
    localStorage.setItem('showPlayer', !showPlayer)
  }

  const pages = [
    {
      name: 'מילים לתרגול ',
      url: '/exercise',
      icon: <Badge variant="dot" invisible={!settingsContext.badge} color='error'><BookmarkAddedIcon className="side-icons"></BookmarkAddedIcon></Badge>,
    },
    {
      name: 'שירים שמורים',
      url: '/wish-list',
      icon: <PlaylistAddIcon className="side-icons"></PlaylistAddIcon>,
      chip: <Chip className='pages-list-chip' label="חדש!" color="error" variant="outlined" size='small' />,
    },
    {
      name: 'היסטוריית חיפוש',
      url: '/history',
      icon: <RestoreOutlinedIcon className="side-icons"></RestoreOutlinedIcon>,
    },

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
        </ListItem>
      </NavLink>

      <Divider light />

      <ListItem alignItems='center' sx={{ justifyContent: 'center' }}>
        <ListItemIcon sx={{ justifyContent: 'center' }}>
          <PlayCircleIcon />
        </ListItemIcon>
        <Switch
          checked={showPlayer}
          onChange={handleShowPlayer}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <ListItemText secondary={'הצע לנגן שיר'} sx={{ flex: '0 0 auto' }} />
      </ListItem>

      <ListItem>
        <ListItemButton onClick={props.changeColors} sx={{ textAlign: 'center', justifyContent: 'center' }}>
          <Chip icon={<ChangeColors changeColors={props.changeColors}></ChangeColors>} className='pages-list-chip extension-chip' label="מצב כהה" color="secondary" variant="outlined" size='large' />
        </ListItemButton>
      </ListItem>

      {/* <ListItem>
        <LangsSwitch></LangsSwitch>
      </ListItem> */}
      {(utils.getMobileOS !== "Apple" && !window.matchMedia('(display-mode: standalone)').matches) &&
        <ListItem>
          <OfferInstall></OfferInstall>
        </ListItem>
      }
    </List>
  );
}

export default SidePagesList;
