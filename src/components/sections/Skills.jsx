"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiNextdotjs, SiReact, SiTailwindcss, SiHtml5, SiJavascript, SiNodedotjs, SiLaravel, SiPostgresql, SiFigma, SiFramer, SiAxios, SiMysql, SiGo } from "react-icons/si";
import { FaMobileAlt, FaCubes, FaServer, FaPenNib, FaProjectDiagram, FaLayerGroup, FaPlayCircle } from "react-icons/fa";

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
      name: "React",
      category: "Front End",
      desc: "Component-based declarative library for building user interfaces.",
      icon: <SiReact className="w-10 h-10" />
    },
    {
      name: "Next.js",
      category: "Front End",
      desc: "React framework for production-grade static & server-rendered apps.",
      icon: <SiNextdotjs className="w-10 h-10" />
    },
    {
      name: "Tailwind CSS",
      category: "Front End",
      desc: "Utility-first styling workflow for rapid responsive layouts.",
      icon: <SiTailwindcss className="w-10 h-10" />
    },
    {
      name: "HTML",
      category: "Front End",
      desc: "Semantic markup for web structure.",
      icon: <SiHtml5 className="w-10 h-10" />
    },
    {
      name: "GSAP Animation",
      category: "Front End",
      desc: "Robust JavaScript toolset for high-performance animations.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M50 100A50 50 0 1 0 50 0A50 50 0 0 0 50 100ZM34 16A18 18 0 1 1 34 52A18 18 0 0 1 34 16ZM66 16A18 18 0 1 1 66 52A18 18 0 0 1 66 16ZM34 48A18 18 0 1 1 34 84A18 18 0 0 1 34 48ZM66 48A18 18 0 1 1 66 84A18 18 0 0 1 66 48Z" />
        </svg>
      )
    },
    {
      name: "JavaScript ES6",
      category: "Front End",
      desc: "Modern vanilla JavaScript features and syntax.",
      icon: <SiJavascript className="w-10 h-10" />
    },
    {
      name: "Axios",
      category: "Front End",
      desc: "Promise-based HTTP client for the browser and Node.js.",
      icon: <SiAxios className="w-10 h-10" />
    },
    {
      name: "Responsive Design",
      category: "Front End",
      desc: "Creating flexible layouts that adapt to any screen size.",
      icon: <FaMobileAlt className="w-10 h-10" />
    },
    {
      name: "Joko UI",
      category: "Front End",
      desc: "Modern component library for elegant interfaces.",
      icon: <FaCubes className="w-10 h-10" />
    },
    {
      name: "Framer",
      category: "Front End",
      desc: "Interactive design and animation for React.",
      icon: <SiFramer className="w-10 h-10" />
    },
    // --- BACKEND ---
    {
      name: "Node.js Runtime",
      category: "Backend",
      desc: "Asynchronous event-driven JavaScript runtime for scalable network applications.",
      icon: <SiNodedotjs className="w-10 h-10" />
    },
    {
      name: "Laravel",
      category: "Backend",
      desc: "Elegant MVC PHP framework for robust, scalable backend services.",
      icon: <SiLaravel className="w-10 h-10" />
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      desc: "Relational database system for ACID-compliant structured data schemas.",
      icon: <SiPostgresql className="w-10 h-10" />
    },
    {
      name: "MySQL",
      category: "Backend",
      desc: "Open-source relational database management system.",
      icon: <SiMysql className="w-10 h-10" />
    },
    {
      name: "RESTful API",
      category: "Backend",
      desc: "Architectural style for an application program interface (API).",
      icon: <FaServer className="w-10 h-10" />
    },
    {
      name: "Golang",
      category: "Backend",
      desc: "Statically typed, compiled programming language designed for scalable servers.",
      icon: <SiGo className="w-10 h-10" />
    },
    // --- UI/UX ---
    {
      name: "Wireframing",
      category: "UI/UX",
      desc: "Creating structural blueprints for web and mobile interfaces.",
      icon: <FaPenNib className="w-10 h-10" />
    },
    {
      name: "Figma",
      category: "UI/UX",
      desc: "Collaborative interface design tool for wireframing and prototyping.",
      icon: <SiFigma className="w-10 h-10" />
    },
    {
      name: "User Flow",
      category: "UI/UX",
      desc: "Mapping intuitive user journeys and navigation structures.",
      icon: <FaProjectDiagram className="w-10 h-10" />
    },
    {
      name: "Design System",
      category: "UI/UX",
      desc: "Building consistent, reusable component libraries and guidelines.",
      icon: <FaLayerGroup className="w-10 h-10" />
    },
    {
      name: "Prototyping",
      category: "UI/UX",
      desc: "Developing interactive mockups to simulate user experiences.",
      icon: <FaPlayCircle className="w-10 h-10" />
    },
    {
      name: "Responsive UI Design",
      category: "UI/UX",
      desc: "Designing adaptive interfaces for multiple screen sizes.",
      icon: <FaMobileAlt className="w-10 h-10" />
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
      {/* Smooth Asymmetric Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-99%] pointer-events-none">
        <svg
          className="relative block w-full h-[120px] md:h-[200px]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C250,160 400,180 600,180 C750,180 800,60 950,60 C1100,60 1150,160 1200,180 L1200,200 L0,200 Z"
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
