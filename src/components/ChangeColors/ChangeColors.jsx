import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import IconButton from '@mui/material/IconButton';

function ChangeColors({className, ...props}) {

  const handleChangeColors = () =>{
    props.changeColors();
  }

  return (
    <div id="" className={className}>
      <IconButton onClick={()=>handleChangeColors()}>
        <ContrastRoundedIcon className='mui-rounded-icon'></ContrastRoundedIcon>
      </IconButton>
    </div>
  );
}

export default ChangeColors;
