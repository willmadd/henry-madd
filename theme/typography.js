import { createTheme } from "@mui/material/styles";
import theme from "./breakpoints";
import {black} from "./colors";

const themeTypography = createTheme({
  typography: {
    fontFamily: "'Poiret One', cursive",
    color: black[400],
    h1: {
      fontFamily: "'Poiret One', cursive",
      letterSpacing: "-1%",
      fontWeight: 1000,
      fontSize: 32,
      lineHeight: 4 / 3,
      color: '#E3DCD2',
      [theme.breakpoints.up("md")]: {
        fontSize: 80,
        lineHeight: 6 / 5,
      },
    },
    h2: {
      fontFamily: "'Poiret One', cursive",
      letterSpacing: "-1%",
      fontSize: 28,
      fontWeight: 800,
      lineHeight: 29 / 21,
      color: '#E3DCD2',
      [theme.breakpoints.up("md")]: {
        fontSize: 48,
        lineHeight: 6 / 5,
      },
    },
    h3: {
      fontFamily: "'Poiret One', cursive",
      fontSize: 32,
      letterSpacing: "-1%",
      fontWeight: 400,
      lineHeight: 5 / 4,
      color: '#E3DCD2',
      [theme.breakpoints.up("md")]: {
        fontSize: 38,
        lineHeight: 6 / 5,
        letterSpacing: "-1%",
      },
    },
    h4: {
      fontFamily: "'Poiret One', cursive",
      fontSize: 20,
      lineHeight: 8 / 5,
      color: black[400],
      [theme.breakpoints.up("md")]: {
        fontSize: 24,
        lineHeight: 8 / 6,
      },
    },
    h5: {
      fontFamily: "'Poiret One', cursive",
      fontSize: 18,
      lineHeight: 16 / 9,
      fontWeight: 700,
      [theme.breakpoints.up("md")]: {
        fontSize: 20,
        lineHeight: 8 / 5,
      },
    },
    h6: {
      fontFamily: "'Poiret One', cursive",
      fontSize: 16,
      lineHeight: 16 / 9,
      fontWeight: 700,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        lineHeight: 8 / 5,
      },
    },
    body1: {
      color: 'photo.main',
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 14,
      lineHeight: 12 / 7,
      fontWeight: 400,
      color: '#E3DCD2',
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        lineHeight: 8 / 6,
        letterSpacing: 0.25
      },
    },

    label: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 14,
      lineHeight: 12 / 7,
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        lineHeight: 8 / 6,
      },
    },
    caption: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 12,
      lineHeight: 4 / 3,
      fontWeight: 400,
    },
    strong: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 16,
      lineHeight: 8 / 6,
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      fontFamily: "'Poiret One', cursive",
    },
  },
});

export default themeTypography;
