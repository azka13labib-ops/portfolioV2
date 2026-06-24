import { JourneyItem } from '@/types'

interface TimelineItemProps {
  item: JourneyItem
  isLast?: boolean
}

export function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  return (
    <div className='flex gap-6'>
      <div className='flex flex-col items-center'>
        <div className='w-3 h-3 bg-mc-lava border border-mc-lava-light shrink-0 mt-1' />
        {!isLast && <div className='w-px flex-1 bg-mc-cobble mt-1' />}
      </div>
      <div className='pb-10'>
        {item.label && (
          <span className='text-xs text-mc-lava font-pixel mb-1 block'>{item.label}</span>
        )}
        <span className='text-xs text-mc-gray mb-1 block'>{item.year}</span>
        <h3 className='font-pixel text-mc-white text-sm mb-2'>{item.title}</h3>
        <p className='text-mc-gray text-sm leading-relaxed'>{item.description}</p>
      </div>
    </div>
  )
}
