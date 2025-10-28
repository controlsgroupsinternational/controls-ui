import { z } from "zod"
import { loginSchema } from "../schemas/login.schema"

export interface FormLoginData extends z.infer<typeof loginSchema> {}

export interface UserAuthenticated {
  id: string
  name: string
  email: string
}