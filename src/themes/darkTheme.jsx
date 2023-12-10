import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  mode: 'dark',
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
      main: '#101418', // light red/pink
      light: '#fff', // white for headers
      dark: '#fff', // medium red
      contrastText: '#ebebeb' // med gray - gray
    },
    secondary: {
      main: '#ffffff',
      dark: '#fff', // darkgray - black
      light: '#101418', // darker white
      contrastText: '#fff' // purple
    },
  },
});