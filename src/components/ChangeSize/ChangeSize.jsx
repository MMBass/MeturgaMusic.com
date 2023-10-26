import { useContext } from "react";

import { Add as AddIcon } from '@mui/icons-material';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Remove as RemoveIcon } from '@mui/icons-material';

import { SettingsContext } from '@context/SettingsContext';

import {
  Button,
  ButtonGroup,
} from '@mui/material';

function ChangeSize({className}) {
  const settingsContext = useContext(SettingsContext);

  return (
    <div id="" className={className}>
       <ButtonGroup className='button-group'>
            <Button
              aria-label="reduce"
              onClick={() => {
                settingsContext.reduceFontSize();
              }}
            >
              <ZoomOutIcon fontSize="small" />
            </Button>
            <Button className='font-size-disabled' disabled>{settingsContext.fontSize.md}</Button>
            <Button
              aria-label="increase"
              onClick={() => {
                settingsContext.increaseFontSize();
              }}
            >
              <ZoomInIcon fontSize="small" />
            </Button>
          </ButtonGroup>
    </div>
  );
}

export default ChangeSize;
