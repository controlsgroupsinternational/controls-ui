import * as z from 'zod';
export declare const COMMON_VALIDATORS: {
    STRING: z.ZodString;
    IDENTITY_CARD_NUMBER: z.ZodString;
    EMAIL: z.ZodString;
    BOOLEAN: z.ZodBoolean;
    NUMBER: z.ZodNumber;
    PASSWORD: z.ZodString;
    PID_TYPES: z.ZodEnum<["v", "e", "p", "j", "g"]>;
};
