import type { AppProps } from "next/app";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
