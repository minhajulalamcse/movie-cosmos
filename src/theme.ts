import { createTheme } from '@mui/material'
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#13315c',
      light: '#134074',
      dark: '#0b2545',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f6c71a',
      light: '#fed230',
      dark: '#d9ab00',
      contrastText: '#000000'
    }
  },
  typography: {
    fontFamily: "'Inter',sans-serif"
  }
})
