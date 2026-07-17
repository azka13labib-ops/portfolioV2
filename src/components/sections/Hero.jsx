"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const ThreeBg = dynamic(() => import("@/components/ui/ThreeBg"), { ssr: false });

export default function Hero() {
  const containerRef = useRef(null);
  const watermarkRef = useRef(null);
  const wavyPathRef = useRef(null);

  const [profileError, setProfileError] = useState(false);
  const [particles, setParticles] = useState([]);
  const nextId = useRef(0);
  const [blobs, setBlobs] = useState([]);
  const blobNextId = useRef(0);

  const handleDownloadClick = (e) => {
    // 1. Elastic Text Bounce
    gsap.timeline()
      .to(".download-cv-text", { scale: 0.92, duration: 0.08, ease: "power2.out" })
      .to(".download-cv-text", { scale: 1.08, duration: 0.12, ease: "power2.out" })
      .to(".download-cv-text", { scale: 1.0, duration: 0.45, ease: "elastic.out(1.2, 0.45)" });

    // 2. Elastic Underline Guitar String Ripple
    if (wavyPathRef.current) {
      const length = wavyPathRef.current.getTotalLength?.() || 200;
      gsap.timeline()
        .to(wavyPathRef.current, { strokeDashoffset: length, duration: 0.15, ease: "power2.in" })
        .to(wavyPathRef.current, { strokeDashoffset: 0, duration: 0.75, ease: "elastic.out(1.1, 0.4)" });
    }

    // 3. Spark Particle Burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles = Array.from({ length: 18 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 40 + Math.random() * 90;
      return {
        id: nextId.current++,
        x,
        y,
        tx: Math.cos(angle) * speed,
        ty: Math.sin(angle) * speed - 15,
        rotation: Math.random() * 360,
        scale: 0.3 + Math.random() * 0.6,
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);

    // Spawning expanding organic fluid blobs (not perfect circles)
    const newBlobs = Array.from({ length: 4 }).map(() => {
      const r1 = 35 + Math.random() * 30;
      const r2 = 35 + Math.random() * 30;
      const r3 = 35 + Math.random() * 30;
      const r4 = 35 + Math.random() * 30;
      const borderRad = `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r4}% ${100 - r3}%`;

      const angle = Math.random() * Math.PI * 2;
      const dist = 5 + Math.random() * 20;

      return {
        id: blobNextId.current++,
        x: x + Math.cos(angle) * dist,
        y: y + Math.sin(angle) * dist,
        borderRadius: borderRad,
        targetScale: 1.8 + Math.random() * 2.2,
        rotation: Math.random() * 360,
        targetRotation: Math.random() * 120 - 60,
        duration: 0.7 + Math.random() * 0.4,
      };
    });

    setBlobs((prev) => [...prev, ...newBlobs]);

    // Cleanup particles and blobs
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1000);
    setTimeout(() => {
      setBlobs((prev) => prev.filter((b) => !newBlobs.find((nb) => nb.id === b.id)));
    }, 1200);
  };

  useEffect(() => {
    // Register ScrollTrigger client-side only
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Watermark ScrollTrigger Parallax
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          xPercent: -15, // horizontal slide
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Right Text Lines Stagger entrance
      gsap.from(".hero-title-line", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      // 3. Wavy Underline Draw-in Animation
      if (wavyPathRef.current) {
        const length = wavyPathRef.current.getTotalLength?.() || 200;
        gsap.fromTo(
          wavyPathRef.current,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power2.inOut",
            delay: 1.3,
          }
        );
      }

      // 4. Lower Items fade-in
      gsap.from(".hero-bottom-item", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.0,
      });

      // 5. Scroll Parallax Animations
      // Profile avatar card: scale down and fade out
      gsap.to(".hero-avatar-box", {
        scale: 0.8,
        opacity: 0,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Left Column: slide left and fade out
      gsap.to(".hero-left-col", {
        x: -120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Right Column: slide right and fade out
      gsap.to(".hero-right-col", {
        x: 120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Bottom elements: slide down and fade out
      gsap.to(".hero-bottom-item", {
        y: 80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen bg-white overflow-hidden flex flex-col justify-center select-none"
    >
      {/* Full White Background with Subtle Irregular Slanted Lines (Layer 1, z-0) */}
      <div className="absolute inset-0 z-0 bg-white w-full h-full pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle irregular intersecting diagonal lines */}
          <line x1="-5%" y1="15%" x2="105%" y2="85%" stroke="rgba(0, 0, 0, 0.06)" strokeWidth="1" />
          <line x1="30%" y1="-5%" x2="70%" y2="105%" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" />
          <line x1="95%" y1="-5%" x2="-5%" y2="95%" stroke="rgba(0, 0, 0, 0.06)" strokeWidth="1" />
          <line x1="-5%" y1="40%" x2="105%" y2="25%" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" />
          <line x1="15%" y1="-5%" x2="85%" y2="105%" stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1" />
          <line x1="0%" y1="80%" x2="100%" y2="60%" stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1" />
        </svg>
      </div>

      {/* Three.js Particle + Shape Background (Layer 2, z-10) */}
      <ThreeBg />

      {/* Watermark Parallax Text (Layer 2, z-10) */}
      <div
        ref={watermarkRef}
        className="absolute z-10 bottom-16 left-[4%] text-neutral-200/40 leading-none select-none pointer-events-none font-sans font-black text-[9.5rem] tracking-tight uppercase scale-y-150 origin-left"
      >
        AzkaLabib
      </div>

      {/* Content Layer (Layer 3, z-20) */}
      <div className="absolute inset-0 z-20 w-full h-full flex items-center justify-center">
        
        {/* Centered Avatar Box */}
        <div className="relative hero-avatar-box">
          
          {/* Rotating Circular Badge "AVAILABLE FOR WORK" (Floating Top-Right) */}
          <div className="absolute right-[-35px] top-[-35px] w-20 h-20 z-30 select-none pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
              <defs>
                <path
                  id="badgePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="text-[7px] font-orbitron font-black fill-[#FB64B6] tracking-[0.23em]">
                <textPath href="#badgePath">
                  • AVAILABLE FOR WORK • AVAILABLE FOR WORK
                </textPath>
              </text>
            </svg>
          </div>

          {/* Wrapper for Avatar + Overlays */}
          <div className="relative w-[240px] h-[320px] md:w-[300px] md:h-[400px]">
            {/* Star Overlay - SVG Vector (Top-Left, outside overflow-hidden) */}
            <div className="absolute left-[-25px] top-[-25px] -rotate-12 w-16 h-16 select-none pointer-events-none z-30">
              <svg viewBox="0 0 24 24" fill="#FB64B6" className="w-full h-full drop-shadow-[0_0_8px_rgba(251,100,182,0.85)]">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.41l8.2-1.192L12 .587z" />
              </svg>
            </div>

            {/* Profile Frame with Solid Pink Border (#FB64B6) and overflow-hidden */}
            <div className="relative w-full h-full border-8 border-[#FB64B6] bg-[#efefef] shadow-xl overflow-hidden">
              {!profileError ? (
                <Image
                  src="/img/azka.png"
                  alt="Profile photo"
                  fill
                  priority
                  className="object-cover grayscale"
                  onError={() => setProfileError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-800 text-center p-6">
                  <svg className="w-16 h-16 text-neutral-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                    Portrait Photo
                  </span>
                </div>
              )}

              {/* Profile Title Text overlay */}
              <h2 className="absolute right-2 top-3 text-xs font-caveat italic font-bold text-[#FB64B6]">
                Azka Labib
              </h2>
            </div>

            {/* Arrow Overlay - SVG Vector (Bottom Right, outside overflow-hidden) */}
            <div className="absolute right-[-8%] bottom-[-9%] -rotate-30 w-20 h-20 select-none pointer-events-none z-30">
              <svg viewBox="0 0 100 100" fill="none" stroke="#FB64B6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[0_0_10px_rgba(251,100,182,0.85)]">
                <path d="M15 85 C 35 65, 55 65, 80 20" />
                <path d="M48 20 L80 20 L80 52" />
              </svg>
            </div>
          </div>
        </div>

        {/* Absolute Left Column: Download CV */}
        <div className="hero-left-col hidden md:block absolute left-[4%] top-[35%] z-20 w-[300px] 2xl:w-[350px]">
          <div className="relative group inline-block">
            <a
              href="/pdf/CV 2026.pdf"
              download
              onClick={handleDownloadClick}
              className="download-cv-text text-3xl 2xl:text-4xl text-black font-orbitron font-bold uppercase tracking-wider hover:text-[#FB64B6] transition-colors duration-300 block cursor-pointer origin-left"
            >
              Download CV
            </a>
            {/* Wavy Underline path (Pink Accent) */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-4 overflow-visible pointer-events-none"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={wavyPathRef}
                d="M 0 10 Q 15 2, 30 10 T 60 10 T 90 10 T 120 10 T 150 10 T 180 10 T 200 10"
                stroke="#FB64B6" /* Pink wavy line */
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Particle Burst Overlay */}
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ x: p.x, y: p.y, scale: p.scale, opacity: 1, rotate: p.rotation }}
                animate={{ x: p.x + p.tx, y: p.y + p.ty, opacity: 0, rotate: p.rotation + 180 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-4 h-4 text-[#FB64B6] pointer-events-none z-50"
                style={{ left: 0, top: 0 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.41l8.2-1.192L12 .587z" />
                </svg>
              </motion.span>
            ))}

            {/* Organic Fluid Blob Ripples */}
            {blobs.map((b) => (
              <motion.span
                key={b.id}
                initial={{ x: b.x - 20, y: b.y - 20, scale: 0.1, opacity: 0.6, rotate: b.rotation, borderRadius: b.borderRadius }}
                animate={{ scale: b.targetScale, opacity: 0, rotate: b.rotation + b.targetRotation }}
                transition={{ duration: b.duration, ease: "easeOut" }}
                className="absolute w-10 h-10 bg-[#FB64B6]/15 border border-[#FB64B6]/40 pointer-events-none z-45"
                style={{ left: 0, top: 0, transformOrigin: "center" }}
              />
            ))}
          </div>
        </div>

        {/* Absolute Right Column: Job Titles */}
        <div className="hero-right-col hidden md:block absolute right-[4%] top-[30%] z-20 w-[300px] 2xl:w-[350px] whitespace-nowrap">
          <div className="font-orbitron uppercase text-black font-black text-3xl 2xl:text-3xl scale-y-150 flex flex-col gap-2 items-end text-right">
            <div className="hero-title-line font-black ml-3 text-black">Fullstack Developer</div>
            <div className="hero-title-line font-black text-base md:text-lg text-[#FB64B6]">Crafting Digital Products</div>
          </div>
        </div>

        {/* Absolute Bottom Left: Welcome Tagline */}
        <div className="absolute bottom-[10%] left-[4%] z-20 w-[300px] lg:w-[420px] 2xl:w-[450px] text-black hidden md:block hero-bottom-item">
          <div className="font-mono text-neutral-800 tracking-widest text-lg">
            Welcome to my <span className="font-caveat font-bold text-blue-500 text-sm">portfolio</span>, where you can get an idea about, <span className="font-caveat font-black text-sm">me</span> and explore my latest <span className="font-caveat italic font-semibold text-pink-500 text-xs">projects</span>.
          </div>
        </div>

        {/* Absolute Bottom Right: WEB DEV Tag */}
        <div className="absolute bottom-[10%] right-[4%] z-20 gap-8 text-neutral-800 font-mono hidden lg:flex text-lg tracking-widest uppercase hero-bottom-item font-semibold">
          <span>WEB</span>
          <span>DEV</span>
        </div>

      </div>

      {/* Infinite Marquee Tech Stack (Bottom of Hero) */}
      <div className="absolute bottom-0 left-0 w-full z-20 py-3 bg-[#0A0A0A] border-t border-neutral-900 overflow-hidden select-none pointer-events-none">
        <div className="flex w-max animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-12 text-white font-orbitron font-black text-sm uppercase tracking-widest whitespace-nowrap pr-12">
              <span>NEXT.JS</span> <span className="text-[#FB64B6]">•</span>
              <span>LARAVEL</span> <span className="text-[#FB64B6]">•</span>
              <span>TAILWIND</span> <span className="text-[#FB64B6]">•</span>
              <span>THREE.JS</span> <span className="text-[#FB64B6]">•</span>
              <span>GSAP</span> <span className="text-[#FB64B6]">•</span>
              <span>REACT</span> <span className="text-[#FB64B6]">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
