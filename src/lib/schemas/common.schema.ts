import * as z from 'zod'

const REGEXS = {
  STRING_REQUIRED: /^(?!\s*$).+/
}

export const COMMON_VALIDATORS = {
  STRING: z
    .string({ required_error: 'Requerido', invalid_type_error: 'Debe ser texto' })
    .regex(REGEXS.STRING_REQUIRED, 'Requerido'),

  IDENTITY_CARD_NUMBER: z
    .string({ required_error: 'Requerido', invalid_type_error: 'Identificación no valida' })
    .regex(REGEXS.STRING_REQUIRED, 'Requerido'),

  EMAIL: z
    .string({ required_error: 'Requerido', invalid_type_error: 'Correo no valido' })
    .regex(REGEXS.STRING_REQUIRED, 'Requerido')
    .email('Debe ser un correo valido'),

  BOOLEAN: z
    .boolean({ required_error: 'Requerido', invalid_type_error: 'Debe ser Booleano' }),

  NUMBER: z
    .number({ required_error: 'Requerido', invalid_type_error: 'Debe ser un numero' })
    .min(1, 'Requerido'),

  PASSWORD: z
    .string({ required_error: 'Requerido', invalid_type_error: 'Contraseña no valida' })
    .regex(REGEXS.STRING_REQUIRED, 'Requerido')
    .max(60, { message: 'Maximo 60 caracteres' }),

  PID_TYPES: z.enum(['v', 'e', 'p', 'j', 'g'])
}
