import { createTheme } from "@mui/material/styles";
import theme from "./breakpoints";

const themeTypography = createTheme({
  typography: {
    fontFamily: "'Orelega One', cursive",
    h1: {
      fontFamily: "'Orelega One', cursive",
      letterSpacing: "-1%",
      fontWeight: 400,
      fontSize: 32,
      lineHeight: 4 / 3,
      [theme.breakpoints.up("md")]: {
        fontSize: 80,
        lineHeight: 6 / 5,
      },
    },
    h2: {
      fontFamily: "'Orelega One', cursive",
      letterSpacing: "-1%",
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 29 / 21,
      [theme.breakpoints.up("md")]: {
        fontSize: 48,
        lineHeight: 6 / 5,
      },
    },
    h3: {
      fontFamily: "'Orelega One', cursive",
      fontSize: 32,
      letterSpacing: "-1%",
      fontWeight: 400,
      lineHeight: 5 / 4,
      [theme.breakpoints.up("md")]: {
        fontSize: 38,
        lineHeight: 6 / 5,
        letterSpacing: "-1%",
      },
    },
    h4: {
      fontFamily: "'Orelega One', cursive",
      fontSize: 20,
      lineHeight: 8 / 5,
      [theme.breakpoints.up("md")]: {
        fontSize: 24,
        lineHeight: 8 / 6,
      },
    },
    h5: {
      fontFamily: "'Orelega One', cursive",
      fontSize: 18,
      lineHeight: 16 / 9,
      fontWeight: 700,
      [theme.breakpoints.up("md")]: {
        fontSize: 20,
        lineHeight: 8 / 5,
      },
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 14,
      lineHeight: 12 / 7,
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        lineHeight: 8 / 6,
      },
    },

    label: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 14,
      lineHeight: 12 / 7,
      fontWeight: 400,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        lineHeight: 8 / 6,
      },
    },
    caption: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 12,
      lineHeight: 4 / 3,
      fontWeight: 400,
    },
    strong: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 16,
      lineHeight: 8 / 6,
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      fontFamily: "'Montserrat', sans-serif",
    },
  },
});

export default themeTypography;
