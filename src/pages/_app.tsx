import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-screen flex-1 flex justify-center items-center bg-white">
      <Component {...pageProps} />
    </div>
  );
}
