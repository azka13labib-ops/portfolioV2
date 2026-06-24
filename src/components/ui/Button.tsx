import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'font-pixel text-sm px-5 py-2.5 transition-colors duration-150 cursor-pointer',
        variant === 'primary' && 'bg-mc-lava text-mc-white hover:bg-mc-lava-light active:bg-mc-lava-dark',
        variant === 'outline' && 'border border-mc-lava text-mc-lava hover:bg-mc-lava hover:text-mc-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
