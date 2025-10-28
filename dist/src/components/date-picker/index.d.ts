import { HTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface IGenericSelectProps extends HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    placeholder?: string;
    tabIndex?: number;
    id: string;
    form: UseFormReturn<any, any, any>;
    label?: string;
    classNameContainer?: string;
    classNameSelect?: string;
    description?: string;
    mode?: 'default' | 'single' | 'multiple' | 'range';
}
export declare function DatePickerForm({ id, label, defaultValue, placeholder, description, form, tabIndex, classNameContainer, classNameSelect, mode }: {
    id: any;
    label: any;
    defaultValue: any;
    placeholder: any;
    description: any;
    form: any;
    tabIndex: any;
    classNameContainer: any;
    classNameSelect: any;
    mode: any;
}): import("react").JSX.Element;
