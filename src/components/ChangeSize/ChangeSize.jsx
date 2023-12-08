import { useContext } from "react";

import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import { SettingsContext } from '@context/SettingsContext';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
