import NavBar from "@/components/layout/NavBar";
import Splash from "@/components/splash/Splash";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  // todo: show splash only on first load
  return (
    <Splash>
      <NavBar />
      <Component {...pageProps} />
    </Splash>
  );
}
