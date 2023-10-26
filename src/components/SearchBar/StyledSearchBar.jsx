import { styled } from '@mui/material/styles';
import SearchBar from './SearchBar';

const StyledSearchBar = styled(SearchBar)`

  .main-input{
    direction: rtl; // will turn to LTR, mui settings replace to opposite
  }

  *,::before,::after{
    z-index: 2;
    background-color: '#ffffff0';
  }

  input, fieldset, label{
    color: ${props => props.theme.palette.primary.main + "!important"};
    border-color: ${props => props.theme.palette.secondary.contrastText + "!important"};

    font-weight: 600;
    border-width: medium;
  }

`;

export default StyledSearchBar;