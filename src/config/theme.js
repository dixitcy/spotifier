import {  createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: { main: '#234AFB' }, // Purple and green play nicely together.
      secondary: { main: '#FDF734' }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
  });

  export default theme;