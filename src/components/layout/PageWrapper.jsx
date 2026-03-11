import React from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./Header";
// import Footer from "./Footer"; // REMOVED - Footer belongs in App.jsx only
import FloatingWhatsApp from "../ui/FloatingWhatsApp";

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    // Added 'relative' and 'overflow-x-hidden' to prevent horizontal scroll issues on mobile
    <div className="relative min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-[#050505] dark:text-white transition-colors duration-300 overflow-x-hidden">
      
      {/* FIX: Remove <Header /> from here! 
          It is already in App.jsx. Having it here causes a "Double Header" 
          and breaks mobile touch events during navigation. */}

      {/* 1. Changed pt-24 on mobile, pt-32 on desktop.
          2. Removed 'px-6' to let sections stretch full-width.
      */}
      <main className="flex-grow pt-24 md:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            /* FIX: Ensure the animated div doesn't trap clicks */
            className="relative z-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer removed from here - it stays in App.jsx */}
      
      <FloatingWhatsApp />
    </div>
  );
};

export default PageWrapper;