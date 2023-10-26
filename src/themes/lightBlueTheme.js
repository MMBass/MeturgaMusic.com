import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
      main: '#00AECC',
      light: '#E5E5E5',
      dark: '#0092AB'
    },
    secondary: {
      main: '#FDFEFF',
      dark: '#002457',
      light: '#472E2D'
    },
  },
});