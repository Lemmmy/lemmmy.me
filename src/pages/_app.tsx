import "../styles/globals.css";
import type { AppProps } from "next/app";

function MainApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MainApp;
