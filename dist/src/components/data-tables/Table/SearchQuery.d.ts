import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface SearchQueryProps {
    id: string;
    label: string;
    form: UseFormReturn<any, any, any>;
    icon?: ReactNode;
    queryText: string;
}
export declare const SearchQuery: ({ id, form, label, icon, queryText }: SearchQueryProps) => import("react").JSX.Element;
export {};
