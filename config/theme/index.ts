import { createMuiTheme } from '@material-ui/core/styles'

const overrides = {
  MuiTypography: {
    h1: {
      letterSpacing: '-0.0625rem',
    },
    h2: {
      letterSpacing: '-0.0625rem',
    },
  }
}

const theme = createMuiTheme({
  overrides,
  palette: {
    primary: {
      main: '#72BF00',
      dark: '#2E6A00',
      light: '#78AF01',
      contrastText: "#fff"
    },
    secondary: {
      main: '#002B3E',
      dark: '#001728',
      light: '#2F5166',
      contrastText: "#fff"
    },
    text: {
      secondary: '#84A6BE',
    },
    background: {
      default: '#002B3E',
      paper: '#2F5166'
    },
    type: 'dark'
  },
  typography: {
    fontSize: 16
  }
})

export default theme