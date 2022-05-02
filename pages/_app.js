import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import GlobalLayout from "../components/GlobalLayout";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalLayout>
      <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  );
}

export default MyApp;
