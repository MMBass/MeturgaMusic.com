import { styled } from '@mui/material/styles';
import Footer from './Footer';

const StyledFooter = styled(Footer)`
  /* color: ${props => props.theme.palette.primary.contrastText}; */
  background-color: ${props => props.theme.palette.primary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  a{
    color: unset;
  }

  li span{
    color: white;
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: ${props => props.theme.palette.secondary.dark};
    color: white;
    margin: unset;
  }

  .built-by{
    color: white;
  }

`;

export default StyledFooter;