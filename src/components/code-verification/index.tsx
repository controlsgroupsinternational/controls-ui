'use client'

import { PinField, PinFieldProps } from 'react-pin-field'
import React from 'react'

import { cn } from '../../lib/utils'

export interface ICodeVerificationProps extends Omit<PinFieldProps, 'validate'> {
  onComplete: (code: string) => void
  mode: 'numeric' | 'alpha-numeric'
  length: number
  disabled?: boolean
  containerClassName?: string
  format?: (char: string) => string
}

export const CodeVerification = ({ onComplete, mode, length, disabled, tabIndex, autoFocus, containerClassName, className, ...rest }: ICodeVerificationProps) => {
  const [complete] = React.useState(false)

  return (
    <div className={cn('pin-field-container', containerClassName)}>
      <PinField
        className={cn('pin-field', { complete }, className)}
        onComplete={onComplete}
        validate={mode === 'numeric' ? '0123456789' : 'abcABC123'}
        disabled={disabled}
        length={length}
        {...rest}
      />
    </div>
  )
}
