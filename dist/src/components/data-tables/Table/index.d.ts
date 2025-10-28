import { Dispatch, SetStateAction } from 'react';
import { ITablePagination, ITableColumn, ITableSubmit, ITableDynamicFilter } from './types';

interface CustomTableProps<DataSchema> {
    data: DataSchema[];
    pagination: ITablePagination;
    columns: ITableColumn<DataSchema>[];
    loading: boolean;
    error: boolean;
    onSubmitTable: ITableSubmit;
    setSelectItem?: Dispatch<SetStateAction<any>>;
    filters?: ITableDynamicFilter<DataSchema>[];
    limitOfMultiSelect?: number;
    setMultiItemsSelected?: Dispatch<SetStateAction<any[]>>;
    multiItemsSelected?: any[];
    isFormatedUpperQueries?: boolean;
}
export declare function D4TTable<DataSchema>(props: CustomTableProps<DataSchema>): import("react").JSX.Element;
export {};
