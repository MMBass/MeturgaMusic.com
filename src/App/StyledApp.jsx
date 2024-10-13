import { styled } from '@mui/material/styles';

import App from './App';

const StyledApp = styled(App)`
  height: fit-content;
  min-height: 700px;

  main{
    max-width: 1300px;
    margin: auto;
  }

  @media (max-width: 600px) {
    /* .desktop-mini-drawer{
        display: none;
    } */

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
}`;

export default StyledApp;