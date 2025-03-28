import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// todo: add animated nav bar for home screen
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {!showMenu && (
        <div className="w-full h-16 flex flex-row justify-between items-center absolute top-0 left-0 z-50 px-6 py-20 backdrop-blur-sm">
          <Link href="/">
            <Image
              src="/layout/navbar_logo.png"
              alt="logo"
              width={350}
              height={16}
            />
          </Link>
          <Image
            src="/layout/navbar_icon.png"
            alt="menu"
            width={33}
            height={13}
            onClick={() => setShowMenu(true)}
          />
        </div>
      )}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="h-screen w-screen flex flex-col px-6 py-20 bg-black/50 opacity-50 text-white absolute top-0 left-0 z-50 backdrop-blur-sm"
          >
            <div className="flex flex-row justify-between items-center">
              <Image
                src="/layout/logo.png"
                alt="logo"
                width={265}
                height={20}
              />
              <Image
                src="/layout/navbar_close.png"
                alt="close"
                width={43}
                height={43}
                onClick={() => setShowMenu(false)}
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-10 mt-40">
              <Link href="/about" onClick={() => setShowMenu(false)}>
                About
              </Link>
              <Link href="/reservation" onClick={() => setShowMenu(false)}>
                Reservation
              </Link>
              <Link href="/contact" onClick={() => setShowMenu(false)}>
                Contact
              </Link>
              <Link href="/access" onClick={() => setShowMenu(false)}>
                오시시는 길
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
