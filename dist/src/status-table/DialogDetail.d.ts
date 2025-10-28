import { IStatus } from '../lib/types/status';
import { default as React, Dispatch } from 'react';

interface IDialogDetailSubcategoryProps {
    status: IStatus;
    isOpenViewModel: boolean;
    setOpenViewModel: Dispatch<boolean>;
}
export declare const DialogDetailStatus: ({ status, isOpenViewModel, setOpenViewModel }: IDialogDetailSubcategoryProps) => React.JSX.Element;
export {};
