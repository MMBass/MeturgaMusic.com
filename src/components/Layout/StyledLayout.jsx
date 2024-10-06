import { styled } from '@mui/material/styles';
import Layout from './Layout';

const StyledLayout = styled(Layout)`
  height: fit-content;
  min-height: 700px;
  
  background-color: ${props => props.theme.palette.secondary.main};
  color: ${props => props.theme.palette.primary.contrastText};

  .page{
    min-height: 80vh;
  }

  .page-h1{
    padding: 0px 0px 0px 0px;
    font-size: 13vw;
    letter-spacing: -8px;
    font-weight: 100;
    color: ${props => props.theme.palette.primary.contrastText};
    
    @media (max-width: 600px) {
      margin-top: 0px;
      font-size: 13vw;
      letter-spacing: 0px;
      font-weight: 300;

      .h1-br{
        display: none;
      }
    }
  }

  a {
    text-decoration: none;
  }

  .main-linear{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
  }

  .main-alert{
    background-color: ${props => props.theme.palette.secondary.dark};
    color: ${props => props.theme.palette.primary.contrastText};
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
    padding: 20px;
  }
  
`;

export default StyledLayout;