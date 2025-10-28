import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';

export declare enum Hydrocarbon {
    Diesel = "DIESEL",
    Gas = "GAS",
    Gasoline = "GASOLINE"
}
export declare const HydrocarbonSchema: z.ZodNativeEnum<typeof Hydrocarbon>;
export declare const isFormEdited: (form: UseFormReturn<any, any, any>) => boolean;
export declare const IDENTIFIER_TYPE_SCHEMA: z.ZodEnum<["EMAIL", "PID"]>;
export declare const pidLoginSchema: z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<["PID"]>;
}, "strip", z.ZodTypeAny, {
    type?: "PID";
    password?: string;
    identifier?: string;
}, {
    type?: "PID";
    password?: string;
    identifier?: string;
}>;
export declare const pidLoginSchemaForm: z.ZodObject<z.objectUtil.extendShape<{
    identifier: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<["PID"]>;
}, {
    pidType: z.ZodEnum<["v", "e", "p", "j", "g"]>;
    pidNumber: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "PID";
    password?: string;
    pidType?: "p" | "g" | "v" | "e" | "j";
    pidNumber?: string;
    identifier?: string;
}, {
    type?: "PID";
    password?: string;
    pidType?: "p" | "g" | "v" | "e" | "j";
    pidNumber?: string;
    identifier?: string;
}>;
export interface ILoginWithPID extends z.infer<typeof pidLoginSchemaForm> {
}
export declare const defaultLoginPID: ILoginWithPID;
declare function App(): import("react").JSX.Element;
export default App;
