import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

function ChangeColors({ className, ...props }) {
  const theme = useTheme();

// useEffect(() => {
//   console.log(theme);
// }, [input]);
  
  const handleChangeColors = () => {
    props.changeColors();
  }

  return (
    <div id="" className={className}>
      <IconButton onClick={() => handleChangeColors()}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon color='primary'/> : <Brightness4Icon />}
        {/* <ContrastRoundedIcon className='mui-rounded-icon'></ContrastRoundedIcon> */}
      </IconButton>
    </div>
  );
}

export default ChangeColors;
