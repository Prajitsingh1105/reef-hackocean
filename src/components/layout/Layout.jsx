import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex bg-background text-on-surface font-body-md min-h-screen">
    
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="bg-grid opacity-30 h-[200vh] -mt-[50vh]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
      </div>

      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="flex-1 md:ml-72 flex flex-col min-h-screen relative w-full max-w-full overflow-hidden">
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        
        <div className="flex-1 overflow-y-auto mt-20 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
