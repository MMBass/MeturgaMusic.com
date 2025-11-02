import { styled } from '@mui/material/styles';
import BuyMeCoffeeBtn from './BuyMeCoffeeBtn';

const StyledBuyMeCoffeeBtn = styled(BuyMeCoffeeBtn)`

  @media (max-width: 600px) {
    display: none;
  }
    
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffdd00a9;
  color: #000000;
  padding: 9px 16px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #FFE033;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default StyledBuyMeCoffeeBtn;