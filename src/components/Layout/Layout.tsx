import React, { ReactNode } from "react";
import Header from "./Header/Header";
import { Michroma } from "next/font/google";
import Footer from "./Footer/Footer";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/router";

const Micorma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

interface LayoutProps {
  children: ReactNode;
}

const cinematicTransition: any = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};

const curtainVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -20 },
  enter: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.8, x: 20 },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={`${Micorma.className} relative overflow-hidden bg-dark min-h-screen text-slate-200`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 z-100 origin-left"
        style={{ scaleX }}
      />

      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grow flex flex-col px-4 md:px-8"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};


export default Layout;
