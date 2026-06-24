'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function AboutSection() {
  return (
    <SectionWrapper id='about' className='bg-mc-obsidian/30'>
      <SectionTitle title='About Me' subtitle='The developer behind the keyboard' />
      <motion.div
        className='max-w-2xl mx-auto text-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* TODO: ganti dengan foto/avatar kamu di /public/assets/images/avatar.png */}
        <div className='w-24 h-24 mx-auto mb-6 border-2 border-mc-lava bg-mc-stone' />
        <p className='text-mc-gray leading-relaxed text-sm md:text-base'>
          {/* TODO: ganti dengan bio kamu */}
          Seorang Full Stack Developer yang passionate dalam membangun produk digital.
          Mulai dari web app, mobile, sampai backend — I build things that work.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
