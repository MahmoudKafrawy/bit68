import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import "../styles/globals.css";
import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
