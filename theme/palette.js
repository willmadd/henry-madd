import { createTheme } from '@mui/material/styles';
import { black, orange, red } from './colors';
import blue from './colors/colors.blue';
import green from './colors/colors.green';
import grey from './colors/colors.grey';

const themePalette = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: blue[200],        //#d0ebf1,
      main: '#4A6163',         //#005072,
      dark: blue[800], 
      contrastText: blue[0]    //#FFFFFF        //#013A56,
    },
    secondary: {
      light: blue[100],        //#EFF8FA,
      main: blue[500],         //#0097BA
      dark: blue[600],         //#00526F
      contrastText: blue[0]    //#FFFFFF
    },
    action:{
      main:'#ef6368'
    },
    info:{
      main: '#FFC94B',
      contrastText: '#4A6163'    //#FFFFFF
    },
    tertiary:{
      light: green[300],       //#A5D867,
      main: green[500],        //#509e2f
      contrastText: blue[0]
    },
    background: {
      default: blue[100],      //#EFF8FA
      paper: blue[0],          //#FFFFFF
    },
    text: {
      primary: black[500],     //#121212
      secondary: blue[600],    //#005072
    },
    background:{
      // main:'#f5f1EA'
      main: '#F9FAFA'
    },
    info: {
      main: orange[500],       //#ed8b00
    },
    success: {
      main: green[500],        //#509e2f
    },
    dark:{
      main: blue[0],           //#FFFFFF
      contrastText: blue[600]  //#005072
    },
    divider: grey[200],        //#d1d3d4
    error: {
      main: red[500],          //#ed3900
    },
  },
});

export default themePalette;
