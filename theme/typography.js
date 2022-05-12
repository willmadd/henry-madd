import { createTheme } from "@mui/material/styles";
import theme from "./breakpoints";
import {black} from "./colors";

const themeTypography = createTheme({
  typography: {
    fontFamily: "'Faustina', serif",
    color: black[400],
    h1: {
      fontFamily: "'Faustina', serif",
      letterSpacing: "-1%",
      fontWeight: 400,
      fontSize: 32,
      lineHeight: 4 / 3,
      color: black[400],
      [theme.breakpoints.up("md")]: {
        fontSize: 80,
        lineHeight: 6 / 5,
      },
    },
    h2: {
      fontFamily: "'Faustina', serif",
      letterSpacing: "-1%",
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 29 / 21,
      color: black[400],
      [theme.breakpoints.up("md")]: {
        fontSize: 48,
        lineHeight: 6 / 5,
      },
    },
    h3: {
      fontFamily: "'Faustina', serif",
      fontSize: 32,
      letterSpacing: "-1%",
      fontWeight: 400,
      lineHeight: 5 / 4,
      color: black[400],
      [theme.breakpoints.up("md")]: {
        fontSize: 38,
        lineHeight: 6 / 5,
        letterSpacing: "-1%",
      },
    },
    h4: {
      fontFamily: "'Faustina', serif",
      fontSize: 20,
      lineHeight: 8 / 5,
      color: black[400],
      [theme.breakpoints.up("md")]: {
        fontSize: 24,
        lineHeight: 8 / 6,
      },
    },
    h5: {
      fontFamily: "'Faustina', serif",
      fontSize: 18,
      lineHeight: 16 / 9,
      fontWeight: 700,
      [theme.breakpoints.up("md")]: {
        fontSize: 20,
        lineHeight: 8 / 5,
      },
    },
    body1: {
      color: black[400],
      fontFamily: "'Poiret One', cursive",
      fontSize: 14,
      lineHeight: 12 / 7,
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        lineHeight: 8 / 6,
      },
    },

    label: {
      fontFamily: "'Poiret One', cursive",
      fontSize: 14,
      lineHeight: 12 / 7,
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        lineHeight: 8 / 6,
      },
    },
    caption: {
      fontFamily: "'Poiret One', cursive",
      fontSize: 12,
      lineHeight: 4 / 3,
      fontWeight: 400,
    },
    strong: {
      fontFamily: "'Poiret One', cursive",
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
