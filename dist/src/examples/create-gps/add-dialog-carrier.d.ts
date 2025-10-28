import { z } from 'zod';

export declare const gpsCarrierCreateSchema: z.ZodObject<{
    apn: z.ZodString;
    number: z.ZodString;
    carrier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    number?: string;
    apn?: string;
    carrier?: string;
}, {
    number?: string;
    apn?: string;
    carrier?: string;
}>;
export declare const AddDialogCarrier: () => import("react").JSX.Element;
