'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa'


const SERVICES = [
  { icon: '', label: 'Web Development', desc: 'Full stack web app & platform' },
  { icon: '', label: 'Mobile Development', desc: 'Android app dengan Kotlin & Flutter' },
  { icon: '', label: 'Backend Engineering', desc: ' API, database & server architecture ' },
  { icon: '', label: 'UI/UX Implementation', desc: 'Translate design ke code yang pixel-perfect' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
}

export function AboutSection() {
  return (
    <SectionWrapper id='about' className='bg-gradient-to-b from-[#150500] to-transparent'>
      <SectionTitle title='About Me' subtitle='The developer behind the keyboard' />

      {/* Main layout: foto kiri + konten kanan */}
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start'>

        {/* Kolom kiri — foto + mini stats */}
        <motion.div
          className='flex flex-col items-center gap-6'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Avatar */}
          <div className='relative w-56 h-56 md:w-64 md:h-64'>
            {/* Glow ring */}
            <div className='absolute inset-0 rounded-full ring-4 ring-mc-lava/40 blur-md' />
            <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-mc-lava shadow-[0_0_30px_rgba(255,102,0,0.3)] bg-mc-stone'>
              {/* TODO: ganti src dengan path foto kamu */}
              <img
                src='/assets/images/image.png'
                alt='Azka Labib'
                className='w-full h-full object-cover object-[65%_center] brightness-110 contrast-105'
              />
            </div>
            {/* Available badge */}
            <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-pixel text-[10px] bg-mc-grass text-white px-3 py-1 border border-white/20 shadow-md flex items-center gap-1.5'>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Available for work
            </div>
          </div>

          {/* Social Links */}
          <div className='flex items-center gap-5 mt-4'>
            <a href='https://github.com' target='_blank' rel='noreferrer' className='p-2 text-mc-gray hover:text-white hover:-translate-y-1 transition-all duration-200'>
              <FaGithub className='w-6 h-6' />
            </a>
            <a href='https://discord.com' target='_blank' rel='noreferrer' className='p-2 text-mc-gray hover:text-[#5865F2] hover:-translate-y-1 transition-all duration-200'>
              <FaDiscord className='w-6 h-6' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer' className='p-2 text-mc-gray hover:text-[#E1306C] hover:-translate-y-1 transition-all duration-200'>
              <FaInstagram className='w-6 h-6' />
            </a>
          </div>
        </motion.div>
        {/* Kolom kanan — bio + services */}
        <div className='flex flex-col gap-8'>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='font-pixel text-mc-lava text-xl mb-3'>Haloo, Aku Azka</h3>
            <p className='text-mc-gray text-sm leading-relaxed mb-4'>
              Gw seorang <span className='text-mc-white font-bold'>Fullstack Developer</span> yang passionate bikin produk digital dari nol. Udah ship beberapa produk nyata — dari platform top-up game, productivity app, sampai sistem informasi sekolah. Stack utama gw <span className='text-mc-lava font-semibold'>Next.js</span>, <span className='text-mc-lava font-semibold'>Laravel</span>, <span className='text-mc-lava font-semibold'>Kotlin</span>, dan <span className='text-mc-lava font-semibold'>Supabase</span>.
            </p>
          </motion.div>

          {/* Divider tipis */}
          <div className='h-px bg-mc-cobble' />

          {/* Service cards — 2x2 grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='group bg-mc-obsidian border border-mc-cobble hover:border-mc-lava transition-colors duration-200 p-4 flex items-start gap-3'
              >
                <span className='text-xl shrink-0'>{s.icon}</span>
                <div>
                  <p className='text-mc-white text-sm font-medium mb-0.5'>{s.label}</p>
                  <p className='text-mc-gray text-xs leading-relaxed'>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
} 