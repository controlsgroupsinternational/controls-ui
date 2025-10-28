import { loginSchema } from '../schemas/login.schema';
import { z } from 'zod';

export declare const login: (data: z.infer<typeof loginSchema>) => Promise<any>;
