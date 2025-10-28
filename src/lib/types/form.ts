import type { RegisterOptions } from 'react-hook-form'

export type IFormRules<T extends string> = {
  // eslint-disable-next-line no-unused-vars
  [key in T]: RegisterOptions
}
