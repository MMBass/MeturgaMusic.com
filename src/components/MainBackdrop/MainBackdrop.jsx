import bgImage from '../../images/bg-loader-8.png';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function MainBackdrop({ className }) {
  return (
    <Backdrop
      className={className}
      open={true}
      style={{
        backgroundImage: "url("+bgImage+")",
        backgroundSize: '200px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} 
    >
      <CircularProgress color="inherit" size={190} sx={{ position: 'absolute' }}/>
    </Backdrop>
  );
}

export default MainBackdrop;
