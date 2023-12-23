import bgImage from '../../images/bg-loader-8.png';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';

function MainBackdrop({ className }) {
  return (
    <Backdrop
      className={className}
      sx={{ color: '#c5c5c592', zIndex: 1990}}
      open={true}
      style={{
        backgroundImage: "url("+bgImage+")",
        backgroundSize: '200px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} 
    >
      <Skeleton variant="rectangular" animation="wave" sx={{ backgroundColor: '#68686868', width: '100%', height: '100%' }} />
      <CircularProgress color="inherit" size={190} sx={{ position: 'absolute' }}/>
    </Backdrop>
  );
}

export default MainBackdrop;
