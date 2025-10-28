'use client'

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

export interface IListFilterOption {
  id: string;
  label: string;
  value: string | boolean;
  icon?: ReactNode;
  selected?: boolean;
}

export interface IListFilter {
  id: string;
  label: string;
  icon?: ReactNode;
  options: IListFilterOption[];
}

type IDataProperty<Type> = {
  [Property in keyof Type as Exclude<Property, "__typename">]: Type[Property];
};

export interface ICardData {
  id: string;
  label: string;
  description: string;
  content: ReactNode;
}

export interface IListColumn<TListSchema> {
  id: "label" | "description" | "content" | "actions";
  value: string;
  filters?: IListFilterOption[];
  label: string;
  isQuery?: boolean;
  render?: (item: IDataProperty<TListSchema>) => ReactNode;
}

export interface IListDynamicFilter<TDataSchema> {
  id: keyof IDataProperty<TDataSchema>;
  filters?: IListFilterOption[];
}

export interface IListQuery {
  id: string;
  label: string;
}

interface IListPaginationLabel {
  plural?: string;
  single?: string;
}

export interface IListPagination {
  labels?: IListPaginationLabel;
  limit: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export interface IListSubmitParams {
  queries: IListQuery[];
  filters: IListFilter[];
  limit: number;
  page: number;
}

export type IListSubmit = ({
  page,
  limit,
  queries,
  filters,
}: IListSubmitParams) => Promise<void>;

export interface IInitialList<TData = any> {
  data: TData[] | [];
  filters: IListFilter[];
  queries: IListQuery[];
  showFilters: boolean;
  columns: IListColumn<TData>[];
  pagination: IListPagination;
  onSubmitTable: IListSubmit;
  searchForm: UseFormReturn<any, any, any>;

  setShowFilters: (value: boolean) => void;
  setSearchForm: (searchForm) => void;
  selectOptionFilter: (
    filterId: string,
    optionId: string,
    optionValue: boolean
  ) => void;
  resetOptionsByFilter: (filterId: string) => void;
  getFiltersWithOptionsSelected: () => any[];
  getGlobalFilters: () => any[];
  getFilterOptionsSelectedById: (filterId: string) => any[];
  resetFilters: () => void;
  nextPage: () => void;
  prevPage: () => void;
  updateLimit: (limit: number) => void;
}

export interface IListStore<TData> {
  data: TData[] | [];
  showFilters: boolean;
  columns: IListColumn<TData>[];
  pagination: IListPagination;

  filters?: IListFilter[];
  queries?: IListQuery[];

  onSubmitTable: IListSubmit;

  selectOptionFilter: (
    filterId: string,
    optionId: string,
    optionValue: boolean
  ) => void;
  getFiltersWithOptionsSelected: () => any[];
  getFilterOptionsSelectedById: (filterId: string) => any[];
  resetFilters: () => void;
  nextPage: () => void;
  prevPage: () => void;

  setShowFilters: (value: boolean) => void;
  setInitialTable: (initialState: IInitialList<TData>) => void;
  updateLimit: (limit: number) => void;
  updatePage: (page: number) => void;
  setPagination: (pagination: IListPagination) => void;
  setColumns: (columns: IListColumn<TData>[]) => void;
  setFilters: (filters: IListFilter[]) => void;
  setQueries: (queries: IListQuery[]) => void;
  setData: (data: TData[] | []) => void;
}

export interface IListContextStore<TData = any> {
  data: TData[] | [];
  showFilters: boolean;
  columns: IListColumn<TData>[];
  pagination: IListPagination;
  searchForm?: UseFormReturn<any, any, any>;

  multiItemsSelected: any[];
  setMultiItemsSelected: Dispatch<SetStateAction<any[]>>;
  limitOfMultiSelect: number;

  filters?: IListFilter[];
  queries?: IListQuery[];
  onSubmitTable: IListSubmit;

  setSelectItem: Dispatch<SetStateAction<any>>;

  setSearchForm: (searchForm) => void;
  getGlobalFilters: () => any[];

  setShowFilters: (value: boolean) => void;
  selectOptionFilter: (
    filterId: string,
    optionId: string,
    optionValue: boolean
  ) => void;
  getFiltersWithOptionsSelected: () => any[];
  getFilterOptionsSelectedById: (filterId: string) => any[];
  resetFilters: () => void;
  resetOptionsByFilter: (filterId: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  updateLimit: (limit: number) => void;
}
