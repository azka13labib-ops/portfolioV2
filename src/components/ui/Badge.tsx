import { cn } from '@/lib/utils'

interface BadgeProps {
  label: string
  className?: string
}

export function Badge({ label, className }: BadgeProps) {
  return (
    <span className={cn('text-xs px-2 py-0.5 border border-mc-cobble bg-mc-stone text-mc-gray', className)}>
      {label}
    </span>
  )
}
