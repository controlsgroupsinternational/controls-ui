import * as z from 'zod';
export declare const USER_BASE_SCHEMA: z.ZodObject<{
    names: z.ZodString;
    username: z.ZodString;
    surnames: z.ZodString;
    email: z.ZodString;
    photo: z.ZodString;
    phone: z.ZodString;
    ci: z.ZodObject<{
        type: z.ZodEnum<["E", "V", "P"]>;
        number: z.ZodNumber;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }>;
    role: z.ZodEnum<["OPERATOR", "SUPERVISOR", "COORDINATOR", "ADMINISTRATOR"]>;
    isActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
}, {
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
}>;
export declare const CREATE_USER_SCHEMA: z.ZodObject<z.objectUtil.extendShape<{
    names: z.ZodString;
    username: z.ZodString;
    surnames: z.ZodString;
    email: z.ZodString;
    photo: z.ZodString;
    phone: z.ZodString;
    ci: z.ZodObject<{
        type: z.ZodEnum<["E", "V", "P"]>;
        number: z.ZodNumber;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }>;
    role: z.ZodEnum<["OPERATOR", "SUPERVISOR", "COORDINATOR", "ADMINISTRATOR"]>;
    isActive: z.ZodBoolean;
}, {
    password: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    password?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
}, {
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    password?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
}>;
export declare const USER_EDIT_SCHEMA: z.ZodObject<z.objectUtil.extendShape<{
    names: z.ZodString;
    username: z.ZodString;
    surnames: z.ZodString;
    email: z.ZodString;
    photo: z.ZodString;
    phone: z.ZodString;
    ci: z.ZodObject<{
        type: z.ZodEnum<["E", "V", "P"]>;
        number: z.ZodNumber;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }>;
    role: z.ZodEnum<["OPERATOR", "SUPERVISOR", "COORDINATOR", "ADMINISTRATOR"]>;
    isActive: z.ZodBoolean;
}, {}>, "strip", z.ZodTypeAny, {
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
}, {
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
}>;
export declare const USER_UPDATE_PASSWORD: z.ZodObject<Omit<z.objectUtil.extendShape<{
    names: z.ZodString;
    username: z.ZodString;
    surnames: z.ZodString;
    email: z.ZodString;
    photo: z.ZodString;
    phone: z.ZodString;
    ci: z.ZodObject<{
        type: z.ZodEnum<["E", "V", "P"]>;
        number: z.ZodNumber;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }>;
    role: z.ZodEnum<["OPERATOR", "SUPERVISOR", "COORDINATOR", "ADMINISTRATOR"]>;
    isActive: z.ZodBoolean;
}, {
    password: z.ZodString;
    confirmPassword: z.ZodString;
}>, "role" | "email" | "username" | "isActive" | "names" | "surnames" | "photo" | "phone" | "ci">, "strip", z.ZodTypeAny, {
    password?: string;
    confirmPassword?: string;
}, {
    password?: string;
    confirmPassword?: string;
}>;
export declare const USER_DETAIL_SCHEMA: z.ZodObject<z.objectUtil.extendShape<{
    names: z.ZodString;
    username: z.ZodString;
    surnames: z.ZodString;
    email: z.ZodString;
    photo: z.ZodString;
    phone: z.ZodString;
    ci: z.ZodObject<{
        type: z.ZodEnum<["E", "V", "P"]>;
        number: z.ZodNumber;
        image: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }, {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    }>;
    role: z.ZodEnum<["OPERATOR", "SUPERVISOR", "COORDINATOR", "ADMINISTRATOR"]>;
    isActive: z.ZodBoolean;
}, {
    id: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
    createdAt?: string;
    updatedAt?: string;
}, {
    id?: string;
    role?: "OPERATOR" | "SUPERVISOR" | "COORDINATOR" | "ADMINISTRATOR";
    email?: string;
    username?: string;
    isActive?: boolean;
    names?: string;
    surnames?: string;
    photo?: string;
    phone?: string;
    ci?: {
        number?: number;
        type?: "V" | "P" | "E";
        image?: string;
    };
    createdAt?: string;
    updatedAt?: string;
}>;
export interface IUser extends z.infer<typeof USER_BASE_SCHEMA> {
}
export interface ICreateUser extends z.infer<typeof CREATE_USER_SCHEMA> {
}
export interface IEditUser extends z.infer<typeof USER_EDIT_SCHEMA> {
}
export interface IUpdateUserPassword extends z.infer<typeof USER_UPDATE_PASSWORD> {
}
export interface IUserDetail extends z.infer<typeof USER_DETAIL_SCHEMA> {
}
