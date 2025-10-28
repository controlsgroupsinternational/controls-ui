export * from './fetcher'
export * from './simulateFetch'
export * from './colors'
export * from './formatters'
export * from './PHONE_LINE_CODES'
export * from './CI_TYPES'

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
