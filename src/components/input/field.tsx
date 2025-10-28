'use client'

import * as React from 'react'

import { cn } from '../../lib/utils'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, Label, InputUI, Skeleton } from '..'
import { InputFieldProps } from './types'

export const Field = ({ id, form, icon, label, description, iconDirection, classNameContainer, validateInputIconClassNames, isLoading, rest }: InputFieldProps) => {
  if (isLoading || (isLoading && rest.readOnly)) {
    return (
      <div className={cn('w-full', classNameContainer)}>
        <div className='flex justify-start items-end'>
          {label && <Skeleton className='h-5 w-full max-w-[90px]' />}
        </div>

        {description && <Skeleton className='h-5 w-full max-w-[150px] my-2' />}

        <div className='relative'>
          <Skeleton
            className={cn(validateInputIconClassNames(), 'w-full h-9 mt-2')}
          />
        </div>
      </div>
    )
  }

  if (rest.readOnly) {
    return (
      <div className={cn('w-full', classNameContainer)}>
        <div className='flex justify-start items-end'>
          {
            label && (
              <Label className='flex' htmlFor={id}>
                {label}&nbsp;
              </Label>
            )
          }
        </div>

        {description && (<p className='text-muted-foreground text-xs'>{description}</p>)}

        <div className='my-2'></div>

        <div className='relative'>
          {
            (iconDirection === 'left' && icon) && (
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                {icon}
              </div>
            )
          }

          <InputUI
            {...rest}
            className={validateInputIconClassNames()}
          />

          {
            (iconDirection === 'right' && icon) && (
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                {icon}
              </div>
            )
          }
        </div>
      </div>
    )
  }

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field, formState }) => (
        <FormItem className={cn('w-full', classNameContainer)}>
          <div className='flex justify-start items-end'>
            {label && <FormLabel className='flex'>{label}&nbsp;</FormLabel>}
            {formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span>}
          </div>

          {description && (<FormDescription className='text-xs'>{description}</FormDescription>)}

          <div className='my-2'></div>

          <div className='relative'>
            {
              (iconDirection === 'left' && icon) && (
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  {icon}
                </div>
              )
            }

            <FormControl>
              <InputUI
                {...field}
                {...rest}
                disabled={rest?.disabled}
                className={validateInputIconClassNames()}
              />
            </FormControl>

            {
              (iconDirection === 'right' && icon) && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                  {icon}
                </div>
              )
            }
          </div>
        </FormItem>
      )}
    />
  )
}
