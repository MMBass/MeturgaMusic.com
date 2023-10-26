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
      main: '#darkgray', // light red/pink
      light: '#white', // white for headers
      dark: '#black', // medium red
      contrastText: '#white' // med gray - gray


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
      main: '#42B983', // light orange
      dark: '#262626', // darkgray - black
      light: '#fcfcfc', // darker white
      contrastText: '#C0A8E6' // purple
    },
  },
});