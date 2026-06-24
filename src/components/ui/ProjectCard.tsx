import { Project } from '@/types'
import { Badge } from './Badge'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn(
      'bg-mc-obsidian border border-mc-cobble p-5 flex flex-col gap-3 hover:border-mc-lava transition-colors duration-200',
      className
    )}>
      <h3 className='font-pixel text-mc-white text-sm'>{project.title}</h3>
      <p className='text-mc-gray text-sm leading-relaxed flex-1'>{project.description}</p>
      <div className='flex flex-wrap gap-1.5 mt-auto'>
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>
      <div className='flex gap-3 mt-1'>
        {project.url && (
          <a href={project.url} target='_blank' rel='noopener noreferrer'
            className='text-xs text-mc-sky hover:text-mc-white transition-colors'>
            Live →
          </a>
        )}
        {project.github && (
          <a href={project.github} target='_blank' rel='noopener noreferrer'
            className='text-xs text-mc-gray hover:text-mc-white transition-colors'>
            GitHub →
          </a>
        )}
      </div>
    </div>
  )
}
