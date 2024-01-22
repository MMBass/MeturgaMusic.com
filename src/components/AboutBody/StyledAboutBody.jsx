import { styled } from '@mui/material/styles';
import AboutBody from './AboutBody';

const StyledAboutBody = styled(AboutBody)`
  width: 100%;
  font-size: 2vw;
  font-weight: 300;
  padding-top: 50px;
  font-family: 'Assistant','Roboto', 'sans-serif';
  text-align: center;

  @media (max-width: 600px) {
    font-size: 4.6vw;
  }

  .even-item, .not-even-item{
    margin: 5px 0;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.palette.secondary.light};

    @media (max-width: 600px) {
      background-color: antiquewhite;
      text-align: center;
      margin-bottom: 0px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; 
    }
  }
  
  .even-item{
    flex-direction: row-reverse;
  
    .strings-item{
      text-align: end;
    }

    @media (max-width: 600px) {
      background-color: ${props => props.theme.palette.secondary.main === "#000" ? '#000' : 'aliceblue'};
      .strings-item{
        text-align: center;
      }
    }
  }

  .not-even-item{
    @media (max-width: 600px) {
      background-color: ${props => props.theme.palette.secondary.main === "#000" ? '#000' : 'antiquewhite'};
      .strings-item{
        text-align: center;
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
      color: ${props => props.theme.palette.secondary.dark};

      :hover{
        color: #2b2b2bef;
      }
    }
  }
  
  .strings-item{
    text-align: start;
    @media (max-width: 600px) {
      padding: 8px 40px 70px 40px;
    }

    .about-header{
      margin-bottom: 5px;
      font-size: 3.6vw;
      font-weight: 300;
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
      font-weight: 300;
      
      @media (max-width: 600px) {
        font-size: 5vw;
      }
    }
  }

  .img-item{
    height: 100%;
    padding: 0 30px;
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
        props.theme.palette.secondary.main === "#000"
          ? '#303030'
          : `radial-gradient(circle, #edcbcb 60%, rgb(223, 128, 142) 100%)`
      };
      border-radius: 13px;

      @media (max-width: 600px) {
        background: unset;
        padding: 15px 4px;
      }
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
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
  }

  .about-footer{
    padding: 60px;
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