import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

function ChangeColors({ className, changeColors = () => { } }) {
  const theme = useTheme();

  return (
    <div className={className}>
      <IconButton onClick={() => changeColors()}>
        {theme.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
}

export default ChangeColors;
