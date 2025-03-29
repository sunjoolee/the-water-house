"use client"

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import "@/styles/globals.css";
import Lenis from "lenis";
import type { AppProps } from "next/app";
import { Component, createContext, useContext, useEffect, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SplashContext = createContext<{
  isOnSplash: boolean;
  setIsOnSplash: (isOnSplash: boolean) => void;
}>({
  isOnSplash: true,
  setIsOnSplash: () => { },
});

export default function App({ Component, pageProps }: AppProps) {

  // init lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // 부드러움 정도, 0~1 (낮을수록 부드러움)
      duration: 1.2, // scrollTo animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Lenis 스크롤 이벤트를 GSAP ScrollTrigger에 연결
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  // splash context
  const [isOnSplash, setIsOnSplash] = useState(true);

  return (
    <SplashContext.Provider value={{ isOnSplash, setIsOnSplash }}>
      <RootLayout {...pageProps} Component={Component} />
    </SplashContext.Provider>
  );
}

const RootLayout = ({ Component, pageProps }: AppProps) => {
  const { isOnSplash } = useContext(SplashContext);

  // hide nav bar and footer on splash
  return (
    <div className="overflow-y-auto scrollbar-hide overflow-x-hidden">
      {!isOnSplash && <NavBar />}
      <Component {...pageProps} />
      {!isOnSplash && <Footer />}
    </div>
  );
};
