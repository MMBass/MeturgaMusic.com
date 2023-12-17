import { styled } from '@mui/material/styles';
import AboutBody from './AboutBody';

const StyledAboutBody = styled(AboutBody)`
text-align: center;
font-size: 22px;
   margin: 25px 0;
   padding: 15px;

   /* padding-top: 200px; */
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  p{
    padding: 10px;
    /* width: 80vw; */
  }

  img{
    margin: 15px;
    border: 1px solid gray;
    width: 35vw;
    @media (max-width: 600px) {
      /* width: 90%; */
    }
  }

  @media (max-width: 600px) {
    width: 90%;
    text-align: start;
  }
`;

export default StyledAboutBody;