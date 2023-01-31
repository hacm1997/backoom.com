import "../styles/globals.css";
import type { AppProps } from "next/app";
import "boxicons/css/boxicons.min.css";
import { useGlobalContext } from "../business/content/context/global_var";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}
