import { useContext } from "react";

import { NavLink } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CurrLyricsContext } from '@context/CurrLyricsContext';

function NavBar({ className }) {
  const currLyricsContext = useContext(CurrLyricsContext);

  const pages = [];

  return (
    <Box className={className} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <NavLink to={page.url} key={page.name}>
          <Button
            sx={{ my: 2 }}
          >
            {page.name}
          </Button>
        </NavLink>
      ))}
    </Box>
  );
}

export default NavBar;
