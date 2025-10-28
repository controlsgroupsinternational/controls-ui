'use client'

import { Eye, EyeOff } from 'lucide-react'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, Label, InputUI, Skeleton } from '..'
import { InputFieldProps } from './types'

export const FieldPassword = ({ id, form, label, description, iconDirection, classNameContainer, isLoading, validateInputIconClassNames, rest }: InputFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false)

  if (isLoading) {
    return (
      <div className={cn('w-full', classNameContainer)}>
        <div className='flex justify-start items-end'>
          {label && <Skeleton className='h-5 w-full' />}
        </div>

        {description && <Skeleton className='h-5 w-full' />}

        <div className='my-2'></div>

        <div className='relative'>
          {
            (iconDirection === 'left') && (
              <Skeleton className='h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none' />
            )
          }

          <Skeleton
            className={validateInputIconClassNames()}
          />

          {
            (iconDirection === 'right') && (
              <Skeleton className='h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none' />
            )
          }
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
            (iconDirection === 'left') && (
              <>
                <button
                  type='button'
                  onClick={() => setShowPassword(prevState => !prevState)}
                  className='absolute inset-y-0 left-0 flex items-center pl-3 z-50'
                  tabIndex={-1}
                >
                  {
                    showPassword
                      ? <Eye size={18} />
                      : <EyeOff size={18} />
                  }
                </button>
              </>
            )
          }

          <InputUI
            {...rest}
            className={cn(validateInputIconClassNames(), rest.className)}
            type={showPassword ? 'text' : 'password'}
          />

          {
            (iconDirection === 'right') && (
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 z-10'>
                <button
                  type='button'
                  tabIndex={-1}
                  onClick={() => setShowPassword(prevState => !prevState)}
                >
                  {
                    showPassword
                      ? <Eye size={18} />
                      : <EyeOff size={18} />
                  }
                </button>
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

          <FormControl>
            <div className='relative'>
              {
                (iconDirection === 'left') && (
                  <>
                    <button
                      type='button'
                      onClick={() => setShowPassword(prevState => !prevState)}
                      className='absolute inset-y-0 left-0 flex items-center pl-3 z-50'
                      tabIndex={-1}
                      disabled={rest?.disabled}
                    >
                      {
                        showPassword
                          ? <Eye size={18} />
                          : <EyeOff size={18} />
                      }
                    </button>
                  </>
                )
              }

              <InputUI
                {...field}
                {...rest}
                disabled={rest?.disabled}
                className={cn(validateInputIconClassNames(), rest.className)}
                type={showPassword ? 'text' : 'password'}
              />

              {
                (iconDirection === 'right') && (
                  <div className='absolute inset-y-0 right-0 flex items-center pr-3 z-10'>
                    <button
                      type='button'
                      tabIndex={-1}
                      onClick={() => setShowPassword(prevState => !prevState)}
                    >
                      {
                        showPassword
                          ? <Eye size={18} />
                          : <EyeOff size={18} />
                      }
                    </button>
                  </div>
                )
              }
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
