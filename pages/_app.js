import "../styles/globals.css";
import { MainContext } from "../context";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
