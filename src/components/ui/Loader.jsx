"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Keep loader for a short duration
    const timer = setTimeout(() => {
      setLoading(false);
      // Restore scroll when loading finishes
      document.documentElement.style.overflow = "";
      document.body.style.overflow = ""; 
    }, 2500);
    
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-100 bg-[#050505] flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
        >
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Elegant SVG Draw Animation (Hexagon) */}
            <motion.svg 
              width="100" 
              height="100" 
              viewBox="0 0 100 100"
              className="mb-8"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <motion.polygon
                points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5"
                fill="none"
                stroke="#FB64B6"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.polygon
                points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 2, ease: "easeInOut", times: [0, 0.5, 1] }}
                style={{ filter: "blur(4px)" }}
              />
              {/* Inner Pulsing Core */}
              <motion.circle
                cx="50"
                cy="50"
                r="6"
                fill="#ffffff"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.5] }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              />
            </motion.svg>
            
            {/* Expanding Line */}
            <motion.div 
              className="h-px bg-white/10 w-[150px] relative overflow-hidden"
            >
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#FB64B6]"
              />
            </motion.div>
            
            {/* Minimalist Loading Text */}
            <motion.div 
              className="mt-6 flex space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {"INITIALIZING".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.05, duration: 0.5 }}
                  className="text-white/70 font-mono text-xs uppercase tracking-[0.2em]"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
