"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [clickBlobs, setClickBlobs] = useState([]);
  const clickBlobNextId = useRef(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // SVG paths for the morphing liquid borders (280x300 canvas size)
  const path1 = "M20,20 Q140,10 260,20 Q270,150 260,280 Q140,290 20,280 Q10,150 20,20 Z";
  const path2 = "M25,15 Q145,20 255,18 Q268,145 258,282 Q135,295 22,278 Q12,155 25,15 Z";
  const path3 = "M15,25 Q135,15 262,22 Q272,155 262,278 Q145,285 18,282 Q8,145 15,25 Z";

  const cardVariants = {
    initial: {
      opacity: 0,
      scale: 0.2,
      transformOrigin: "90% 5%",
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 18,
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.2,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
    exit: { opacity: 0, x: -5, transition: { duration: 0.2 } },
  };

  const handleHamburgerClick = (e) => {
    toggleMenu();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const r1 = 30 + Math.random() * 40;
    const r2 = 30 + Math.random() * 40;
    const r3 = 30 + Math.random() * 40;
    const r4 = 30 + Math.random() * 40;
    const borderRad = `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r4}% ${100 - r3}%`;

    const newBlob = {
      id: clickBlobNextId.current++,
      x,
      y,
      borderRadius: borderRad,
      rotation: Math.random() * 360,
      targetRotation: Math.random() * 90 - 45,
    };

    setClickBlobs((prev) => [...prev, newBlob]);
    setTimeout(() => {
      setClickBlobs((prev) => prev.filter((b) => b.id !== newBlob.id));
    }, 800);
  };

  const menuItems = [
    { label: "Home", href: "#", isDownload: false },
    { label: "About Me", href: "#about", isDownload: false },
    { label: "Skills", href: "#about", isDownload: false },
    { label: "Projects", href: "#about", isDownload: false },
    { label: "Download CV", href: "/pdf/CV 2026.pdf", isDownload: true },
  ];

  // Override to white if menu is open, otherwise default to black for Hero
  const hamburgerStyle = isOpen ? { borderColor: "#ffffff" } : { borderColor: "#000000" };
  const lineStyle = isOpen ? { backgroundColor: "#ffffff" } : { backgroundColor: "#000000" };

  return (
    <>
      {/* Click-to-Close Backdrop Overlay when Menu is Open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 w-screen h-screen bg-black/15 backdrop-blur-[2px] z-40 pointer-events-auto cursor-pointer"
          />
        )}
      </AnimatePresence>

      <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between py-6 px-8 md:px-16 lg:px-24 bg-transparent pointer-events-none">
        {/* Logo */}
        <a href="#" className="text-[#FB64B6] font-display text-4xl font-bold tracking-widest hover:opacity-80 transition-opacity pointer-events-auto">
          Azka
        </a>

        {/* Circular Hamburger Icon */}
        <button
          onClick={handleHamburgerClick}
          style={hamburgerStyle}
          className="nav-hamburger relative overflow-hidden w-12 h-12 rounded-full flex items-center justify-center border border-black bg-transparent cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95 pointer-events-auto z-50"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center z-10 pointer-events-none">
            <span
              style={lineStyle}
              className={`nav-hamburger-line h-0.5 w-full bg-black absolute transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              style={lineStyle}
              className={`nav-hamburger-line h-0.5 w-full bg-black absolute transition-all duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              style={lineStyle}
              className={`nav-hamburger-line h-0.5 w-full bg-black absolute transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>

          {/* Click Blobs */}
          {clickBlobs.map((b) => (
            <motion.span
              key={b.id}
              initial={{ x: b.x - 24, y: b.y - 24, scale: 0.1, opacity: 0.5, rotate: b.rotation, borderRadius: b.borderRadius }}
              animate={{ scale: 2.2, opacity: 0, rotate: b.rotation + b.targetRotation }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute w-12 h-12 bg-[#FB64B6]/30 pointer-events-none z-0"
              style={{ left: 0, top: 0, transformOrigin: "center" }}
            />
          ))}
        </button>
      </header>

      {/* Popover Dropdown Menu Card (Liquid Morphing Border & Neat Column List) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-24 right-4 md:right-16 lg:right-24 w-[280px] h-[310px] z-45 flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
          >
            {/* Morphing Liquid SVG Background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 280 300"
              preserveAspectRatio="none"
            >
              <motion.path
                d={path1}
                animate={{ d: [path1, path2, path3, path1] }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                fill="#F9F9F9"
                stroke="#FB64B6"
                strokeWidth="3"
              />
            </svg>

            {/* Clean Vertical Links (Perfect Readability & Alignment) */}
            <nav className="relative w-full h-full z-10 px-8 py-7 flex flex-col justify-center gap-3 font-sans">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="border-b border-neutral-200 last:border-0 pb-2 last:pb-0"
                >
                  {item.isDownload ? (
                    <a
                      href={item.href}
                      download
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between text-[#FB64B6] hover:text-[#FB64B6]/80 hover:translate-x-1 transition-all duration-200 text-base font-bold uppercase tracking-wider cursor-pointer py-1"
                    >
                      <span>{item.label}</span>
                      {/* Chevron Down Icon */}
                      <svg className="w-4 h-4 text-[#FB64B6]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-neutral-700 hover:text-[#FB64B6] hover:translate-x-1 transition-all duration-200 text-base font-semibold cursor-pointer py-1"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
