'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Project } from '@/types'
import projectsData from '@/data/projects.json'

const projects = projectsData as Project[]

export function ProjectsSection() {
  const [featured, ...rest] = projects

  return (
    <SectionWrapper id='projects' className='relative overflow-hidden'>
      {/* Ambient glow */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-mc-lava/5 rounded-full blur-[120px] -z-10 pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-orange-900/10 rounded-full blur-[100px] -z-10 pointer-events-none' />

      <SectionTitle title='Projects' subtitle='Things I have shipped' />

      <div className='max-w-6xl mx-auto flex flex-col gap-5'>
        {/* Featured card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={featured} featured />
          </motion.div>
        )}

        {/* Grid of smaller cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start'>
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
