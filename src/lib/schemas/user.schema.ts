import * as z from 'zod'
import { COMMON_VALIDATORS } from './common.schema'

const { STRING, EMAIL, BOOLEAN, NUMBER, PASSWORD } = COMMON_VALIDATORS

const ROLE = z.enum(['OPERATOR', 'SUPERVISOR', 'COORDINATOR', 'ADMINISTRATOR'])
const IDENTIFIER_TYPE = z.enum(['E', 'V', 'P'])

const IDENTIFIER_SCHEMA = z.object({
  type: IDENTIFIER_TYPE,
  number: NUMBER,
  image: STRING
})

export const USER_BASE_SCHEMA = z.object({
  names: STRING,
  username: STRING,
  surnames: STRING,
  email: EMAIL,
  photo: STRING,
  phone: STRING,
  ci: IDENTIFIER_SCHEMA,
  role: ROLE,
  isActive: BOOLEAN,
})

export const CREATE_USER_SCHEMA = USER_BASE_SCHEMA.extend({
  password: PASSWORD
})

export const USER_EDIT_SCHEMA = USER_BASE_SCHEMA.extend({})

export const USER_UPDATE_PASSWORD = USER_BASE_SCHEMA.extend({
  password: PASSWORD,
  confirmPassword: PASSWORD
}).omit({
  email: true,
  names: true,
  username: true,
  surnames: true,
  photo: true,
  phone: true,
  ci: true,
  role: true,
  isActive: true,
})

export const USER_DETAIL_SCHEMA = USER_BASE_SCHEMA.extend({
  id: STRING,
  createdAt: STRING,
  updatedAt: STRING,
})

export interface IUser extends z.infer<typeof USER_BASE_SCHEMA> {}
export interface ICreateUser extends z.infer<typeof CREATE_USER_SCHEMA> {}
export interface IEditUser extends z.infer<typeof USER_EDIT_SCHEMA> {}
export interface IUpdateUserPassword extends z.infer<typeof USER_UPDATE_PASSWORD> {}
export interface IUserDetail extends z.infer<typeof USER_DETAIL_SCHEMA> {}
