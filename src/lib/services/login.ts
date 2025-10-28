import { z } from 'zod'
import { fetcher } from '../utils'
import { loginSchema } from '../schemas/login.schema'

export const login = async (data: z.infer<typeof loginSchema>) => fetcher('/api/login', { body: JSON.stringify({ ...data }) })