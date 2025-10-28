import { ReactNode, HTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface IGenericSelectItems {
    label: string;
    icon?: ReactNode;
    value: boolean | string | number;
    disabled?: boolean;
}
export interface IGenericSelectProps extends HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    placeholder?: string;
    tabIndex?: number;
    items: IGenericSelectItems[];
    id: string;
    form: UseFormReturn<any, any, any>;
    label?: string;
    classNameContainer?: string;
    classNameSelect?: string;
    classNameGroup?: string;
    description?: string;
    disabled?: boolean;
    isLoading?: boolean;
}
export declare const GenericSelect: ({ id, label, defaultValue, placeholder, description, items, form, tabIndex, classNameContainer, classNameSelect, classNameGroup, disabled, isLoading }: IGenericSelectProps) => import("react").JSX.Element;
