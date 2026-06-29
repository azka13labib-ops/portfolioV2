'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { IconType } from 'react-icons'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiLaravel,
  SiNodedotjs,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiKotlin,
  SiFlutter,
  SiDocker,
  SiGit,
  SiGithub,
} from 'react-icons/si'

interface SkillItem {
  name: string
  icon: IconType
  type: string
  color: string
}

const skills: SkillItem[] = [
  { name: 'Next.js', icon: SiNextdotjs, type: 'FRAMEWORK', color: '#ffffff' },
  { name: 'React', icon: SiReact, type: 'LIBRARY', color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, type: 'LANGUAGE', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, type: 'STYLING', color: '#06B6D4' },
  { name: 'Framer Motion', icon: SiFramer, type: 'MOTION', color: '#0055FF' },
  { name: 'Laravel', icon: SiLaravel, type: 'FRAMEWORK', color: '#FF2D20' },
  { name: 'Node.js', icon: SiNodedotjs, type: 'RUNTIME', color: '#339933' },
  { name: 'Supabase', icon: SiSupabase, type: 'DATABASE', color: '#3ECF8E' },
  { name: 'MySQL', icon: SiMysql, type: 'DATABASE', color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, type: 'DATABASE', color: '#4169E1' },
  { name: 'Kotlin', icon: SiKotlin, type: 'LANGUAGE', color: '#7F52FF' },
  { name: 'Flutter', icon: SiFlutter, type: 'MOBILE', color: '#02569B' },
  { name: 'Docker', icon: SiDocker, type: 'TOOL', color: '#2496ED' },
  { name: 'Git', icon: SiGit, type: 'VERSION CONTROL', color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, type: 'TOOL', color: '#ffffff' },
]

export function SkillsSection() {
  const techCount = skills.length
  const techLabel = `${techCount === 1 ? 'TECHNOLOGY' : 'TECHNOLOGIES'}`

  const expYears = 1
  const expLabel = `${expYears === 1 ? 'YEAR' : 'YEARS'} EXPERIENCE`

  return (
    <SectionWrapper id='skills' className='bg-linear-to-b from-transparent via-mc-obsidian/80 to-transparent relative'>
      {/* Optional inner gradient for smoother blending */}
      <div className='absolute inset-0 bg-linear-to-b from-[#000000] via-mc-obsidian to-[#000000] -z-10' />
      <div className='relative grid lg:grid-cols-[1fr_2fr] gap-12 max-w-[1200px] mx-auto px-6 md:px-12 py-24'>
        
        {/* Left column */}
        <div className=' lg:top-32 lg:self-start flex flex-col'>
          <h2 className='font-pixel leading-none flex flex-col gap-2 mb-6'>
            <div className='text-4xl sm:text-5xl lg:text-6xl text-mc-gold'>TECH</div>
            <div className='text-4xl sm:text-5xl lg:text-6xl text-mc-gold'>STACK</div>
          </h2>
          <p className='text-mc-gray/80 leading-relaxed text-sm md:text-base mb-10'>
            Here is a curated list of tools and technologies I use to build scalable, high-performance applications across web and mobile platforms.
          </p>

          {/* Stats Row */}
          <div className='flex items-center gap-6 mb-2 lg:mb-12'>
            <div className='flex flex-col'>
              <span className='font-pixel text-4xl text-mc-gold mb-2'>{techCount}</span>
              <span className='text-xs uppercase tracking-wider text-mc-gray/60'>{techLabel}</span>
            </div>
            <div className='h-12 w-px bg-white/10'></div>
            <div className='flex flex-col'>
              <span className='font-pixel text-4xl text-mc-gold mb-2'>{expYears}</span>
              <span className='text-xs uppercase tracking-wider text-mc-gray/60'>{expLabel}</span>
            </div>
          </div>

        </div>

        {/* Right column */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8'>
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className='flex flex-col group'
              >
                <div className='text-3xl mb-3 hover:brightness-125 transition-all duration-300' style={{ color: skill.color }}>
                  <Icon />
                </div>
                <h3 className='font-bold text-mc-white mb-1'>
                  {skill.name}
                </h3>
                <span className='text-xs uppercase tracking-wider text-mc-gray/60 mb-2'>
                  {skill.type}
                </span>
                
                {/* Divider */}
                <div className='flex items-center'>
                  <div className='w-6 h-px bg-mc-gold' />
                  <div className='flex-1 h-px bg-mc-white/10' />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </SectionWrapper>
  )
}
