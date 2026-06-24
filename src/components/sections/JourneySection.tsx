'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { JourneyItem } from '@/types'
import journeyData from '@/data/journey.json'

const journey = journeyData as JourneyItem[]

export function JourneySection() {
  return (
    <SectionWrapper id='journey'>
      <SectionTitle title='My Journey' subtitle='The path so far' />
      <motion.div
        className='max-w-xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {journey.map((item, i) => (
          <TimelineItem key={i} item={item} isLast={i === journey.length - 1} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
