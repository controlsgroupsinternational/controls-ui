import { UseFormReturn } from 'react-hook-form';
import { default as React } from 'react';

interface IToolbarProps {
    form: UseFormReturn<any, any, any>;
    onSubmit: (data: any) => Promise<void>;
}
export declare const TableToolbar: ({ form, onSubmit }: IToolbarProps) => React.JSX.Element;
export {};
