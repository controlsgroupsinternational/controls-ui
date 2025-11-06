"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

export interface ITableFilterOption {
  id: string;
  label: string;
  value: string | boolean | number;
  icon?: ReactNode;
  selected?: boolean;
}

export interface ITableFilter {
  id: string;
  label: string;
  icon?: ReactNode;
  options: ITableFilterOption[];
}

export type PageQueries = {
  filters?: Record<string, string | boolean | unknown[]>;
  queries?: { field: string; text: string }[];
  page?: number;
  perPage?: number;
  requestOriginPath?: string;
};

type IDataProperty<Type> = {
  [Property in keyof Type as Exclude<Property, "__typename">]: Type[Property];
};

export interface ITableColumn<TDataSchema> {
  id: keyof IDataProperty<TDataSchema> | "actions" | "select" | "multi-select";
  label: string;
  filters?: ITableFilterOption[];
  isQuery?: boolean;
  render?: (item: IDataProperty<TDataSchema>) => ReactNode;
}

export interface ITableDynamicFilter<TDataSchema> {
  id: keyof IDataProperty<TDataSchema>;
  filters?: ITableFilterOption[];
}

export interface ITableQuery {
  id: string;
  label: string;
}

interface ITablePaginationLabel {
  plural?: string;
  single?: string;
}

export interface ITablePagination {
  labels?: ITablePaginationLabel;
  limit: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  pagesCount?: number;
}

export interface ITableSubmitParams {
  queries: ITableQuery[];
  filters: ITableFilter[];
  limit: number;
  page: number;
}

export interface ITableQueries {
  queries: { text: string; field: string }[];
  filters: ITableFilter[];
  limit?: number;
  page: number;
}

export type ITableSubmit = ({
  page,
  limit,
  queries,
  filters,
}: ITableQueries) => Promise<void>;

export interface IInitialTable<TData = any> {
  data: TData[] | [];
  filters: ITableFilter[];
  queries: ITableQuery[];
  showFilters: boolean;
  columns: ITableColumn<TData>[];
  pagination: ITablePagination;
  onSubmitTable: ITableSubmit;
  searchForm: UseFormReturn<any, any, any>;

  setShowFilters: (value: boolean) => void;
  setSearchForm: (searchForm) => void;
  selectOptionFilter: (
    filterId: string,
    optionId: string,
    optionValue: boolean,
  ) => void;
  resetOptionsByFilter: (filterId: string) => void;
  getFiltersWithOptionsSelected: () => any[];
  getGlobalFilters: () => any[];
  getFilterOptionsSelectedById: (filterId: string) => any[];
  resetFilters: () => void;
  nextPage: () => void;
  prevPage: () => void;
  updateLimit: (limit: number, page?: number) => void;
}

export interface ITableStore<TData> {
  data: TData[] | [];
  showFilters: boolean;
  columns: ITableColumn<TData>[];
  pagination: ITablePagination;

  filters?: ITableFilter[];
  queries?: ITableQuery[];

  onSubmitTable: ITableSubmit;

  selectOptionFilter: (
    filterId: string,
    optionId: string,
    optionValue: boolean,
  ) => void;
  getFiltersWithOptionsSelected: () => any[];
  getFilterOptionsSelectedById: (filterId: string) => any[];
  resetFilters: () => void;
  nextPage: () => void;
  prevPage: () => void;

  setShowFilters: (value: boolean) => void;
  setInitialTable: (initialState: IInitialTable<TData>) => void;
  updateLimit: (limit: number, page?: number) => void;
  updatePage: (page: number) => void;
  setPagination: (pagination: ITablePagination) => void;
  setColumns: (columns: ITableColumn<TData>[]) => void;
  setFilters: (filters: ITableFilter[]) => void;
  setQueries: (queries: ITableQuery[]) => void;
  setData: (data: TData[] | []) => void;
}

export interface ITableContextStore<TData = any> {
  data: TData[] | [];
  showFilters: boolean;
  columns: ITableColumn<TData>[];
  pagination: ITablePagination;
  searchForm?: UseFormReturn<any, any, any>;
  isFormatedUpperQueries?: boolean;

  multiItemsSelected: any[];
  setMultiItemsSelected: Dispatch<SetStateAction<any[]>>;
  limitOfMultiSelect: number;

  filters?: ITableFilter[];
  queries?: ITableQuery[];
  onSubmitTable: ITableSubmit;

  setSelectItem: Dispatch<SetStateAction<any>>;

  setSearchForm: (searchForm) => void;
  getGlobalFilters: () => any[];

  setShowFilters: (value: boolean) => void;
  selectOptionFilter: (
    filterId: string,
    optionId: string,
    optionValue: boolean,
  ) => void;
  getFiltersWithOptionsSelected: () => any[];
  getFilterOptionsSelectedById: (filterId: string) => any[];
  resetFilters: () => void;
  resetOptionsByFilter: (filterId: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  resetPage: () => void;
  updateLimit: (limit: number, page?: number) => void;
  onSelectAllItems?: (value: boolean, isOnlyUpdateValue?: boolean) => void;
  isSelectedAllItems?: boolean;
  setIsMultiSelect: Dispatch<SetStateAction<boolean>>;
  isMultiSelect: boolean;
}
