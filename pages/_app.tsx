import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/index.css";
import connect from "middleware/mongo";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
