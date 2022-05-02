import { createTheme } from '@mui/material/styles';

import themePalette from './palette';
import themeTypography from './typography';
import themeBreakpoints from './breakpoints';
// import themeComponents from './theme.components';

const theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  palette: themePalette.palette,
  typography: themeTypography.typography,
  breakpoints: themeBreakpoints.breakpoints,
//   components: themeComponents.components,
});

export default theme;
