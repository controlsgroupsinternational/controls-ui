import * as z from 'zod';
export declare const IDENTIFIER_TYPE_SCHEMA: z.ZodEnum<["EMAIL", "IDENTITY_CARD_NUMBER"]>;
export declare const LOGIN_WITH_EMAIL: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
export declare const LOGIN_WITH_DNI: z.ZodObject<{
    pidType: z.ZodEnum<["v", "e", "p", "j", "g"]>;
    pidNumber: z.ZodString;
    password: z.ZodString;
    some: z.ZodString;
}, "strip", z.ZodTypeAny, {
    some?: string;
    password?: string;
    pidType?: "p" | "g" | "v" | "e" | "j";
    pidNumber?: string;
}, {
    some?: string;
    password?: string;
    pidType?: "p" | "g" | "v" | "e" | "j";
    pidNumber?: string;
}>;
export declare const loginSchema: z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<["EMAIL", "IDENTITY_CARD_NUMBER"]>;
}, "strip", z.ZodTypeAny, {
    type?: "EMAIL" | "IDENTITY_CARD_NUMBER";
    password?: string;
    identifier?: string;
}, {
    type?: "EMAIL" | "IDENTITY_CARD_NUMBER";
    password?: string;
    identifier?: string;
}>;
export interface ILoginWithEmail extends z.infer<typeof LOGIN_WITH_EMAIL> {
}
export interface ILoginWithDNI extends z.infer<typeof LOGIN_WITH_DNI> {
}
