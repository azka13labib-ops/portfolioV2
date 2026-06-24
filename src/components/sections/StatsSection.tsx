'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StatCard } from '@/components/ui/StatCard'
import { Stat } from '@/types'
import statsData from '@/data/stats.json'

const stats = statsData as Stat[]

export function StatsSection() {
  return (
    <SectionWrapper id='stats' className='bg-mc-obsidian/30'>
      <SectionTitle title='Scoreboard' subtitle='My achievements in numbers' />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto'>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <StatCard stat={stat} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
