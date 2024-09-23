import { createTheme } from '@mui/material/styles';

export const mainPinkTheme = createTheme({
  mode: 'light',
  direction: 'rtl',
  typography: {
    fontFamily: [
      'Assistant',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#DF808E', // light red/pink
      light: '#fff', // white for headers
      dark: '#dc7887', // medium red
      contrastText: '#555555' // med gray - gray
    },
    secondary: {
      main: '#fcfcfc', // darker white
      dark: '#262626', // darkgray - black
      light: '#fcfcfc', // darker white
      contrastText: '#C0A8E6' // purple
    },
  },
});