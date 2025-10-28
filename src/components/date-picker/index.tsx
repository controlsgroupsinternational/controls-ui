'use client'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button } from '../button'
import { Calendar } from '../calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover'
import { UseFormReturn } from 'react-hook-form'
import { HTMLAttributes } from 'react'
import { DayPickerSingleProps } from 'react-day-picker'

export interface IGenericSelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  placeholder?: string
  tabIndex?: number
  id: string
  form: UseFormReturn<any, any, any>
  label?: string
  classNameContainer?: string
  classNameSelect?: string
  description?: string
  mode?: 'default' | 'single' | 'multiple' | 'range'
}

export function DatePickerForm({
  id,
  label,
  defaultValue,
  placeholder,
  description,
  form,
  tabIndex,
  classNameContainer,
  classNameSelect,
  mode
}) {
  return (
    <FormField
      control={form.control}
      name={id}
      defaultValue={defaultValue}
      render={({ field, formState }) => (
        <FormItem className={cn('w-full', classNameContainer)}>
          <div className='flex justify-start items-end'>
            { label && <FormLabel className='flex'>{ label }&nbsp;</FormLabel> }
            { formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span> }
          </div>

          { description && (<FormDescription className='text-xs'>{description}</FormDescription>) }

          <div className='my-2'></div>

          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  tabIndex={tabIndex}
                  variant={'outline'}
                  className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                >
                  {
                    field.value
                      ? format(field.value, 'PPP')
                      : <span>Seleccione una fecha</span>
                  }
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode={mode || 'single'}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  )
}
