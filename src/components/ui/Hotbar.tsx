/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'

interface HotbarProps {
  items: Array<{ id: string; image?: string; title: string }>
  activeIndex: number
  onChange: (index: number) => void
}

export function Hotbar({ items, activeIndex, onChange }: HotbarProps) {
  // Hotbar always has exactly 9 slots
  const slots = Array.from({ length: 9 })

  return (
    <div className='flex justify-center w-full mt-12 overflow-x-auto pb-4 px-4'>
      <div className='flex gap-0.5 bg-[#5e5e5e] p-1 border-4 border-t-[#2b2b2b] border-l-[#2b2b2b] border-b-white/20 border-r-white/20 shadow-2xl'>
        {slots.map((_, i) => {
          const item = items[i]
          const isActive = i === activeIndex

          return (
            <button
              key={i}
              onClick={() => {
                if (item) onChange(i)
              }}
              className={cn(
                'relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#8b8b8b] transition-all duration-75',
                isActive
                  ? 'border-4 border-white shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] z-10 scale-110'
                  : 'border-4 border-t-black/60 border-l-black/60 border-b-white/20 border-r-white/20 hover:bg-mc-gray opacity-80 hover:opacity-100',
                !item && 'cursor-default opacity-40 hover:opacity-40 hover:bg-[#8b8b8b]'
              )}
              title={item ? `${i + 1} - ${item.title}` : `Slot ${i + 1}`}
            >
              {item?.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]'
                />
              ) : item ? (
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-mc-lava/50 border border-mc-lava rounded-sm rotate-45 drop-shadow-md' />
              ) : null}

              {/* Number indicator */}
              <span className='absolute bottom-0 right-1 font-pixel text-[10px] text-white drop-shadow-[1px_1px_0_rgba(0,0,0,1)] pointer-events-none'>
                {i + 1}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
