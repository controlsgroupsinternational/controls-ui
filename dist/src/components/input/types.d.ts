import { UseFormReturn } from 'react-hook-form';

export interface InputPropsBase extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form' | 'type'> {
    id: string;
    label?: string;
    classNameContainer?: string;
    description?: string;
    type?: React.HTMLInputTypeAttribute;
    icon?: React.ReactElement;
    iconDirection?: 'left' | 'right';
    isLoading?: boolean;
}
export interface InputPropsReadOnly extends InputPropsBase {
    readOnly: true;
}
export interface InputPropsWithForm extends InputPropsBase {
    form: UseFormReturn<any, any, any>;
    readOnly?: false;
}
export type InputProps = InputPropsReadOnly | InputPropsWithForm;
export interface InputFieldProps extends InputPropsBase {
    form?: any;
    validateInputIconClassNames?: any;
    rest?: any;
}
