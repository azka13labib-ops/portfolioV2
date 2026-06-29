'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FaGithub, FaDiscord, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { LuBriefcase, LuUsers, LuMessageSquare, LuInfo, LuSend } from 'react-icons/lu'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azka13labib-ops', icon: FaGithub },
  { label: 'Discord', href: 'https://discord.com/users/azkaaa6169', icon: FaDiscord },
  { label: 'Instagram', href: 'https://instagram.com/askagantengbngttt', icon: FaInstagram },
]

interface Topic {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  subject: string
  description: string
  placeholder: string
  tooltipColor: string
}

const TOPICS: Topic[] = [
  {
    id: 'hire',
    title: 'Hire Me',
    icon: LuBriefcase,
    color: 'text-mc-gold',
    subject: 'Project Inquiry / Freelance Work',
    description: 'Hire me for custom development jobs or fullstack roles.',
    placeholder: 'Hi Azka, I have an app/website project and would love to hire you. Here are the details...',
    tooltipColor: 'text-mc-gold'
  },
  {
    id: 'collab',
    title: 'Collaboration',
    icon: LuUsers,
    color: 'text-mc-lava',
    subject: 'Partnership / Collaboration Inquiry',
    description: 'Collaborate on open source, mods, or joint ventures.',
    placeholder: 'Hey Azka, I saw your portfolio and wanted to collaborate on a new project. I was thinking we could...',
    tooltipColor: 'text-mc-lava'
  },
  {
    id: 'hello',
    title: 'Say Hello',
    icon: LuMessageSquare,
    color: 'text-mc-sky',
    subject: 'Just saying hi!',
    description: 'Send feedback, ask questions, or just say hello.',
    placeholder: 'Hi Azka! Just wanted to drop by and say your Minecraft-themed portfolio is awesome! Keep it up...',
    tooltipColor: 'text-mc-sky'
  },
  {
    id: 'other',
    title: 'Other Inquiry',
    icon: LuInfo,
    color: 'text-mc-gray',
    subject: 'General Inquiry / Message',
    description: 'Anything else not covered by the other topics.',
    placeholder: 'Hi Azka, I wanted to reach out regarding...',
    tooltipColor: 'text-mc-gray'
  }
]

// Web Audio API Retro Sound Effects Generator (Lag-Free)
const playClickSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const audioCtx = new AudioContextClass()
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(140, audioCtx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(70, audioCtx.currentTime + 0.05)

    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05)

    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    osc.start()
    osc.stop(audioCtx.currentTime + 0.05)
  } catch {
    // Audio context may be blocked by browser policy until user click, which is fine
  }
}

const playLevelUpSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const audioCtx = new AudioContextClass()
    const now = audioCtx.currentTime
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98] // C5, E5, G5, C6, E6, G6
    notes.forEach((freq, idx) => {
      const time = now + idx * 0.08
      const osc = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, time)
      gainNode.gain.setValueAtTime(0.0, time)
      gainNode.gain.linearRampToValueAtTime(0.08, time + 0.02)
      gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.22)

      osc.connect(gainNode)
      gainNode.connect(audioCtx.destination)

      osc.start(time)
      osc.stop(time + 0.24)
    })
  } catch {}
}

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [activeTopic, setActiveTopic] = useState<string | null>(null)
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSelectTopic = useCallback((topic: Topic) => {
    playClickSound()
    if (activeTopic === topic.id) {
      setActiveTopic(null)
      setSubject('')
    } else {
      setActiveTopic(topic.id)
      setSubject(topic.subject)
    }
  }, [activeTopic])

  // Handle keyboard shortcuts (1-4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement?.tagName
      if (activeEl === 'INPUT' || activeEl === 'TEXTAREA') return

      if (e.key === '1') handleSelectTopic(TOPICS[0])
      if (e.key === '2') handleSelectTopic(TOPICS[1])
      if (e.key === '3') handleSelectTopic(TOPICS[2])
      if (e.key === '4') handleSelectTopic(TOPICS[3])
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleSelectTopic])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setIsSubmitting(true)
    playLevelUpSound()

    setTimeout(() => {
      setIsSubmitting(false)
      setShowToast(true)
      
      // Clear form states
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setActiveTopic(null)
    }, 1200)
  }

  // Toast self-dismiss timer
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const currentTopic = TOPICS.find((t) => t.id === activeTopic)
  const messagePlaceholder = currentTopic ? currentTopic.placeholder : 'Write your message here...'

  return (
    <>
      {/* Minecraft Advancement Toast */}
      <div
        className={`fixed top-24 right-5 z-50 flex items-center gap-3 bg-[#212121] border-4 border-t-mc-cobble border-l-mc-cobble border-b-[#0c0c0c] border-r-[#0c0c0c] p-3 shadow-2xl max-w-sm transition-all duration-500 transform ${
          showToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        style={{
          boxShadow: 'inset 2px 2px 0px #3c3c3c, inset -2px -2px 0px #151515, 0 10px 25px rgba(0,0,0,0.5)'
        }}
      >
        <div className='w-12 h-12 bg-[#8b8b8b] flex items-center justify-center border-2 border-t-[#555555] border-l-[#555555] border-b-[#dbdbdb] border-r-[#dbdbdb] shadow-inner shrink-0'>
          <LuSend className='w-6 h-6 text-mc-lava filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]' />
        </div>
        <div className='flex flex-col'>
          <span className='font-pixel text-mc-gold text-[11px] leading-none mb-1 drop-shadow-[1px_1px_0px_#000] tracking-wider uppercase'>
            Challenge Complete!
          </span>
          <span className='font-pixel text-mc-white text-[12px] leading-tight drop-shadow-[1px_1px_0px_#000]'>
            Message Sent!
          </span>
        </div>
      </div>

      <SectionWrapper id='contact' className='relative overflow-hidden'>
        {/* Ambient Glow */}
        <div className='absolute bottom-0 right-10 w-96 h-96 bg-mc-lava/5 rounded-full blur-[120px] -z-10 pointer-events-none' />
        <div className='absolute top-20 left-10 w-72 h-72 bg-orange-900/10 rounded-full blur-[100px] -z-10 pointer-events-none' />

        <SectionTitle title='Contact' subtitle="Let's build something together" />

        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-8 px-4'>
        
        {/* Left Column: Info & Socials */}
        <motion.div
          className='flex flex-col gap-6 w-full'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className='text-2xl sm:text-3xl font-bold text-mc-white mb-3'>
              Send me a <span className='text-mc-lava'>message.</span>
            </h3>
            <p className='text-mc-gray/80 leading-relaxed text-sm sm:text-base'>
              Apakah Anda sedang mencari developer untuk proyek Anda? Atau tertarik untuk menjalin kolaborasi profesional? 
              Silakan pilih topik pada menu di bawah atau tuliskan pesan Anda secara langsung.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <a href='mailto:Azka13labib@gmail.com' className='flex items-center gap-4 text-mc-gray hover:text-mc-white transition-all group w-fit'>
              <div className='w-12 h-12 bg-mc-obsidian border-2 border-mc-stone flex items-center justify-center group-hover:border-mc-lava group-hover:bg-mc-lava/10 transition-colors'>
                <FaEnvelope className='w-5 h-5 group-hover:text-mc-lava transition-colors' />
              </div>
              <div className='flex flex-col'>
                <span className='font-pixel text-[9px] uppercase tracking-widest text-mc-gray/60 mb-0.5'>Email</span>
                <span className='text-sm font-medium'>hello@azkalabib.com</span>
              </div>
            </a>

            {/* Social Links Row */}
            <div className='flex items-center gap-3'>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 bg-mc-obsidian border-2 border-mc-stone flex items-center justify-center text-mc-gray hover:text-mc-lava hover:border-mc-lava hover:bg-mc-lava/10 hover:-translate-y-1 transition-all'
                  title={s.label}
                  onClick={playClickSound}
                >
                  <s.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Minecraft UI Panel Form */}
        <motion.div
          className='w-full'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Minecraft 3D Bevel Panel Container */}
          <div className='bg-[#2c2c2c] p-6 border-4 border-t-[#5a5a5a] border-l-[#5a5a5a] border-b-[#0f0f0f] border-r-[#0f0f0f] shadow-2xl relative overflow-hidden'>
            
            {/* Header / Panel Title */}
            <div className='flex flex-col gap-1 mb-6'>
              <span className='font-pixel text-[10px] text-mc-gray uppercase tracking-widest'>Select Preset Inventory</span>
              
              {/* Inventory Slots (Hotbar style) */}
              <div className='flex items-center gap-2 bg-[#1e1e1e] p-1.5 border-4 border-t-[#0f0f0f] border-l-[#0f0f0f] border-b-mc-cobble border-r-mc-cobble rounded-sm w-fit'>
                {TOPICS.map((topic, index) => {
                  const isSelected = activeTopic === topic.id
                  return (
                    <div
                      key={topic.id}
                      onClick={() => handleSelectTopic(topic)}
                      onMouseEnter={() => setHoveredTopic(topic.id)}
                      onMouseLeave={() => setHoveredTopic(null)}
                      className={`relative w-14 h-14 flex items-center justify-center cursor-pointer transition-all border-2 ${
                        isSelected
                          ? 'border-[#ffffff]'
                          : 'border-transparent hover:border-[#ffffff]/40'
                      }`}
                      style={{
                        backgroundColor: isSelected ? '#8b8b8b' : 'rgba(139,139,139,0.3)',
                        boxShadow: isSelected
                          ? 'inset 3px 3px 0px #373737, inset -3px -3px 0px #ffffff'
                          : 'inset 3px 3px 0px #1a1a1a, inset -3px -3px 0px #555555'
                      }}
                    >
                      <topic.icon className={`w-6 h-6 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.85)] select-none ${topic.color}`} />
                      <span className='absolute bottom-1 right-1 text-[9px] font-pixel text-mc-white drop-shadow-[1.5px_1.5px_0px_#000]'>{index + 1}</span>

                      {/* Retro Tooltip Popup */}
                      <AnimatePresence>
                        {hoveredTopic === topic.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className='absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 z-50 pointer-events-none p-3 min-w-[200px] bg-linear-to-b from-[#100720]/95 to-[#100720]/95 border-2 border-[#2c0966] rounded'
                            style={{
                              boxShadow: '0 0 10px #100720'
                            }}
                          >
                            <div className='absolute inset-0.5 border border-[#5c0df6]/20 pointer-events-none rounded-xs' />
                            <p className={`font-pixel text-[11px] font-bold ${topic.tooltipColor} drop-shadow-[1px_1px_0px_#000] mb-1`}>
                              {topic.title}
                            </p>
                            <p className='font-pixel text-[9px] text-mc-gray drop-shadow-[1px_1px_0px_#000] leading-snug'>
                              {topic.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-1.5'>
                  <label className='font-pixel text-[10px] text-mc-gray uppercase tracking-widest'>Name</label>
                  <input
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Steve'
                    className='w-full bg-[#000000] text-[#e0e0e0] font-pixel text-xs px-3 py-3 border-2 border-[#555555] focus:border-[#ffffff] focus:outline-none transition-colors'
                    style={{
                      boxShadow: 'inset 2.5px 2.5px 0px #111111, inset -2.5px -2.5px 0px #3c3c3c'
                    }}
                  />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='font-pixel text-[10px] text-mc-gray uppercase tracking-widest'>Email</label>
                  <input
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='steve@mines.com'
                    className='w-full bg-[#000000] text-[#e0e0e0] font-pixel text-xs px-3 py-3 border-2 border-[#555555] focus:border-[#ffffff] focus:outline-none transition-colors'
                    style={{
                      boxShadow: 'inset 2.5px 2.5px 0px #111111, inset -2.5px -2.5px 0px #3c3c3c'
                    }}
                  />
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='font-pixel text-[10px] text-mc-gray uppercase tracking-widest'>Subject</label>
                <input
                  type='text'
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value)
                    // If manually typed, clear active topic unless it matches
                    const matched = TOPICS.find((t) => t.subject === e.target.value)
                    setActiveTopic(matched ? matched.id : null)
                  }}
                  placeholder='Project Collaboration'
                  className='w-full bg-[#000000] text-[#e0e0e0] font-pixel text-xs px-3 py-3 border-2 border-[#555555] focus:border-[#ffffff] focus:outline-none transition-colors'
                  style={{
                    boxShadow: 'inset 2.5px 2.5px 0px #111111, inset -2.5px -2.5px 0px #3c3c3c'
                  }}
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='font-pixel text-[10px] text-mc-gray uppercase tracking-widest'>Message</label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={messagePlaceholder}
                  className='w-full bg-[#000000] text-[#e0e0e0] font-pixel text-xs px-3 py-3 border-2 border-[#555555] focus:border-[#ffffff] focus:outline-none transition-colors resize-none'
                  style={{
                    boxShadow: 'inset 2.5px 2.5px 0px #111111, inset -2.5px -2.5px 0px #3c3c3c'
                  }}
                />
              </div>

              {/* Minecraft GUI Custom Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                onClick={playClickSound}
                className='w-full font-pixel text-xs py-3 text-center text-[#e0e0e0] hover:text-[#ffff55] drop-shadow-[1.5px_1.5px_0px_#000] transition-all bg-[#8b8b8b] border-2 border-t-[#dbdbdb] border-l-[#dbdbdb] border-b-[#555555] border-r-[#555555] active:border-t-[#555555] active:border-l-[#555555] active:border-b-[#dbdbdb] active:border-r-[#dbdbdb] active:bg-[#555555] active:pt-3.5 active:pb-2.5 cursor-pointer hover:bg-[#9c9c9c] disabled:opacity-50 disabled:cursor-not-allowed select-none'
              >
                {isSubmitting ? '/sending...' : '/send_message'}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  </>
)
}

