import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", icon: "dashboard", label: "Mission Control" },
  { path: "/fleet", icon: "directions_boat", label: "Fleet Status" },
  { path: "/sonar", icon: "radar", label: "Sonar Matrix" },
  { path: "/threats", icon: "warning", label: "Threat Alerts" },
  { path: "/analytics", icon: "analytics", label: "Data Analytics" },
  { path: "/biodiversity", icon: "diversity_1", label: "Biodiversity" },
  { path: "/volunteers", icon: "group", label: "Volunteers" },
  { path: "/reports", icon: "description", label: "Reports" },
  { path: "/settings", icon: "settings", label: "Settings" },
];

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
      <nav className={`fixed flex flex-col h-full py-margin-desktop overflow-y-auto bg-surface-container-low dark:bg-surface-container-lowest text-secondary dark:text-secondary-fixed w-72 left-0 top-0 border-r border-outline-variant/30 backdrop-blur-xl bg-surface-container/70 shadow-2xl z-50 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <div className="px-6 mb-8 flex items-center gap-4">
        <motion.img 
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          alt="REEF Logo" 
          className="w-12 h-12 object-cover rounded-md border border-secondary/30 shadow-[0_0_10px_rgba(0,241,254,0.3)]" 
          src="/reef_logo.png" 
        />
        <div>
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-headline-lg text-headline-lg font-bold text-secondary tracking-tighter"
          >
            REEF
          </motion.h1>
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase"
          >
            Deepsea Guardian
          </motion.div>
        </div>
      </div>

      <div className="flex-1 space-y-1 mt-4 relative">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `relative flex items-center px-6 py-3 gap-3 font-label-md text-label-md transition-colors ${
                isActive
                  ? "text-secondary"
                  : "text-on-surface-variant hover:text-secondary-container"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="sidebarActiveIndicator"
                    className="absolute inset-0 bg-secondary/10 border-l-4 border-secondary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span 
                  className="material-symbols-outlined relative z-10" 
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                <span className="relative z-10">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="px-6 mt-8">
        <div className="font-label-sm text-label-sm text-on-surface-variant mb-4 uppercase tracking-wider">Reef Fleet Status</div>
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between p-3 glass-pod rounded-lg cursor-pointer hover:border-secondary transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary pulse-dot">settings_remote</span>
              <div>
                <div className="font-label-md text-label-md text-on-surface">Drone Alpha</div>
                <div className="font-label-sm text-label-sm text-tertiary">Active</div>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </motion.div>
          {/* Add more fleet status items here if needed */}
        </div>
      </div>
    </nav>
    </>
  );
}
