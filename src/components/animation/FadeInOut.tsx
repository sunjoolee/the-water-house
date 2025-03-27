// components/FadeInOut.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FadeInOut({
  children,
  duration = 2000,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5, // fade in/out duration
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "2rem",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
