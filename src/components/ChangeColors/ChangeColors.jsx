import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

function ChangeColors({ className, changeColors }) {
  const theme = useTheme();
  
  const handleChangeColors = () => {
    changeColors();
  }

  return (
    <div className={className}>
      <IconButton onClick={() => handleChangeColors()}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon color='primary'/> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
}

export default ChangeColors;
