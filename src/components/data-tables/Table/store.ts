// @ts-nocheck
"use client";

import { createContext } from "react";

import { ITableContextStore } from "./types";

export const TableContext = createContext<ITableContextStore>({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  isFormatedUpperQueries: true,
  showFilters: true,
  searchForm: null,
  multiSelectedItems: [],
  limitOfMultiSelect: 0,
  setMultiItemsSelected: () => {},
  onSubmitTable: null,
  setSearchForm: () => {},
  setSelectItem: () => {},
  getGlobalFilters: () => {},
  resetOptionsByFilter: () => {},
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: false,
    hasNextPage: false,
  },
  onSelectAllItems: undefined,
  isSelectedAllItems: false,
});
