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
      dark: '#F43C6A', // medium red
      contrastText: '#555555' // med gray - gray


      // colors from g search:
      // DF808E // light red/pink
      // CFECFC // light blue 
      // CDE5CA // light green
      // E8E8E8 // light gray

       // colors from vue site :
      // 3C8772 // dark turkiz
      // 42B983 // medium turkiz 
      // 223546 // dark blue for headers / text
      // 767676 // light gray for text
      // F02D65 // dark pink for text in footer??
    },
    secondary: {
      main: '#42B983', // light green (why green?)
      dark: '#262626', // darkgray - black
      light: '#fcfcfc', // darker white
      contrastText: '#C0A8E6' // purple
    },
  },
});