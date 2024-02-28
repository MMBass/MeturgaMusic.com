import { styled } from '@mui/material/styles';
import AboutBody from './AboutBody';

const StyledAboutBody = styled(AboutBody)`
  width: 100%;
  font-size: 2vw;
  font-weight: 400;
  padding-top: 50px;
  font-family: 'Assistant','Roboto', 'sans-serif';
  text-align: center;

  @media (max-width: 600px) {
    padding-top: 0px;
    /* font-size: 4.6vw; */
    font-size: 5.4vw;
  }

  .even-item, .not-even-item{
    margin: 5px 0;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.palette.secondary.light};

    @media (max-width: 600px) {
      text-align: center;
      margin-bottom: 0px;
    }
  }
  
  .even-item{
    flex-direction: row-reverse;
  
    .strings-item{
      text-align: end;
    }

    @media (max-width: 600px) {
      .strings-item{
        text-align: center;
      }
    }

    img{
      transform: perspective(1000px) rotateY(15deg);

      box-shadow: 18px 13px 4px #4949494a;
      @media (max-width: 600px) {
        box-shadow: 12px 10px 4px #4949494a;
      }
    }
  }

  .not-even-item{
    @media (max-width: 600px) {
      .strings-item{
        text-align: center;
      }
    }

    img{
      @supports not (-webkit-touch-callout: none) {
        transform: perspective(1000px) rotateY(-15deg);
      }


      box-shadow: -18px 13px 4px #4949494a;
      @media (max-width: 600px) {
        box-shadow: -12px 10px 4px #4949494a;
      }
    }
  }

  .about-body-top{
    text-align: start;

    @media (max-width: 600px) {
      margin-top: 30px;
      height: 30px;
    }

    .remove-icon{
      padding: 3px;
      font-size: medium;
      color: #9f9f9f5d;

      :hover{
        color: #2b2b2bef;
      }
    }
  }
  
  .strings-item{
    text-align: start;
    /* text-shadow: 0px 1px 2px rgb(159, 159, 159); */
    text-shadow: rgb(159, 159, 159) 0.5px 0.5px 1px;
    
    @media (max-width: 600px) {
      padding: 40px 40px 70px 40px;
    }

    .about-header{
      margin-bottom: 5px;
      font-size: 3.6vw;
      font-weight: 300;
      color: ${props => props.theme.palette.primary.dark};
      @media (max-width: 600px) {
        /* font-size: 5.8vw; */
        font-size: 6.8vw;
      }
    }

    .about-string{
      width: 100%;
      height: 100%;

      p{
        color: ${props => props.theme.palette.primary.main};
        margin: auto;
        padding: 15px;
        width: 80%;
      }
    }

    .about-bottom{
      padding-top: 15px;
      font-weight: 500;
      color: ${props => props.theme.palette.secondary.contrastText};
      @media (max-width: 600px) {
        font-size: 5vw;
      }
    }
  }

  .img-item{
    height: 100%;
    padding: 0 15px;
    @media (max-width: 600px) {
      min-height: 35vh;
      padding-top: 0;
      margin: 0;
    }

    .img-container{
      padding: 15px 40px;
      display: flex;
      justify-content: center;
      height: 100%;

      background: ${props =>
    props.theme.mode === "dark"
      ? '#303030'
      : `linear-gradient( to left, rgb(237, 203, 203) 20%, rgb(223, 128, 142) 100%)`
  //: `radial-gradient(circle, #edcbcb 70%, rgb(223, 128, 142) 100%)`
  };
      
      border-radius: 8px;

      @media (max-width: 600px) {
        padding: 35px 4px;
      }
    }

    img{
      margin: auto;
      width: 95%;
      height: auto;
      border-radius: 5px;
      @media (max-width: 600px) {
        width: 80%;
        height: auto;
        max-height: 90%;
      }
    }
  }

  .about-footer{
    padding: 60px;
    /* text-shadow: 0px 1px 2px rgb(159, 159, 159); */
    text-shadow: rgb(159, 159, 159) 0.5px 0.5px 1px;

    p{
      font-size: 2vw;
      @media (max-width: 600px) {
        font-size: 4.3vw;
      }
    }
    @media (max-width: 600px) {
        background-color: ${props => props.theme.palette.primary.main};
        color: white;
        padding: 40px;
    }
  }

`;

export default StyledAboutBody;