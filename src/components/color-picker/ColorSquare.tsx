'use client'

import type { HTMLAttributes } from 'react'

import { convertHexToRGBA } from '../../lib/utils/colors'
import { cn } from '../../lib/utils'

interface IColorSquareProps extends HTMLAttributes<HTMLDivElement> {
  color: string
}

export const ColorSquare = ({ color, className, onClick }: IColorSquareProps) => {
  return (
    <div className='p-1 bg-white rounded-md flex justify-center items-center w-full' style={{ backgroundColor: convertHexToRGBA(color, 0.1) }}>
      <div
        onClick={onClick}
        style={{ backgroundColor: color }}
        className={cn('cursor-pointer rounded-md h-10 w-10', className)}
      />
    </div>
  )
}
