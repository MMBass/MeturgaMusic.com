import { styled } from '@mui/material/styles';
import Footer from './Footer';

const StyledFooter = styled(Footer)`
  color: ${props => props.theme.palette.primary.light};
  background-color: ${props => props.theme.palette.primary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;

  svg{
    font-size: 17px;
    color: ${props => props.theme.palette.primary.light};
  }

  span{
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: white;
    margin: unset;
  }

  .install-section{
    text-align: center;
  }
`;

export default StyledFooter;