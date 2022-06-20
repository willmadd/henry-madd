import { createTheme } from '@mui/material/styles';

const themeBreakpoints = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        mdl: 1296,
        xl: 1536,
      },
    },
  });

  export default themeBreakpoints