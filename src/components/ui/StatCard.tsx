import { Stat } from '@/types'

interface StatCardProps {
  stat: Stat
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className='bg-mc-obsidian border border-mc-cobble p-6 text-center'>
      <div className='font-pixel text-3xl text-mc-gold mb-2'>
        {stat.value}{stat.suffix}
      </div>
      <div className='text-mc-gray text-sm'>{stat.label}</div>
    </div>
  )
}
