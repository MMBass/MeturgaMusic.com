import { styled } from '@mui/material/styles';
import SearchBar from './SearchBar';

const StyledSearchBar = styled(SearchBar)`
  *, ::before,::after{
    z-index: 2;
    background-color: '#ffffff0';
  }

  .main-input{ 
      direction: rtl; // will turn to LTR, mui settings replace to opposite
      margin: auto;
   
      width: 450px;
      border-color: ${props => props.theme.palette.primary.dark};

      @media (max-width: 600px) {
        width: 95%;
      }

      input, fieldset, label{
        color: ${props => props.theme.palette.primary.main + "!important"};
        border-color: ${props => props.theme.palette.secondary.contrastText + "!important"};

        font-weight: 600;
        border-width: medium;
      }
    }

  .top-input{
      min-width: 100%;
      direction: rtl; // will turn to LTR, mui settings replace to opposite
      margin: auto;

      border-color: ${props => props.theme.palette.primary.dark};

      input, fieldset, label{
        color: white !important;
        border-color: white !important;

        font-weight: 600;
        border-width: medium;
      }
  }
`;

export default StyledSearchBar;