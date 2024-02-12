import { styled } from '@mui/material/styles';
import AboutPage from './AboutPage';

const StyledAboutPage = styled(AboutPage)`
  padding: 20px;
  text-align: center;

 .songs-list{
    
    margin-top: 20px;
    
    h5{
      font-size: 3.2vw;
    }

    a{
      margin-top: 20px;
      color: ${props => props.theme.palette.primary.main};
      display: block;
      font-size: 3vw;
    }
  }
`;

export default StyledAboutPage;