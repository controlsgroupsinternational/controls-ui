import { ComboxItem } from './types';
import { UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';

interface CheckBoxFieldProps {
    form: UseFormReturn<any, any, any>;
    id: string;
    description: string;
    icon: ReactNode;
    placeholder: string;
    label: string;
    tabIndex: number;
    items: ComboxItem[];
    classNameContainer?: string;
    classNamePopover?: string;
    disabled?: boolean;
    selectAllLabel?: string;
}
export declare const CheckboxField: (props: CheckBoxFieldProps) => import("react").JSX.Element;
export {};
