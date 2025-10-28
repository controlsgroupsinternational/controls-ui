import { IStatus, TColumnActions } from '../lib/types';

interface IStatusColumnActionsProps {
    status: IStatus;
    actions?: TColumnActions;
    itemIdx?: number;
    handleDialogsOpen?: {
        detail?: () => void;
        edit?: () => void;
        create?: () => void;
        delete?: () => void;
    };
}
export declare const StatusDropdownActions: ({ status, actions, itemIdx, handleDialogsOpen }: IStatusColumnActionsProps) => import("react").JSX.Element;
export {};
