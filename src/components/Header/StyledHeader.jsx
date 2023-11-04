import { styled } from '@mui/material/styles';
import Header from './Header';

const StyledHeader = styled(Header)`
  background-color: ${props => props.theme.palette.primary.dark};
  color: ${props => props.theme.palette.secondary.dark};
  z-index: 2000;

  @media (max-width: 600px) {
    background-color: ${props => props.theme.palette.primary.main};
  }

  a{
    color: ${props => props.theme.palette.primary.main};
    &hover{
      color: #8e8b8b;
    }

    #h2-part1, #h2-part2{
      font-weight: 600;
    }

    #h2-part1{
      color:  ${props => props.theme.palette.secondary.dark};
    }

    #h2-part2{
      color:  ${props => props.theme.palette.secondary.light};
    }
  }
  
  button{
    color: ${props => props.theme.palette.secondary.dark};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .burger-icon{
    margin-top: 2px;
  }

  .mui-search-icon-wrapper{
    margin-inline-end: 10px;

    .mui-search-icon{
      margin-top: 5px;
    }
  }

  #outlined-search, #outlined-search span{
   color: #3a3a3a !important;
  }

  .collapse-search-box, .collapse-search-box .MuiCollapse-wrapperInner {
    width: 100%;
    max-width: 420px;
  }

  .error-alert{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    border-radius: unset;

    button{
      color: rgb(95, 33, 32);
    }
  }

  .MuiBadge-anchorOriginTopRightRectangular{
    background-color: white;
  }
`;

export default StyledHeader;