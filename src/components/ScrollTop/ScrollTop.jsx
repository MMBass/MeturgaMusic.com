import React from "react";

import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ScrollTop({className}) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "auto" });
   }; 

  return (
      <Zoom id="" className={className} in={trigger}>
        <Box
          role="presentation"
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1200,
          }}
        >
          <Fab
            onClick={scrollToTop}
            color="primary"
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon htmlColor="white"/>
          </Fab>
        </Box>
      </Zoom> 
      );
}

export default ScrollTop;
