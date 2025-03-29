"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SplashContext } from "@/pages/_app";

// todo: add nav bar animation
export default function Splash({ children }: { children: React.ReactNode }) {
  const { setIsOnSplash } = useContext(SplashContext);

  const [showLogo, setShowLogo] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    setIsOnSplash(true); // start splash
    const timers = [
      setTimeout(() => setShowLogo(true), 2000), // bg fadeout, logo fadein
      setTimeout(() => {
        setShowChildren(true)
        setIsOnSplash(false) // end splash
      }, 4000), // logo fadeout, children fadein
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="h-full w-screen flex-1 flex justify-center items-center bg-black">
      <AnimatePresence mode="sync">
        {!showLogo && !showChildren && (
          <motion.div
            key="splash_bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
          >
            <div className="h-screen w-screen flex-1 flex justify-center items-center bg-black">
              <Image
                src="/splash/splash_bg.png"
                alt="bg"
                width={253}
                height={509}
              />
            </div>
          </motion.div>
        )}
        {showLogo && !showChildren && (
          <motion.div
            key="splash_logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <div className="h-screen w-screen flex-1 flex justify-center items-center bg-black">
              <Image
                src="/splash/splash_logo.png"
                alt="logo"
                width={300}
                height={42}
              />
            </div>
          </motion.div>
        )}
        {showChildren && (<motion.div
          key="splash_children"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
