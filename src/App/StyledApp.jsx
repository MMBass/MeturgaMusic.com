import { styled } from '@mui/material/styles';

import App from './App';

const StyledApp = styled(App)`
  height: fit-content;
  min-height: 700px;

  @media (max-width: 600px) {
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
}`;

export default StyledApp;