'use client'

import * as React from 'react'

import { cn } from '../lib/utils'
import { UseFormReturn } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, Skeleton } from './'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextareaUI = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
TextareaUI.displayName = 'TextareaUI'

export interface ITextareaProps extends Omit<TextareaProps, 'form'> {
  id: string
  form: UseFormReturn<any, any, any>
  label?: string
  className?: string
  description?: string
  placeholder?: string
  containerClassName?: string
  isLoading?: boolean
}

const TextArea = ({ id, form, label, className, description, placeholder, containerClassName, isLoading, ...rest }: ITextareaProps) => {
  if (isLoading || (isLoading && rest.readOnly)) {
    return (
      <div className={cn('w-full')}>
        <div className='flex justify-start items-end'>
          {label && <Skeleton className='h-5 w-full max-w-[90px]' />}
        </div>

        {description && <Skeleton className='h-5 w-full max-w-[150px] my-2' />}

        <div className='relative'>
          <Skeleton
            className={cn('w-full h-9 mt-2')}
          />
        </div>
      </div>
    )
  }

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field, formState }) => (
        <FormItem className={cn('w-full', containerClassName)}>
          <div className='flex justify-start items-end'>
            {label && <FormLabel className='flex'>{label}&nbsp;</FormLabel>}
            {formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span>}
          </div>

          {description && (<FormDescription className='text-xs'>{description}</FormDescription>)}

          <div className='my-2'></div>

          <FormControl>
            <TextareaUI
              placeholder={placeholder}
              className={cn('resize-none', className)}
              {...field}
              {...rest}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export { TextareaUI, TextArea }
