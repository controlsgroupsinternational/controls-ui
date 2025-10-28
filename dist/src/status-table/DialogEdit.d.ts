import { IStatus } from '../lib/types';
import { default as React, Dispatch } from 'react';

interface IDialogDetailSubcategoryProps {
    status: IStatus;
    isOpenEdit: boolean;
    setOpenEdit: Dispatch<boolean>;
}
export declare const DialogEditStatus: ({ status, isOpenEdit, setOpenEdit }: IDialogDetailSubcategoryProps) => React.JSX.Element;
export {};
