"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Splash({ children }: { children: React.ReactNode }) {
  const [showLogo, setShowLogo] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLogo(true), 2000), // A fadeout, B fadein
      setTimeout(() => setShowChildren(true), 4000), // B fadeout
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="h-screen w-screen flex-1 flex justify-center items-center bg-black">
      <AnimatePresence mode="sync">
        {!showLogo && (
          <motion.div
            key="A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: "absolute", top: 0, left: 0 }}
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
            key="B"
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
        {showChildren && children}
      </AnimatePresence>
    </div>
  );
}
