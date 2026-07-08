'use client'

import { useState } from 'react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FaGithub, FaDiscord, FaInstagram, FaEnvelope } from 'react-icons/fa'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azka13labib-ops', icon: FaGithub },
  { label: 'Discord', href: 'https://discord.com/users/azkaaa6169', icon: FaDiscord },
  { label: 'Instagram', href: 'https://instagram.com/askagantengbngttt', icon: FaInstagram },
]

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setShowToast(true)
      
      // Clear form states
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, 1000)
  }

  return (
    <SectionWrapper id='contact' className='pt-8 pb-24 relative border-t border-white/5 bg-[#030303]'>
      {/* Subtle top glow to separate section smoothly */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-linear-to-r from-transparent via-mc-lava/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-lg h-32 bg-mc-lava/5 blur-3xl rounded-full pointer-events-none" />
      
      <SectionTitle title='Contact' subtitle="Get in touch" />

      {/* Simple Toast */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#121214] border border-white/10 text-mc-white px-5 py-3.5 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-mc-lava animate-pulse" />
          <span className="text-xs font-medium tracking-wide">Message sent successfully!</span>
          <button onClick={() => setShowToast(false)} className="text-mc-gray/60 hover:text-mc-white text-sm ml-2">✕</button>
        </div>
      )}

      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 px-6'>
        
        {/* Left Column: Text & Socials */}
        <div className='flex flex-col justify-start gap-8'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-3xl font-bold text-mc-white tracking-tight'>
              Let&apos;s talk about <span className='text-mc-lava'>your project.</span>
            </h3>
            <p className='text-mc-gray/70 leading-relaxed text-base max-w-md'>
              Feel free to reach out if you want to collaborate, have a project in mind, or just want to say hi! I will get back to you as soon as possible.
            </p>
          </div>

          <div className='flex flex-col gap-6'>
            {/* Email link */}
            <a 
              href='mailto:Azka13labib@gmail.com' 
              className='flex items-center gap-4 text-mc-gray hover:text-mc-white transition-all group w-fit'
            >
              <div className='w-12 h-12 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center group-hover:border-mc-lava group-hover:bg-mc-lava/5 transition-colors'>
                <FaEnvelope className='w-5 h-5 group-hover:text-mc-lava transition-colors' />
              </div>
              <div className='flex flex-col'>
                <span className='text-[10px] uppercase tracking-widest text-mc-gray/40 font-semibold mb-0.5'>Email</span>
                <span className='text-base font-medium'>azka13labib@gmail.com</span>
              </div>
            </a>

            {/* Socials Row */}
            <div className='flex items-center gap-3'>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-mc-gray hover:text-mc-lava hover:border-mc-lava hover:bg-mc-lava/5 transition-all'
                  title={s.label}
                >
                  <s.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Simple Form */}
        <div className='bg-white/1 border border-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-xs'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-semibold text-mc-gray/50 uppercase tracking-widest'>Name</label>
              <input
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Steve'
                className='w-full bg-white/2 text-mc-white text-sm px-4 py-3.5 border border-white/5 rounded-xl focus:border-mc-lava/60 focus:bg-white/4 focus:outline-none transition-all duration-200'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs font-semibold text-mc-gray/50 uppercase tracking-widest'>Email</label>
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='steve@mines.com'
                className='w-full bg-white/2 text-mc-white text-sm px-4 py-3.5 border border-white/5 rounded-xl focus:border-mc-lava/60 focus:bg-white/4 focus:outline-none transition-all duration-200'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs font-semibold text-mc-gray/50 uppercase tracking-widest'>Subject</label>
              <input
                type='text'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder='Project Collaboration'
                className='w-full bg-white/2 text-mc-white text-sm px-4 py-3.5 border border-white/5 rounded-xl focus:border-mc-lava/60 focus:bg-white/4 focus:outline-none transition-all duration-200'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs font-semibold text-mc-gray/50 uppercase tracking-widest'>Message</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Write your message here...'
                className='w-full bg-white/2 text-mc-white text-sm px-4 py-3.5 border border-white/5 rounded-xl focus:border-mc-lava/60 focus:bg-white/4 focus:outline-none transition-all duration-200 resize-none'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full font-semibold text-sm py-4 text-center text-mc-white bg-mc-lava hover:bg-mc-lava/90 rounded-xl active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none shadow-lg shadow-mc-lava/10'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </SectionWrapper>
  )
}



