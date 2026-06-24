'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Skill } from '@/types'
import skillsData from '@/data/skills.json'

const skills = skillsData as Skill[]

export function SkillsSection() {
  return (
    <SectionWrapper id='skills'>
      <SectionTitle title='Skills & Arsenal' subtitle='Tools & technologies in my inventory' />
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-4xl mx-auto'>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className='bg-mc-obsidian border border-mc-cobble p-3 text-center hover:border-mc-lava transition-colors duration-200'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <p className='text-mc-gray text-xs'>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
