import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Splash from "@/components/splash/Splash";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  // todo: show splash only on first load
  return (
    <Splash>
      <div className="flex flex-col justify-start">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Splash>
  );
}
