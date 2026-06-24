'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'LI' },
  { label: 'Email', href: 'mailto:your@email.com', icon: '@' },
]

export function ContactSection() {
  return (
    <SectionWrapper id='contact'>
      <SectionTitle title='Contact' subtitle="Let's build something together" />
      <div className='max-w-xl mx-auto'>
        <motion.div
          className='bg-mc-obsidian border border-mc-cobble p-8 mb-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Simple form — TODO: wire ke email service (Resend/Formspree) */}
          <div className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Username'
              className='bg-mc-stone border border-mc-cobble text-mc-white px-4 py-2.5 text-sm focus:outline-none focus:border-mc-lava transition-colors placeholder:text-mc-gray'
            />
            <input
              type='email'
              placeholder='Email'
              className='bg-mc-stone border border-mc-cobble text-mc-white px-4 py-2.5 text-sm focus:outline-none focus:border-mc-lava transition-colors placeholder:text-mc-gray'
            />
            <textarea
              rows={4}
              placeholder='Message'
              className='bg-mc-stone border border-mc-cobble text-mc-white px-4 py-2.5 text-sm focus:outline-none focus:border-mc-lava transition-colors placeholder:text-mc-gray resize-none'
            />
            <Button variant='primary' className='w-full'>/send Message</Button>
          </div>
        </motion.div>

        {/* Social links */}
        <div className='flex gap-4 justify-center'>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target='_blank'
              rel='noopener noreferrer'
              className='font-pixel text-xs text-mc-gray hover:text-mc-lava transition-colors border border-mc-cobble px-4 py-2 hover:border-mc-lava'
            >
              [{s.icon}] {s.label}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
