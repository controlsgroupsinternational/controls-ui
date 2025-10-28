'use client'

import React, { useCallback, useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import useClickOutside from './useClickOutside'
import { Button, Popover, PopoverContent, PopoverTrigger } from '..'
import { convertHexToRGBA } from '../../lib/utils/colors'

export const PopoverPicker = ({ color, onChange }) => {
  const popover = useRef()
  const [isOpen, toggle] = useState(false)

  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' asChild className='p-2'>
          <div
            className='cursor-pointer col-span-2'
            onClick={() => toggle(true)}
            style={{ backgroundColor: convertHexToRGBA(color, 0.2), color }}
          >
            Seleccionar
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-min'>
        {
          isOpen && (
            <div className='popover' ref={popover}>
              <HexColorPicker color={color} onChange={onChange} />
            </div>
          )
        }
      </PopoverContent>
    </Popover>
  )
}
