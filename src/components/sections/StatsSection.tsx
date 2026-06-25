'use client'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StatCard } from '@/components/ui/StatCard'
import { Stat } from '@/types'
import statsData from '@/data/stats.json'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const stats = statsData as Stat[]

gsap.registerPlugin(ScrollTrigger)

export function StatsSection() {
  const [displayValues, setDisplayValues] = useState<number[]>(
    stats.map(() => 0)
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#stats',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          stats.forEach((stat, i) => {
            const obj = { value: 0 }
            gsap.to(obj, {
              value: stat.value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                setDisplayValues(prev => {
                  const newValues = [...prev]
                  newValues[i] = Math.round(obj.value)
                  return newValues
                })
              }
            })
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper id='stats'>
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
            <StatCard stat={stat} displayValue={displayValues[i]} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
