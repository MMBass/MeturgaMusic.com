import { styled } from '@mui/material/styles';
import Header from './Header';

const StyledHeader = styled(Header)`
      z-index: 2000;

      a{
        #h2-part1, #h2-part2{
          font-weight: 600;
        }
      }
      
      button{
        color: ${props => props.theme.palette.secondary.dark};
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

        a{
          font-size: small;
          text-decoration: underline !important;
        }
      }

      .MuiBadge-anchorOriginTopRightRectangular{
        background-color: white;
      }
`;

export default StyledHeader;