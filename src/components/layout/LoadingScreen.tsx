'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [percent, setPercent] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      const obj = { value: 0 }

      tl.to(obj, {
        value: 100,
        duration: 2.2,
        ease: 'power1.inOut',
        onUpdate: () => setPercent(Math.round(obj.value)),
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => setVisible(false),
          })
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  if (!visible) return null

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 z-9999 flex flex-col items-center justify-center bg-mc-void select-none pointer-events-auto'
    >
      <div className="flex flex-col items-center gap-6">
        {/* Pixel Spinner: 4 blocks pulsing in a clockwise circle */}
        <div className="grid grid-cols-2 gap-1.5 w-9 h-9">
          <div className="w-3.5 h-3.5 bg-mc-lava rounded-xs animate-pulse" style={{ animationDelay: '0s', animationDuration: '1s' }} />
          <div className="w-3.5 h-3.5 bg-mc-lava rounded-xs animate-pulse" style={{ animationDelay: '0.25s', animationDuration: '1s' }} />
          <div className="w-3.5 h-3.5 bg-mc-lava rounded-xs animate-pulse" style={{ animationDelay: '0.75s', animationDuration: '1s' }} />
          <div className="w-3.5 h-3.5 bg-mc-lava rounded-xs animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '1s' }} />
        </div>

        {/* Text and Percentage */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-pixel text-[10px] tracking-[0.25em] text-mc-white">
            LOADING TERRAIN
          </span>
          <span className="font-pixel text-xs text-mc-gray/60 tracking-wider">
            {percent}%
          </span>
        </div>

        {/* Minimal Progress Bar (single thin line) */}
        <div className="w-48 h-[2.5px] bg-[#1c1c1c] overflow-hidden rounded-full relative">
          <div 
            ref={progressBarRef}
            className="h-full bg-mc-lava transition-all duration-100 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  )
}

