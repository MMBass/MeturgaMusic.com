import { styled } from '@mui/material/styles';
import AboutBody from './AboutBody';

const StyledAboutBody = styled(AboutBody)`
  width: 100%;
  margin: 0 0 60px 0;
  font-size: 2vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 4.5vw;
  }

  .even-item{
    flex-direction: row-reverse;
    *{
      background-color: rgba(255, 255, 255, 0);
    }
  }

  .even-item, .not-even-item{
    min-height: 80vh;
  }

  .about-body-top{
    text-align: start;

    @media (max-width: 600px) {
      height: 30px;
    }

    .remove-icon{
      padding: 3px;
      font-size: medium;
      color: #00000028;

      :hover{
        color: #2b2b2bef;
      }
    }
  }
  
  .strings-item{

    .strings-container{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      p{
        margin: auto;
        padding: 15px;
        width: 80%;
      }
    }

  }

  .img-item{
    padding: 15px;
    min-height: 70vh;
    @media (max-width: 600px) {
      min-height: 35vh;
      padding: 15px;
      padding-top: 0;
      margin: 0;
    }

    .img-container{
      display: flex;
      justify-content: center;
      height: 100%;
      background: radial-gradient(circle, #edcbcb 60%, rgb(223, 128, 142) 100%);
      border-radius: 5px;
    }

    img{
      margin: auto;
      width: 80%;
      height: auto;
      border-radius: 5px;
      @media (max-width: 600px) {
        width: 90%;
        height: auto;
        max-height: 90%;
        /* max-height: 200px; */
      }
    }
  }

  .about-body-bottom{
    padding: 60px;
    p{
      font-size: 2vw;
      @media (max-width: 600px) {
        font-size: 4.5vw;
    }
    }
    @media (max-width: 600px) {
        background-color: rgb(223, 128, 142);
        color: white;
        padding: 40px;
    }
  }

`;

export default StyledAboutBody;