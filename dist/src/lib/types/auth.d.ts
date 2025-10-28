import { loginSchema } from '../schemas/login.schema';
import { z } from 'zod';

export interface FormLoginData extends z.infer<typeof loginSchema> {
}
export interface UserAuthenticated {
    id: string;
    name: string;
    email: string;
}
