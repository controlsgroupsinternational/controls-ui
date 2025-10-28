import { LucideIcon } from 'lucide-react';
import { PaginationState, RowSelectionState, Table } from '@tanstack/react-table';
import { ReactNode, Dispatch, SetStateAction } from 'react';

type TOptionItemToFilter = {
    label: string;
    value: string | boolean;
    icon?: LucideIcon;
};
export interface IItemToFilter {
    queryFilterColumnID?: string;
    columnID: string;
    label: string;
    icon?: ReactNode;
    options: TOptionItemToFilter[];
}
export interface ITablePaginationlabel {
    pluralItem: string;
    singularItem: string;
}
export interface IUrlUsersSWR {
    page?: number;
    initFetch?: boolean;
    search?: string;
}
export interface ITableSearchInput {
    placeholder: string;
}
export interface ITableQuery {
    queryKey: string;
    queryFn: any;
}
export interface ITableQueryData {
    info: {
        pageCount: number;
        totalItems: number;
        totalPages: number;
        currentPage: number;
        nextPage: number | null;
        prevPage: number | null;
    };
    results: any[];
}
export type TFilters = any[];
export interface IQueryParams<DynamicFilters> {
    pageIndex: number;
    pageSize: number;
    search: string;
    filters: DynamicFilters;
}
export interface IPaginationProps extends PaginationState {
    labels: ITablePaginationlabel;
    setPagination: Dispatch<SetStateAction<PaginationState>>;
}
export interface DataTablePaginationProps<TData> {
    table: Table<TData>;
    pagination?: IPaginationProps;
    rowsToSelect?: boolean;
}
export interface ISelection {
    rowSelection: RowSelectionState;
    setRowSelection: Dispatch<SetStateAction<RowSelectionState>>;
    getFullDataSelection?: (table: Table<any>) => void;
}
export interface ITableInputSearchProps {
    handleSearchWithParams?: (...args: any[]) => void;
    placeholder: string;
}
export type TColumnActions = {
    edit?: boolean;
    detail?: boolean;
    create?: boolean;
    delete?: boolean;
    removeLocalItem?: (id: string | number) => void;
};
export interface IGetEntityColumnsParams {
    selection?: boolean;
    id?: boolean;
    actions?: TColumnActions;
}
export {};
