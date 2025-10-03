import React, { ReactNode } from "react";
import Header from "./Header/Header";
import { Michroma } from "next/font/google";
import Footer from "./Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Micorma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

interface LayoutProps {
  children: ReactNode;
}

const curtainVariants = {
 hidden: { clipPath: "circle(0% at 50% 50%)" },
  enter: { clipPath: "circle(150% at 50% 50%)" },
  exit: { clipPath: "circle(0% at 50% 50%)" },
};



const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div className={Micorma.className}>
      <AnimatePresence>
        <div className="px-4 min-h-screen flex flex-col bg-black">
            <Header />
          <motion.div
            key={pathname} // Important for triggering animation on route change
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={curtainVariants}
            transition={{ duration: 0.5 }}
          >
            {/* make main a flex column so child can grow */}
            <main className="flex-grow flex flex-col px-4">{children}</main>
          </motion.div>
            <Footer />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
