import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('w-full px-6 md:px-16 lg:px-24 py-20', className)}
    >
      {children}
    </section>
  )
}
