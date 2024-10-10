import { styled } from '@mui/material/styles';
import WishlistPage from './WishlistPage';

const StyledWishlistPage = styled(WishlistPage)`
  min-height: 70vh;

  p{
    color: ${props => props.theme.palette.secondary.dark};
  }

  svg{
    color: ${props => props.theme.palette.primary.contrastText};
  }

  .remove-wish-icon{
    color: #b6b6b6;
  }
`;

export default StyledWishlistPage;