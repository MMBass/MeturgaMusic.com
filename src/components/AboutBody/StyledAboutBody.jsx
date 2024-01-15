import { styled } from '@mui/material/styles';
import AboutBody from './AboutBody';

const StyledAboutBody = styled(AboutBody)`
  width: 100%;
  margin: 0 0 60px 0;
  font-size: 2vw;
  font-family: 'Assistant','Roboto', 'sans-serif';
  text-align: center;

  @media (max-width: 600px) {
    font-size: 4.5vw;
  }

  .even-item{
    flex-direction: row-reverse;
    display: flex;
    align-items: center;
  }

  .even-item, .not-even-item{
    min-height: 80vh;
    background-color: ${props => props.theme.palette.secondary.light};
  }

  .about-body-top{
    text-align: start;

    @media (max-width: 600px) {
      height: 30px;
    }

    .remove-icon{
      padding: 3px;
      font-size: medium;
      color: ${props => props.theme.palette.secondary.dark};

      :hover{
        color: #2b2b2bef;
      }
    }
  }
  
  .strings-item{
    text-align: center;

    @media (max-width: 600px) {
      padding: 8px 40px 40px 40px;
    }

    .about-header{
      margin-bottom: 5px;
      font-size: 4vw;
      @media (max-width: 600px) {
        font-size: 6vw;
      }
    }

    .about-strings{
      width: 100%;
      height: 100%;
      
      p{
        margin: auto;
        padding: 15px;
        width: 80%;
      }
    }

    .about-bottom{

    }

    
  }

  .img-item{
    height: 100%;
    padding: 0 30px ;
    @media (max-width: 600px) {
      min-height: 35vh;
      padding-top: 0;
      margin: 0;
    }

    .img-container{
      padding: 15px;
      display: flex;
      justify-content: center;
      height: 100%;
      background: radial-gradient(circle, #edcbcb 60%, rgb(223, 128, 142) 100%);
      border-radius: 13px;
    }

    img{
      margin: auto;
      width: 95%;
      height: auto;
      border-radius: 5px;
      @media (max-width: 600px) {
        width: 99%;
        height: auto;
        max-height: 90%;
        /* max-height: 200px; */
      }
    }
  }

  .about-bottom{
    padding-top: 15px;
      font-size: 1.7vw;
      @media (max-width: 600px) {
        font-size: 3.5vw;
      }
  }

  .about-footer{
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