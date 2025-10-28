'use client'

import * as React from 'react'

import { cn } from '../../lib/utils'
import { FieldPassword } from './field-password'
import { Field } from './field'
import { InputProps } from './types'


export interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const InputUI = React.forwardRef<HTMLInputElement, InputUIProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

InputUI.displayName = 'InputUI'

export function Input({ children, id, label, classNameContainer, description, icon, isLoading, iconDirection = 'left', ...rest }: InputProps) {
  const validateInputIconClassNames = () => {
    if (iconDirection === 'left') {
      if (icon || rest.type === 'password') return 'pl-9'
      else ''
    }

    if (iconDirection === 'right') {
      return 'pr-9'
    }

    return ''
  }

  if (rest.type === 'password') {
    return (
      <FieldPassword
        id={id}
        validateInputIconClassNames={validateInputIconClassNames}
        classNameContainer={classNameContainer}
        iconDirection={iconDirection}
        description={description}
        isLoading={isLoading}
        label={label}
        // @ts-ignore
        form={rest?.form || null}
        rest={rest}
      />
    )
  }

  return (
    <Field
      id={id}
      validateInputIconClassNames={validateInputIconClassNames}
      classNameContainer={classNameContainer}
      iconDirection={iconDirection}
      description={description}
      isLoading={isLoading}
      label={label}
      // @ts-ignore
      form={rest?.form || null}
      rest={rest}
      icon={icon}
    />
  )
}

