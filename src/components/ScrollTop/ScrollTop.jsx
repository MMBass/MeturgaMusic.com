import React from "react";
import {
  Box,
  Zoom,
  Fab,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
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
            left: 32,
            zIndex: 1300,
          }}
        >
          <Fab
            onClick={scrollToTop}
            color="primary"
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUp htmlColor ="white"/>
          </Fab>
        </Box>
      </Zoom> 
      );
}

export default ScrollTop;
