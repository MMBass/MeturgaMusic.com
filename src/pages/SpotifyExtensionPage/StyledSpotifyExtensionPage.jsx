import { styled } from '@mui/material/styles';
import SpotifyExtensionPage from './SpotifyExtensionPage';

const StyledSpotifyExtensionPage = styled(SpotifyExtensionPage)`
  min-height: 80vh;
  background-color: #070707b2;
  color: white;
  text-align: center;
  padding: 50px 50px;

  background-position: bottom -70px right -135px;
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-blend-mode: multiply;

  @media (max-width: 600px) {
    padding: 50px 0px;
    background-position: bottom -65px right -440px;
    background-size: 200% ;
  }

  .headers-container{
    padding: 30px;
    .MuiTypography-root{
      font-size: 5vw;
      display: inline;
      text-align: start;
      font-weight: 800;

      @media (max-width: 600px) {
        font-size: 12vw;
      }
    }
    .h3{
        font-weight: 700;
    }
  }

  .middle-h2{
    color: #1BB151;
  }

  .copy-key-container{
    font-weight: 400;
    padding: 30px;

    .copy-key-p{
      h6{
        font-size: 1.6vw;
        
        @media (max-width: 600px) {
          font-size: 4vw;
        }
      }
      margin-bottom: 13px;
    }
    .copy-key-chip{
      background: gray;
      color: white;
      padding: 10px;
      text-align: center;


      @media (max-width: 600px) {
        font-size: 4vw;
      }
    }
  }

  .premium-only-desc{
    display: inline-block;
    text-align: center;
    margin: 30px 25px;
    max-width: 450px;
  }

`;

export default StyledSpotifyExtensionPage;