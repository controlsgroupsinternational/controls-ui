import * as z from 'zod'
import { COMMON_VALIDATORS } from '../../lib/schemas/common.schema'

const { EMAIL, PASSWORD, STRING, PID_TYPES: DNI_TYPES, IDENTITY_CARD_NUMBER: IDENTIFIER_NUMBER } = COMMON_VALIDATORS

export const IDENTIFIER_TYPE_SCHEMA = z.enum(['EMAIL', 'IDENTITY_CARD_NUMBER'])

export const LOGIN_WITH_EMAIL = z.object({
  email: EMAIL,
  password: PASSWORD
})

export const LOGIN_WITH_DNI = z.object({
  pidType: DNI_TYPES,
  pidNumber: STRING,
  password: PASSWORD,
  some: STRING
})

export const loginSchema = z.object({
  identifier: STRING,
  password: PASSWORD,
  type: IDENTIFIER_TYPE_SCHEMA
})

export interface ILoginWithEmail extends z.infer<typeof LOGIN_WITH_EMAIL> {}
export interface ILoginWithDNI extends z.infer<typeof LOGIN_WITH_DNI> {}
