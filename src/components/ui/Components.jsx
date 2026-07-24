import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

export function GlassPanel({ children, className = "", active = false, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, zIndex: 10 }}
      className={`glass-panel rounded-xl ${active ? "active-panel" : ""} ${className}`}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Function to handle animating numbers dynamically
function AnimatedNumber({ value }) {
  const numericMatch = String(value).match(/[\d,.]+/);
  if (!numericMatch) return <span>{value}</span>;
  
  const numStr = numericMatch[0];
  const num = parseFloat(numStr.replace(/,/g, ''));
  const prefix = String(value).split(numStr)[0];
  const suffix = String(value).split(numStr)[1];
  
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const controls = animate(0, num, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        const isDecimal = numStr.includes('.');
        let formatted = isDecimal ? v.toFixed(1) : Math.round(v).toString();
        if (numStr.includes(',')) {
          formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        setDisplayValue(formatted);
      }
    });
    return () => controls.stop();
  }, [num, numStr]);

  return <span>{prefix}{displayValue}{suffix}</span>;
}

export function MetricCard({ title, value, change, trend = "up", icon, colorClass, active = false, pulse = false, delay = 0 }) {
  const colorMap = {
    secondary: { bg: "bg-secondary", text: "text-secondary", shadow: "shadow-[0_0_8px_rgba(0,241,254,0.8)]" },
    tertiary: { bg: "bg-tertiary", text: "text-tertiary", shadow: "shadow-[0_0_8px_rgba(79,219,200,0.8)]" },
    error: { bg: "bg-error", text: "text-error", shadow: "shadow-[0_0_8px_rgba(255,180,171,0.8)]" },
    "secondary-fixed": { bg: "bg-secondary-fixed", text: "text-secondary-fixed", shadow: "shadow-[0_0_8px_rgba(116,245,255,0.8)]" },
    "secondary-container": { bg: "bg-secondary-container", text: "text-secondary-container", shadow: "shadow-[0_0_8px_rgba(0,241,254,0.8)]" }
  };
  
  const c = colorMap[colorClass] || colorMap.secondary;

  return (
    <GlassPanel delay={delay} active={active} className="p-6 relative overflow-hidden group hover:cyan-glow transition-all duration-300">
      <div className={`absolute top-0 left-0 w-1 h-full ${c.bg} transition-all duration-300 group-hover:w-2`}></div>
      <div className="absolute top-0 right-0 p-4">
        {pulse && <div className={`w-2 h-2 rounded-full ${c.bg} pulse-dot`}></div>}
      </div>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          <motion.span 
            className={`material-symbols-outlined ${c.text}`}
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            {icon}
          </motion.span> 
          {title}
        </div>
        {!pulse && <div className={`w-2 h-2 rounded-full ${c.bg} ${c.shadow} group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-300`}></div>}
      </div>
      <div className="font-display-lg text-display-lg text-on-surface mb-2">
        <AnimatedNumber value={value} />
      </div>
      <div className={`flex items-center gap-2 font-label-sm text-label-sm ${trend === 'up' ? c.text : 'text-error'}`}>
        <motion.span 
          initial={{ y: trend === 'up' ? 10 : -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.8, duration: 0.5 }}
          className="material-symbols-outlined text-[16px]"
        >
          {trend === 'up' ? 'arrow_upward' : 'arrow_downward'}
        </motion.span> 
        {change}
      </div>
    </GlassPanel>
  );
}
