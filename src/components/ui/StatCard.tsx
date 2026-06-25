import { Stat } from '@/types'

interface StatCardProps {
  stat: Stat
  displayValue?: number
}

export function StatCard({ stat, displayValue }: StatCardProps) {
  return (
    <div className='bg-mc-obsidian border border-mc-cobble p-6 text-center'>
      <div className='font-pixel text-3xl text-mc-gold mb-2'>
        {displayValue ?? stat.value}{stat.suffix}
      </div>
      <div className='text-mc-gray text-sm'>{stat.label}</div>
    </div>
  )
}
