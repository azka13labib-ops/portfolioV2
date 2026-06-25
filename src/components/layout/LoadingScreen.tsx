'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

const TOTAL_SEGMENTS = 24
const TITLE = 'LOADING TERRAIN'
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 5 + 2,
  x: Math.random() * 100,
  delay: Math.random() * 3,
  dur: Math.random() * 4 + 3,
}))

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [percent, setPercent] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const scanRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  let status = 'Generating world chunks'
  if (percent > 30 && percent <= 60) status = 'Loading game assets'
  else if (percent > 60 && percent <= 90) status = 'Spawning entities'
  else if (percent > 90) status = 'Preparing spawn point'

  const filledSegments = Math.round((percent / 100) * TOTAL_SEGMENTS)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Particle float animations
      if (particlesRef.current) {
        const dots = particlesRef.current.querySelectorAll('.particle')
        dots.forEach((dot, i) => {
          const data = PARTICLES[i]
          gsap.set(dot, { y: '100vh', opacity: 0 })
          gsap.to(dot, {
            y: '-20vh',
            opacity: gsap.utils.random(0.3, 0.7),
            duration: data.dur,
            delay: data.delay,
            repeat: -1,
            ease: 'none',
            repeatDelay: Math.random() * 2,
          })
          // flicker
          gsap.to(dot, {
            opacity: 0,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            delay: data.delay + data.dur * 0.7,
            repeatDelay: data.dur * 0.3,
            ease: 'none',
          })
        })
      }

      // 2. Ambient glow pulse
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.15,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      // 3. Scanline sweep
      gsap.fromTo(
        scanRef.current,
        { y: '-100%' },
        { y: '200%', duration: 3, repeat: -1, ease: 'none', delay: 0.5 }
      )

      // 4. Card + title entrance
      gsap.from(cardRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      // 5. Title stagger reveal
      const chars = titleRef.current?.querySelectorAll('.char')
      if (chars) {
        gsap.from(chars, {
          opacity: 0,
          y: -12,
          stagger: 0.05,
          duration: 0.4,
          ease: 'back.out(1.5)',
          delay: 0.3,
        })
      }

      // 6. Main loading timeline
      const tl = gsap.timeline({ onComplete: () => {} })
      const obj = { value: 0 }

      tl.to(obj, {
        value: 100,
        duration: 3,
        ease: 'power1.inOut',
        onUpdate: () => setPercent(Math.round(obj.value)),
        onComplete: () => {
          // Shake + flash on finish
          gsap.to(cardRef.current, {
            x: gsap.utils.random(-6, 6),
            duration: 0.07,
            repeat: 5,
            yoyo: true,
            ease: 'none',
            onComplete: () => {
              gsap.set(cardRef.current, { x: 0 })
              gsap.to(containerRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: 'power2.in',
                onComplete: () => setVisible(false),
              })
            },
          })
        },
      }, 'start')

      // Progress bar pulse on leading edge
      gsap.to(progressRef.current, {
        boxShadow: '4px 0 18px 4px rgba(255,102,0,0.9)',
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  if (!visible) return null

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 z-9999 overflow-hidden flex flex-col items-center justify-center'
      style={{ background: '#080808' }}
    >
      {/* Grid BG */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,102,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,102,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating particles */}
      <div ref={particlesRef} className='absolute inset-0 pointer-events-none'>
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className='particle absolute'
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              backgroundColor: p.id % 3 === 0
                ? '#ff6600'
                : p.id % 3 === 1
                  ? '#fbbf24'
                  : '#5d8c3e',
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Scanline */}
      <div
        ref={scanRef}
        className='absolute inset-x-0 h-32 pointer-events-none'
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,102,0,0.04), transparent)',
        }}
      />

      {/* Ambient glow */}
      <div
        ref={glowRef}
        className='absolute pointer-events-none'
        style={{
          width: 500,
          height: 300,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(255,102,0,0.12) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />

      {/* Main card */}
      <div
        ref={cardRef}
        className='relative flex flex-col items-center gap-7 px-14 py-12'
        style={{
          background: 'rgba(15,15,15,0.95)',
          border: '1px solid #3c3c3c',
          minWidth: 380,
          boxShadow: '0 0 60px rgba(255,102,0,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Corner accents */}
        <div className='absolute top-0 left-0 w-3 h-3 border-t border-l border-mc-lava/50' />
        <div className='absolute top-0 right-0 w-3 h-3 border-t border-r border-mc-lava/50' />
        <div className='absolute bottom-0 left-0 w-3 h-3 border-b border-l border-mc-lava/50' />
        <div className='absolute bottom-0 right-0 w-3 h-3 border-b border-r border-mc-lava/50' />

        {/* Title with stagger */}
        <div ref={titleRef} className='flex gap-0 items-center'>
          {TITLE.split('').map((char, i) => (
            <span
              key={i}
              className='char font-pixel text-mc-white'
              style={{
                fontSize: '0.75rem',
                letterSpacing: char === ' ' ? '0.5em' : '0.15em',
                display: 'inline-block',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* Segmented progress bar */}
        <div className='flex flex-col items-center gap-2 w-full'>
          <div className='flex gap-[2px] w-full relative'>
            {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
              const filled = i < filledSegments
              const isLeading = i === filledSegments - 1
              return (
                <div
                  key={i}
                  className='flex-1 h-5 transition-colors duration-150'
                  style={{
                    backgroundColor: filled
                      ? isLeading ? '#ff8533' : '#cc5200'
                      : '#1a1a1a',
                    border: '1px solid rgba(0,0,0,0.5)',
                    boxShadow: isLeading ? '0 0 10px 2px rgba(255,102,0,0.7)' : 'none',
                  }}
                />
              )
            })}
            {/* Leading glow div */}
            <div
              ref={progressRef}
              className='absolute top-0 h-full pointer-events-none'
              style={{
                width: 4,
                left: `${percent}%`,
                backgroundColor: '#ff8533',
                boxShadow: '0 0 12px 4px rgba(255,102,0,0.8)',
                transition: 'left 0.1s linear',
              }}
            />
          </div>

          {/* Percent + status row */}
          <div className='flex justify-between items-center w-full'>
            <p className='font-pixel text-mc-gray text-[9px] tracking-wide'>{status}</p>
            <p
              className='font-pixel text-mc-lava text-sm'
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {percent}%
            </p>
          </div>
        </div>
      </div>

      {/* Footer tag */}
      <p
        className='font-pixel text-mc-cobble mt-8'
        style={{ fontSize: '9px', letterSpacing: '0.2em' }}
      >
        Alpha 1.0.0
      </p>
    </div>
  )
}
