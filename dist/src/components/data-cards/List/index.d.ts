import { Dispatch, SetStateAction } from 'react';
import { IListPagination, IListColumn, IListSubmit, IListDynamicFilter } from './types';

interface CustomTableProps<DataSchema> {
    data: DataSchema[];
    pagination: IListPagination;
    columns: IListColumn<DataSchema>[];
    loading: boolean;
    error: boolean;
    onSubmitTable: IListSubmit;
    setSelectItem?: Dispatch<SetStateAction<any>>;
    filters?: IListDynamicFilter<DataSchema>[];
    limitOfMultiSelect?: number;
    setMultiItemsSelected?: Dispatch<SetStateAction<any[]>>;
    multiItemsSelected?: any[];
    cardsColsNumber?: number;
}
export declare function D4TCardsList<DataSchema>(props: CustomTableProps<DataSchema>): import("react").JSX.Element;
export {};
