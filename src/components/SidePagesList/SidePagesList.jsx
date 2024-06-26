import { useState, useContext } from 'react';

import { NavLink } from "react-router-dom";

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import { SettingsContext } from '@context/SettingsContext';
import utils from '@/utils';
import T from "./SidePagesListI18n";

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

function SidePagesList({ className, changeColors }) {
  const settingsContext = useContext(SettingsContext);
  const [showPlayer, setShowPlayer] = useState(JSON.parse(localStorage.getItem('showPlayer')));

  function handleShowPlayer() {
    setShowPlayer(!showPlayer);
    localStorage.setItem('showPlayer', !showPlayer)
  }

  const pages = [
    {
      name: T.ExercisePage,
      url: '/exercise',
      icon: <Badge variant="dot" invisible={!settingsContext.badge} color='error'><BookmarkAddedIcon className="side-icons"></BookmarkAddedIcon></Badge>,
    },
    {
      name: T.WishListPage,
      url: '/wish-list',
      icon: <PlaylistAddIcon className="side-icons"></PlaylistAddIcon>,
      chip: <Chip className='pages-list-chip' label={T.LabelForNew} color="error" variant="outlined" size='small' />,
    },
    {
      name: T.HistoryPage,
      url: '/history',
      icon: <RestoreOutlinedIcon className="side-icons"></RestoreOutlinedIcon>,
    },

  ];

  return (
    <List className={className} sx={{ maxWidth: '320px' }}>
      <Alert severity="warning">
        {T.WarningNoSavedData}
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
            <ListItemText primary={T.SpotifyPage} primaryTypographyProps={{ style: { color: 'black' } }} />
            <Chip className='pages-list-chip extension-chip' label={T.LabelForComingSoon} color="secondary" variant="outlined" size='small' />
          </ListItemButton>
        </ListItem>
      </NavLink>

      <Divider light />

      <ListItem alignItems='center' sx={{ justifyContent: 'center' }}>
        <ListItemIcon sx={{ justifyContent: 'center' }}>
          <PlayCircleIcon />
        </ListItemIcon>
        <Switch
          checked={!showPlayer}
          onChange={handleShowPlayer}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <ListItemText secondary={T.PlayerSwitch} sx={{ flex: '0 0 auto', marginInlineStart: '10px' }} />
      </ListItem>

      <ListItem>
        <ListItemButton onClick={changeColors} sx={{ justifyContent: 'center' }}>
          <Chip icon={<ChangeColors></ChangeColors>} className='pages-list-chip extension-chip' label={T.DarkMode} color="secondary" variant="outlined" size='large' />
        </ListItemButton>
      </ListItem>

      {/* <ListItem>
        <LangsSwitch></LangsSwitch>
      </ListItem> */}
      
      {/* TODO not working in every component, because is using uniqe window event */}
      {/* {(!utils.isApple() && !window.matchMedia('(display-mode: standalone)').matches) &&
        <ListItem sx={{ justifyContent: 'center' }}>
          <OfferInstall></OfferInstall>
        </ListItem>
      } */}
    </List>
  );
}

export default SidePagesList;
