import { styled } from '@mui/material/styles';
import BuyMeCoffeeBtn from './BuyMeCoffeeBtn';

const StyledBuyMeCoffeeBtn = styled(BuyMeCoffeeBtn)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffdd00a9;
  color: #282200aa;
  padding: 5px 12px 6px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  .support-btn-svg{
    padding: unset;
    margin: unset;
  }
  
  &:hover {
    background-color: #FFE033;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default StyledBuyMeCoffeeBtn;