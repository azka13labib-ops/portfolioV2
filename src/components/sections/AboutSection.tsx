'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const SERVICES = [
  {
    title: 'Plugin Development',
    icon: (
      <svg className="w-5 h-5 text-mc-lava" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    ),
  },
  {
    title: 'Web Development',
    icon: (
      <svg className="w-5 h-5 text-mc-lava" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
  },
  {
    title: 'Server Management',
    icon: (
      <svg className="w-5 h-5 text-mc-lava" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: 'Performance Tuning',
    icon: (
      <svg className="w-5 h-5 text-mc-lava" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  }
]

export function AboutSection() {
  return (
    <SectionWrapper id='about' className='bg-[#0d0500] relative overflow-hidden py-24'>
      <div className='max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
        
        {/* Left: Image & Decoration */}
        <motion.div
          className='relative flex justify-center items-center'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative rotated border */}
          <div className='absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-mc-lava/30 rounded-[40px] rotate-12 -z-10' />
          
          {/* Glowing Image Container */}
          <div className='relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full p-1 bg-gradient-to-br from-mc-lava to-[#2a1100] shadow-[0_0_60px_rgba(255,102,0,0.3)]'>
            <div className='w-full h-full rounded-full bg-[#1f1005] overflow-hidden flex items-center justify-center border-[4px] border-[#0d0500] relative'>
              <Image src='/assets/images/image.png' alt='Azka Labib Profile' fill className='object-cover object-[70%_40%]' />
              <div className='absolute inset-0 opacity-10 bg-gradient-to-t from-mc-lava/50 to-transparent pointer-events-none'></div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className='flex flex-col'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className='mb-8'>
            <h2 className='text-4xl md:text-5xl font-pixel text-mc-lava drop-shadow-[0_0_15px_rgba(255,102,0,0.4)] mb-4'>
              About Me
            </h2>
            <p className='text-[#d3b58d] text-sm md:text-base'>
              The developer behind the plugins
            </p>
          </div>

          {/* Greeting */}
          <h3 className='text-xl md:text-2xl font-pixel text-mc-lava mb-6 flex items-center gap-3'>
            Hey, I'm Azka<span className='text-2xl'></span>
          </h3>

          {/* Description */}
          <div className='text-mc-gray/90 text-sm md:text-base leading-relaxed space-y-4 mb-10'>
            <p>
             Seorang Fullstack Developer yang passionate bikin produk web & mobile dari nol. Udah berpengalaman bikin platform top-up game AZKA TOP UP, productivity app Vorxa, dan aplikasi manajemen sekolah SIGIZI. Stack utama: Next.js, Laravel, Kotlin/Jetpack Compose, Supabase.
            </p>
            <p>
              Gw udah kerja di beberapa server ternama seperti <span className='text-mc-lava font-bold'>RelxMC</span> dan <span className='text-mc-lava font-bold'>HitmanSMP</span>, dan udah bikin banyak plugin custom yang dipake oleh ribuan pemain. Selain plugin, gw juga develop website dan manage server infrastructure.
            </p>
          </div>

          {/* Services Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {SERVICES.map((service, idx) => (
              <div 
                key={idx}
                className='flex items-center gap-4 bg-[#1f1005]/80 border border-[#2a1100] rounded-xl p-4 hover:border-mc-lava/50 hover:bg-[#2a1100]/80 transition-colors duration-300 cursor-pointer'
              >
                <div className='p-2 bg-[#0d0500] rounded-lg border border-[#2a1100]'>
                  {service.icon}
                </div>
                <span className='text-mc-white/90 text-sm font-medium'>
                  {service.title}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </SectionWrapper>
  )
}
