import { NavLink } from "react-router-dom";

import { ArrowBack } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';

const pages = [];

function SidePagesList() {
  return (
    <List>
      {pages.map((page, index) => (
        <NavLink to={page.url} key={index}>
          <ListItem button key={page.name}>
            <ListItemText primary={page.name} />
            <ListItemIcon>
              <ArrowBack />
            </ListItemIcon>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default SidePagesList;
