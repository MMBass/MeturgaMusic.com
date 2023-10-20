import { styled } from '@mui/material/styles';
import AboutPage from './AboutPage';

const StyledAboutPage = styled(AboutPage)`
  padding: 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  p{
    padding: 10px;
  }

  img{
    margin: 15px;
    border: 1px solid gray;
    width: 25vw;
    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;

export default StyledAboutPage;