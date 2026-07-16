"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const sectionRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".skill-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  const skillItems = [
    // --- FRONT END ---
    {
      name: "Next.js",
      category: "Front End",
      desc: "React framework for production-grade static & server-rendered apps.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 256 256">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,0-11.32,0L136,132.69V104a8,8,0,0,0-16,0v48a8,8,0,0,0,13.66,5.66l36-36A8,8,0,0,0,173.66,106.34Z" />
        </svg>
      ),
    },
    {
      name: "React",
      category: "Front End",
      desc: "Component-based declarative library for building user interfaces.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 256 256">
          <path d="M224,128a16,16,0,0,1-16,16H144v64a16,16,0,0,1-32,0V144H48a16,16,0,0,1,0-32h64V48a16,16,0,0,1,32,0v64h64A16,16,0,0,1,224,128Z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Front End",
      desc: "Utility-first styling workflow for rapid responsive layouts.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 256 256">
          <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
        </svg>
      ),
    },
    {
      name: "HTML",
      category: "Front End",
      desc: "Semantic markup for web structure.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 384 512">
          <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.63 127.9H124.28l5.38 61.1h172.93l-15.42 173.3-89.28 27.1-89.26-27.1-4.08-46.7H66.4l7.15 82.2 118.04 35.8 118.03-35.8 22.8-255.4z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      category: "Front End",
      desc: "Cascading style sheets for web presentation.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 384 512">
          <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-41.6-167.3-16.3-9.3-107.2h243.4l1.8-19.9z" />
        </svg>
      ),
    },
    {
      name: "GSAP Animation",
      category: "Front End",
      desc: "Advanced scrolling timelines and high-performance WebGL animations.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 256 256">
          <path d="M108,128a20,20,0,1,1-20-20A20,20,0,0,1,108,128Zm80-20a20,20,0,1,0,20,20A20,20,0,0,0,188,108Zm-50,56a20,20,0,1,0,20,20A20,20,0,0,0,138,164Z" />
        </svg>
      ),
    },
    {
      name: "JavaScript ES6",
      category: "Front End",
      desc: "Modern vanilla JavaScript features and syntax.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 448 512">
          <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 36.8 0 59.2 17.1 71.5 39.7l-33.4 20.1c-8.4-13.5-19.8-21.6-37.6-21.6-16.5 0-26.2 7.8-26.2 19.5 0 12.3 12 17.4 28.6 24.6l12.9 5.4c34 14.7 51.4 31.6 51.4 65.8 0 39.7-27.1 56.1-64.8 56.1z" />
        </svg>
      ),
    },
    {
      name: "Zustand",
      category: "Front End",
      desc: "A small, fast and scalable bearbones state-management solution.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M16 3c-1.5 0-2.5 1-2.5 2v1c-1 0-2 0-3 0V5c0-1-1-2-2.5-2C6.5 3 5 4.5 5 6c0 1 .5 2 1 2.5V11c0 3.5 3 6 7 6s7-2.5 7-6V8.5c.5-.5 1-1.5 1-2.5 0-1.5-1.5-3-3-3zm-9.5 2c.8 0 1.5.7 1.5 1.5S7.3 8 6.5 8 5 7.3 5 6.5 5.7 5 6.5 5zm11 0c.8 0 1.5.7 1.5 1.5S18.3 8 17.5 8 16 7.3 16 6.5 16.7 5 17.5 5zM9 13c0 .5-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm8 0c0 .5-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zM12 15c-.8 0-1.5.7-1.5 1.5S11.2 18 12 18s1.5-.7 1.5-1.5S12.8 15 12 15z"/>
        </svg>
      ),
    },
    // --- BACKEND ---
    {
      name: "Node.js",
      category: "Backend",
      desc: "Asynchronous event-driven JavaScript runtime for scalable network applications.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M221.72,74.56l-85.33-49.27a15.93,15.93,0,0,0-16,0L35,74.56A15.94,15.94,0,0,0,27.08,88.42v98.54A15.94,15.94,0,0,0,35,200.82l85.33,49.26a15.93,15.93,0,0,0,16,0l85.34-49.26A15.94,15.94,0,0,0,229.75,187V88.42A15.94,15.94,0,0,0,221.72,74.56Zm-9.15,108.93-85.33,49.26-85.34-49.26V88.42l85.34-49.27L212.57,88.42Z" />
        </svg>
      ),
    },
    {
      name: "Laravel",
      category: "Backend",
      desc: "Elegant MVC PHP framework for robust, scalable backend services.",
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      desc: "Relational database system for ACID-compliant structured data schemas.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M200,64H152V40a8,8,0,0,0-16,0V64H88V40A8,8,0,0,0,72,40V64H56A16,16,0,0,0,40,80v96a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V80A16,16,0,0,0,200,64Zm0,112H56V80H200V176Z" />
        </svg>
      ),
    },
    // --- UI/UX ---
    {
      name: "Figma",
      category: "UI/UX",
      desc: "Collaborative interface design tool for wireframing and prototyping.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M168,136a40,40,0,1,1-40-40A40,40,0,0,1,168,136Zm-40,40a40,40,0,1,0-40-40h40Zm-40-80a40,40,0,1,0,40,40V96H88a40,40,0,0,0-40,40Z" />
        </svg>
      ),
    },
    {
      name: "Framer",
      category: "UI/UX",
      desc: "Interactive design tool for creating high-fidelity realistic web prototypes.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M128,16L208,96H48ZM48,96L128,176H48ZM208,96L128,176H208V176L128,256V176Z" />
        </svg>
      ),
    },
  ];

  const categoryRows = [
    {
      id: "Front End",
      title: "Frontend",
      desc: "Modern interactive interfaces",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
          <circle cx="13.5" cy="6.5" r=".5"/>
          <circle cx="17.5" cy="10.5" r=".5"/>
          <circle cx="8.5" cy="7.5" r=".5"/>
          <circle cx="6.5" cy="12.5" r=".5"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      )
    },
    {
      id: "Backend",
      title: "Backend",
      desc: "Robust and scalable APIs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      )
    },
    {
      id: "UI/UX",
      title: "UI/UX",
      desc: "Intelligent and innovative solutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-[#FB64B6] text-white py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Smooth Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-99%] pointer-events-none">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,120 600,0 900,100 C1050,150 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="#FB64B6"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto w-full z-10 grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-8 items-start">
        
        {/* Left Column: Intro Text & Massive Typography */}
        <div className="xl:col-span-5 flex flex-col relative pt-8">
          <p className="font-mono text-black/80 tracking-wider text-base md:text-lg leading-relaxed max-w-md">
            This section represents the core{" "}
            <span className="font-caveat font-bold text-white text-2xl md:text-3xl mx-1 inline-block -rotate-2 mix-blend-difference">
              technologies
            </span>{" "}
            and tools I use to build scalable, high-performance web applications with clean architecture and smooth user experiences.
          </p>
          
          <div className="mt-16 md:mt-24 relative inline-block self-start">
            <h2 
              className="font-black text-black leading-[0.8] tracking-tighter uppercase"
              style={{ fontSize: "clamp(5rem, 18vw, 12rem)", transform: "scaleY(1.3)", transformOrigin: "bottom" }}
            >
              SKILLS
            </h2>
            
            {/* Pink Rotating Badge Overlapping the Text */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-32 h-32 md:w-48 md:h-48 bg-[#FB64B6] rounded-full flex items-center justify-center shadow-2xl border-[6px] border-black z-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-black overflow-visible">
                <path id="circlePath" fill="none" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[12px] font-black tracking-[0.2em] font-mono uppercase" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">
                    CREATIVE DEVELOPER • EXPERT LEVEL • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Accordion Categories */}
        <div className="xl:col-span-7 flex flex-col justify-center xl:pl-16 w-full">
          {categoryRows.map((cat) => {
            return (
              <div key={cat.id} className="border-b-2 border-black/20 overflow-hidden w-full">
                <button 
                  onClick={() => setActiveModal(cat.id)}
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left group hover:bg-black/5 transition-all duration-300 px-4 -mx-4 rounded-2xl"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="text-black p-3 bg-white/20 rounded-xl shadow-inner border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-orbitron font-black text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">{cat.title}</h3>
                      <p className="font-mono text-black/70 text-sm md:text-base mt-2 font-semibold">{cat.desc}</p>
                    </div>
                  </div>
                  <div className={`text-black p-3 rounded-full border-2 border-black transition-all duration-500 shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Dark Theme Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 md:p-8"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Background Watermark Letter */}
              <div className="absolute right-0 bottom-0 text-[40rem] leading-none font-black text-white/1.5 select-none pointer-events-none translate-x-[15%] translate-y-[15%]">
                {activeModal.charAt(0)}
              </div>

              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 z-10 bg-black/20">
                <h3 className="font-orbitron font-black text-white tracking-[0.2em] uppercase text-xl md:text-2xl">
                  {activeModal.toUpperCase()} SKILLS
                </h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="text-white/50 hover:text-white transition-colors p-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body (Scrollable List) */}
              <div className="flex-1 overflow-y-auto z-10 scrollbar-hide">
                <div className="flex flex-col py-4 px-2 md:px-6">
                  {skillItems.filter(item => item.category === activeModal).map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-6 md:gap-8 px-6 py-5 md:py-6 border-b border-white/5 hover:bg-white/3 transition-colors group cursor-default"
                    >
                      <div className="text-white/20 group-hover:text-white transition-colors duration-300 w-12 h-12 shrink-0 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h4 className="font-orbitron font-black text-2xl md:text-4xl lg:text-5xl text-white/90 group-hover:text-white transition-colors tracking-tight">
                        {item.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
