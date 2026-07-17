"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger client-side only
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Unified master timeline for pinning and page transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: "+=130%",
          scrub: true,
          pin: true,
        },
      });

      // 1. Reveal About Me wrapper using slanted clipPath reveal
      tl.fromTo(
        "#about-wrapper",
        { clipPath: "polygon(0% 130%, 100% 100%, 100% 130%, 0% 130%)" },
        {
          clipPath: "polygon(0% 0%, 100% -30%, 100% 130%, 0% 130%)",
          ease: "none",
        }
      );

      // 1b. Animate hamburger border and line colors from black to white synchronously
      tl.to(
        ".nav-hamburger",
        {
          borderColor: "#ffffff",
          ease: "none",
        },
        0
      );
      tl.to(
        ".nav-hamburger-line",
        {
          backgroundColor: "#ffffff",
          ease: "none",
        },
        0
      );

      // 2. Synchronously scrub-reveal About Me words as the page slides up
      tl.to(
        ".reveal-word",
        {
          color: (index, target) => {
            if (target.classList.contains("highlight-blue") || target.classList.contains("highlight-pink")) {
              return "#FB64B6"; // Unified pink accent
            }
            return "#FFFFFF";
          },
          stagger: 0.02,
          ease: "none",
        },
        "<+=0.15" // starts shortly after transition begins
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-black w-full min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Fixed Right-Side Social Sidebar with mix-blend-difference so it adapts to background */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-100 flex flex-col gap-6 mix-blend-difference pointer-events-auto">
        {[
          {
            href: "https://www.linkedin.com/in/azka-labib-abdillah-zain-07797738a/",
            path: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
          },
          {
            href: "https://github.com/azka13labib-ops",
            path: "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z",
          },
          {
            href: "https://wa.me/6283155761573",
            path: "M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
          },
          {
            href: "mailto:azka13labib@gmail.com",
            path: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
          },
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.2, 
              color: "#ffffff"
            }}
            className="text-white hover:text-white transition-colors duration-200 text-xl block"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 256 256">
              <path d={social.path} />
            </svg>
          </motion.a>
        ))}
      </div>

      {/* Pinned Scroll Container (h-screen total depth, unpins to naturally scroll down) */}
      <div
        ref={scrollContainerRef}
        className="scroll-container relative w-full h-screen overflow-hidden"
      >
        {/* Hero Section Wrapper (z-10) */}
        <div id="hero-wrapper" className="absolute inset-0 w-full h-screen z-10">

          <Hero />
        </div>

        {/* About Me Section Wrapper (z-20) */}
        <div
          id="about-wrapper"
          className="absolute inset-0 w-full h-screen z-20"
          style={{ clipPath: "polygon(0% 130%, 100% 100%, 100% 130%, 0% 130%)" }}
        >
          <AboutMe />
        </div>
      </div>

      {/* Skills Section (Scrolls naturally after About Me) */}
      <Skills />

      {/* Projects Section (Horizontal Scroll Gallery) */}
      <Projects />

      {/* Contact Section (Overlaps Projects with GSAP) */}
      <Contact />
    </main>
  );
}


