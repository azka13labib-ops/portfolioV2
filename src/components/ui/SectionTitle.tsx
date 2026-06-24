import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className='font-pixel text-2xl md:text-3xl text-mc-white mb-3'>{title}</h2>
      {subtitle && (
        <p className='text-mc-gray text-sm'>{subtitle}</p>
      )}
      <div className='mt-4 mx-auto w-16 h-0.5 bg-mc-lava' />
    </div>
  )
}
