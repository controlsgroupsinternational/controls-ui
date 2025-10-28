import { IListPagination, IListColumn } from './types';

export interface ListDataToFormat {
    __typename?: string;
    count: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    page: number;
    docs: any[];
}
export declare const formatListPagination: (dataToFormat: DataToFormat) => IListPagination;
export declare const listCamelToSnake: (str: string | unknown) => any;
export declare const initialListPagination: {
    limit: number;
    page: number;
};
export declare const generateUUIDToList: () => any;
export declare const insertColumnList: (newColumn: IListColumn<any>, originalColumn: IListColumn<any>[]) => IListColumn<any>[];
