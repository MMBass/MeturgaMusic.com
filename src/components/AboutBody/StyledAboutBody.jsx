import { styled } from '@mui/material/styles';
import utils from '@/utils';
import AboutBody from './AboutBody';

const StyledAboutBody = styled(AboutBody)`
  width: 100%;
  font-size: 2vw;
  font-weight: 600;
  padding-top: 50px;
  font-family: 'Assistant','Roboto', 'sans-serif';
  color: #6c6c6c;
  @media (max-width: 600px) {
    padding-top: 0px;
    padding-bottom: 25px;
    /* font-size: 4.6vw; */
    font-size: 4.6vw;
  }

  .even-item, .not-even-item{
    width: unset;
    margin: 5px 7px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.palette.secondary.light};

    @media (max-width: 600px) {
      border-radius: 10px;
      border: 2px solid #e5e5e5;
      background: #80808017;

      margin-top: 100px;
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
      ${!utils.isApple() && `transform: perspective(1000px) rotateY(15deg);`}

      box-shadow: 18px 13px 4px #4949494a;
      @media (max-width: 600px) {
        box-shadow: 12px 10px 4px #4949494a;
      }
    }
  }

  .not-even-item{

    img{
      ${!utils.isApple() && `transform: perspective(1000px) rotateY(-15deg);`}

      box-shadow: -18px 13px 4px #4949494a;
      @media (max-width: 600px) {
        box-shadow: -12px 10px 4px #4949494a;
      }
    }
  }

  .about-body-top{
    text-align: start;

    @media (max-width: 600px) {
      text-align: center;
      margin-top: 10px;
      height: 30px;
    }

    .remove-icon{
      padding: 3px;
      font-size: small;
      color: #9f9f9f5d;

      :hover{
        color: #2b2b2bef;
      }
    }
  }
  
  .strings-item{
    text-align: start;
    
    @media (max-width: 600px) {
      text-align: center;
      padding: 40px 40px 70px 40px;
    }

    .about-header{
      margin-bottom: 5px;
      font-size: 3.6vw;
      font-size: 4vw;
      font-weight: 400;
      color: ${props => props.theme.palette.primary.dark};
      @media (max-width: 600px) {
        font-size: 5.8vw;
      }
    }

    .about-string{
      width: 100%;
      height: 100%;

      p{
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
      margin-top: -130px;
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
        background: unset;
        padding: 35px 4px;
      }
    }

    img{
      margin: auto;
      width: 95%;
      height: auto;
      border-radius: 5px;
      @media (max-width: 600px) {
        width: 88%;
        height: auto;
        max-height: 90%;

        border: 2px solid;
        border-color: ${props => props.theme.mode === "dark"?'#303030':'rgb(213 121 135 / 9%)'};}
    }
  }

  .about-footer{
    text-align: center;
    padding: 80px;

    p{
      font-size: 2.8vw;
      @media (max-width: 600px) {
        font-size: 4.3vw;
      }
    }
    @media (max-width: 600px) {
        margin: 3px 15px;
        border-top: 2px solid #e5e5e5;
        padding: 40px;
    }
  }

`;

export default StyledAboutBody;