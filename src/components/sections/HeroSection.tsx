'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isDeleting = false;
    let i = 0;

    const loop = () => {
      setDisplayText(text.substring(0, i));

      let typingSpeed = isDeleting ? 50 : 150;

      if (!isDeleting && i === text.length) {
        typingSpeed = 2000; // Jeda saat teks selesai diketik
        isDeleting = true;
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        typingSpeed = 500; // Jeda sebelum mulai ngetik lagi
      }

      if (isDeleting) {
        i--;
      } else {
        i++;
      }

      timeoutId = setTimeout(loop, typingSpeed);
    };

    const startTimeout = setTimeout(() => {
      loop();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const VIDEOS = [
  '/assets/video/hero1.mp4',
  '/assets/video/hero2.mp4',
  '/assets/video/hero3.mp4',
]

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  return (
    <section id='hero' className='relative min-h-screen flex items-center justify-center overflow-hidden bg-mc-void'>
      {/* Video background */}
      <AnimatePresence initial={false}>
        <motion.video
          key={VIDEOS[currentVideoIndex]}
          src={VIDEOS[currentVideoIndex]}
          className='absolute inset-0 w-full h-full object-cover'
          autoPlay
          muted={true}
          playsInline
          onEnded={() => setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Overlay gradient so text is readable while keeping video visible */}
      <div className='absolute inset-0 backdrop-blur-[3px]' />
      <div className='absolute inset-0 bg-linear-to-b from-mc-void/60 via-transparent to-mc-void/50' />
      <div className='absolute inset-0 bg-mc-void/30 mix-blend-multiply' />
      
      {/* Smooth transition gradient to About section */}
      <div className='absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-linear-to-t from-[#150500] via-[#150500]/50 to-transparent pointer-events-none z-10' />

      {/* Content */}
      <div className='relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-16 w-full'>
        
        {/* Main Title */}
        <motion.h1
          className='font-pixel text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-none mb-6 tracking-wider'
          style={{ textShadow: '0 6px 0 rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          <span className="text-mc-white">Azka</span>
          <span className="text-mc-lava">Labib</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className='font-pixel text-mc-gray/80 text-sm md:text-base mb-6 max-w-2xl flex flex-wrap justify-center gap-1 md:gap-4 tracking-widest uppercase'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span>Design it.</span>
          <span>Build it.</span>
          <span>Ship it.</span>
        </motion.p>

        {/* Typewriter text */}
        <motion.p
          className='font-pixel text-mc-gold text-xs md:text-sm mb-12 tracking-wider'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <TypewriterText text="Fullstack Developer" delay={800} /><span className="animate-pulse">_</span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className='flex flex-col sm:flex-row gap-5 justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* Primary Action Button */}
          <a href="#projects" className="group relative flex items-center justify-center gap-3 px-8 py-4 font-pixel text-xs sm:text-sm text-mc-gold bg-linear-to-b from-[#8f3600] to-[#5e2000] border-2 border-[#b34000] hover:brightness-110 transition-all shadow-[inset_0_2px_0_rgba(255,255,255,0.1),0_4px_0_#3d1300]">
            <svg className="w-5 h-5 text-mc-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            VIEW PROJECTS
          </a>
          
          {/* Secondary Action Button */}
          <a href="#contact" className="group relative flex items-center justify-center gap-3 px-8 py-4 font-pixel text-xs sm:text-sm text-mc-white bg-mc-void/40 border-2 border-mc-white/30 backdrop-blur-md hover:bg-mc-white/10 hover:border-mc-white/50 transition-all shadow-[0_4px_0_rgba(0,0,0,0.5)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            CONTACT ME
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20'
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className='font-pixel text-mc-white/70 text-[10px] tracking-widest'>SCROLL DOWN</span>
        <svg className="w-6 h-6 text-mc-lava" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
      </motion.div>
    </section>
  )
}
