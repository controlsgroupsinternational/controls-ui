import { z } from 'zod';

export declare const gpsCreateSchema: z.ZodObject<{
    carriers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodLazy<z.ZodNullable<z.ZodObject<{
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
    }>>>, "many">>>;
    description: z.ZodString;
    gpsModelID: z.ZodString;
    name: z.ZodString;
    serial: z.ZodString;
    gpsBrandID: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    description?: string;
    carriers?: {
        number?: string;
        apn?: string;
        carrier?: string;
    }[];
    gpsModelID?: string;
    serial?: string;
    gpsBrandID?: string;
}, {
    name?: string;
    description?: string;
    carriers?: {
        number?: string;
        apn?: string;
        carrier?: string;
    }[];
    gpsModelID?: string;
    serial?: string;
    gpsBrandID?: string;
}>;
export declare const FormCreateGPS: () => import("react").JSX.Element;
