import { ReactNode } from 'react';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';

type TComboxItem = {
    value: string;
    label: string;
    image?: string;
    icon?: ReactNode;
};
interface IComboxProps {
    items: TComboxItem[];
    ctaPlaceholder: string;
    notFoundLabel: string;
    id: string;
    form: UseFormReturn<any>;
    value?: string;
    label: string;
    defaultValue?: string;
    setValue?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    tabIndex?: number;
    rules?: RegisterOptions<any>;
    buttonClassName?: string;
    popoverClassName?: string;
}
export declare function ComboBox({ id, form, label, items, rules, value, disabled, setValue, tabIndex, placeholder, defaultValue, notFoundLabel, ctaPlaceholder, buttonClassName, popoverClassName }: IComboxProps): import("react").JSX.Element;
export {};
