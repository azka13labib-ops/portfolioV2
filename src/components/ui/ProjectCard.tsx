/* eslint-disable @next/next/no-img-element */
'use client'

import { Project } from '@/types'
import { cn } from '@/lib/utils'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  className?: string
}

/** Renders a premium Dribbble-style 3-screen mobile showcase */
function MobileShowcase({ src, images, alt, className }: { src: string; images?: string[]; alt: string; className?: string }) {
  // Use provided images array, or fallback to using the same src 3 times
  const leftImg = images && images.length >= 1 ? images[0] : src
  const centerImg = images && images.length >= 2 ? images[1] : src
  const rightImg = images && images.length >= 3 ? images[2] : src

  return (
    <div className={cn('relative flex items-center justify-center w-full h-full bg-mc-void overflow-hidden group perspective-1000', className)}>
      {/* Background glow (uses center image) */}
      <div className='absolute inset-0 opacity-20'>
        <img src={centerImg} alt="" className='w-full h-full object-cover blur-3xl scale-150' />
      </div>

      <div className='relative z-10 flex items-center justify-center gap-4 sm:gap-6 w-full h-full px-4'>
        {/* Left Screen (offset up, slightly faded/smaller) */}
        <div className='hidden sm:block w-[30%] h-[120%] shrink-0 rounded-2xl overflow-hidden opacity-40 shadow-xl transform -translate-y-12 transition-transform duration-700 group-hover:-translate-y-16'>
          <img src={leftImg} alt="" className='w-full h-full object-cover object-top' />
        </div>

        {/* Center Screen (main focus, scaled up) */}
        <div className='w-[45%] sm:w-[35%] h-[90%] shrink-0 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105 z-20'>
          <img src={centerImg} alt={alt} className='w-full h-auto object-cover object-top' />
        </div>

        {/* Right Screen (offset down, slightly faded/smaller) */}
        <div className='hidden sm:block w-[30%] h-[120%] shrink-0 rounded-2xl overflow-hidden opacity-40 shadow-xl transform translate-y-12 transition-transform duration-700 group-hover:translate-y-16'>
          <img src={rightImg} alt="" className='w-full h-full object-cover object-top' />
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  const isMobileMockup = project.mockup === 'mobile'

  if (featured) {
    return (
      <div className={cn(
        'group relative flex flex-col md:flex-row overflow-hidden bg-mc-obsidian border border-white/5 hover:border-mc-lava/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,102,0,0.12)]',
        className
      )}>
        {/* Left: image area */}
        <div className='relative md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-[#111] shrink-0'>
          {project.image ? (
            isMobileMockup ? (
              <MobileShowcase src={project.image} images={project.images} alt={project.title} />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover object-top brightness-80 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700'
              />
            )
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-[#111]'>
              <div className='font-pixel text-mc-gray/30 text-xs'>no image</div>
            </div>
          )}
          {/* Dark vignette overlay */}
          <div className='absolute inset-0 bg-linear-to-r from-transparent via-transparent to-mc-obsidian md:block hidden' />
        </div>

        {/* Right: Content */}
        <div className='relative flex flex-col justify-center gap-5 p-8 md:p-10 flex-1'>
          {/* Featured label */}
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-mc-lava rounded-full animate-pulse' />
            <span className='font-pixel text-[9px] text-mc-lava uppercase tracking-[0.2em]'>Featured Project</span>
          </div>

          <h3 className='font-pixel text-mc-white text-2xl md:text-3xl leading-tight group-hover:text-mc-gold transition-colors duration-300'>
            {project.title}
          </h3>

          {/* Description box */}
          <div className='relative bg-[#111]/60 border border-white/5 p-4'>
            <p className='text-mc-gray text-sm leading-relaxed'>
              {project.description}
            </p>
          </div>

          {/* Tech tags */}
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span key={tag} className='font-pixel text-[9px] text-mc-gray border border-mc-cobble/40 px-2.5 py-1 uppercase tracking-wider hover:border-mc-lava/50 hover:text-mc-gold transition-colors cursor-default'>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className='flex items-center gap-4 pt-1'>
            {project.github && (
              <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 font-pixel text-[10px] text-mc-gray hover:text-white transition-colors group/link'>
                <FaGithub className='w-4 h-4' />
                <span className='group-hover/link:underline underline-offset-4'>Source</span>
              </a>
            )}
            {project.url && (
              <a href={project.url} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 font-pixel text-[10px] text-mc-lava hover:text-white transition-colors group/link'>
                <FaExternalLinkAlt className='w-3.5 h-3.5' />
                <span className='group-hover/link:underline underline-offset-4'>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Lava glow bar on left edge */}
        <div className='absolute top-0 left-0 bottom-0 w-[3px] bg-mc-lava/0 group-hover:bg-mc-lava transition-colors duration-500' />
      </div>
    )
  }

  // Regular card
  return (
    <div className={cn(
      'group relative flex flex-col h-full overflow-hidden bg-mc-obsidian border border-white/5 hover:border-mc-lava/40 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_24px_rgba(255,102,0,0.08)]',
      className
    )}>
      {/* Image Container */}
      <div className='relative w-full aspect-video overflow-hidden bg-[#0d0d0d]'>
        {project.image ? (
          isMobileMockup ? (
            <MobileShowcase src={project.image} images={project.images} alt={project.title} />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-full object-cover object-top brightness-80 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700'
            />
          )
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            {/* Pixel grid placeholder */}
            <div className='grid grid-cols-4 gap-1 opacity-20'>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={cn('w-4 h-4', i % 3 === 0 ? 'bg-mc-lava' : i % 3 === 1 ? 'bg-mc-cobble' : 'bg-mc-obsidian border border-white/10')} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom gradient for readability */}
        {!isMobileMockup && (
          <div className='absolute inset-0 bg-linear-to-t from-mc-obsidian via-mc-obsidian/20 to-transparent' />
        )}

        {/* Hover-reveal link buttons */}
        <div className='absolute top-3 right-3 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20'>
          {project.github && (
            <a href={project.github} target='_blank' rel='noopener noreferrer' onClick={e => e.stopPropagation()}
              className='w-8 h-8 flex items-center justify-center bg-black/80 border border-white/10 text-mc-gray hover:text-white hover:border-mc-lava transition-colors backdrop-blur-sm'>
              <FaGithub className='w-3.5 h-3.5' />
            </a>
          )}
          {project.url && (
            <a href={project.url} target='_blank' rel='noopener noreferrer' onClick={e => e.stopPropagation()}
              className='w-8 h-8 flex items-center justify-center bg-black/80 border border-white/10 text-mc-gray hover:text-mc-lava hover:border-mc-lava transition-colors backdrop-blur-sm'>
              <FaExternalLinkAlt className='w-3 h-3' />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col flex-1 p-5 gap-3'>
        <h3 className='font-pixel text-mc-white text-sm leading-snug group-hover:text-mc-gold transition-colors duration-300'>
          {project.title}
        </h3>

        <p className='text-mc-gray/70 text-sm leading-relaxed flex-1 line-clamp-2'>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-1.5 pt-1 border-t border-white/5'>
          {project.tags.map((tag) => (
            <span key={tag} className='font-pixel text-[8px] text-mc-gray/60 uppercase tracking-wider'>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className='h-[2px] w-0 group-hover:w-full bg-mc-lava transition-all duration-500 ease-out' />
    </div>
  )
}
