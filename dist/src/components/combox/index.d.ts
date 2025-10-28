import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

type TGenericComboxItem = {
    value: string;
    label: string;
    image?: string;
    icon?: ReactNode;
    disabled?: boolean;
};
interface IGenericComboxProps {
    items: TGenericComboxItem[];
    ctaPlaceholder: string;
    notFoundLabel: string;
    id: string;
    form: UseFormReturn<any>;
    label: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    tabIndex?: number;
    buttonClassName?: string;
    popoverClassName?: string;
    classNameGroup?: string;
    isLoading?: boolean;
}
export declare function GenericCombobox({ id, form, label, items, disabled, tabIndex, isLoading, placeholder, defaultValue, notFoundLabel, classNameGroup, ctaPlaceholder, buttonClassName, popoverClassName, }: IGenericComboxProps): import("react").JSX.Element;
export {};
