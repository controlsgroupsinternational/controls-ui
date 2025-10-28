import { IStatus } from '../lib/types/status';
import { TColumnActions } from '../lib/types/tables';

interface ISubCategoryColumnActionsProps {
    status: IStatus;
    actions?: TColumnActions;
    itemIdx?: number;
}
export declare const StatusColumnActions: ({ status, actions, itemIdx }: ISubCategoryColumnActionsProps) => import("react").JSX.Element;
export {};
