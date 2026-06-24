'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Project } from '@/types'
import projectsData from '@/data/projects.json'
import { cn } from '@/lib/utils'

const projects = projectsData as Project[]
const CATEGORIES = ['all', 'web', 'mobile', 'fullstack', 'other'] as const

export function ProjectsSection() {
  const [active, setActive] = useState<string>('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <SectionWrapper id='projects' className='bg-mc-obsidian/30'>
      <SectionTitle title='Projects' subtitle='Things I have built' />

      {/* Filter tabs */}
      <div className='flex gap-2 justify-center flex-wrap mb-10'>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'font-pixel text-xs px-4 py-1.5 border transition-colors duration-150',
              active === cat
                ? 'bg-mc-lava border-mc-lava text-mc-white'
                : 'border-mc-cobble text-mc-gray hover:border-mc-lava hover:text-mc-lava'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto'>
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
