'use client'

import type {
  ITablePagination,
  ITableColumn,
  ITableFilter,
  ITableSubmit,
  ITableSubmitParams,
  ITableDynamicFilter,
} from "./types";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { UseFormReturn } from "react-hook-form";
import { TableContext } from "./store";

import { TablePagination } from "./Pagination";
import { TableContent } from "./Content";
import { TableLoading } from "./Loading";
import { TableSearch } from "./Search";
import { TableError } from "./Error";
import { TableEmpty } from "./Empty";
import { camelToSnake } from "./utils";

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

const initialPagination: ITablePagination = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: false,
  hasNextPage: false,
};

export function D4TTable<DataSchema>(props: CustomTableProps<DataSchema>) {
  const [localData, setLocalData] = useState([]);
  const [localFilters, setLocalFilters] = useState([]);
  const [localQueries, setLocalQueries] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [localError, setLocalError] = useState(props?.error);
  const [localLoading, setLocalLoading] = useState(props?.loading);
  const [searchForm, setSearchForm] = useState<UseFormReturn<any, any, any>>();
  const [pagination, setPagination] = useState(
    props?.pagination ?? initialPagination
  );
  const [localColumns, setLocalColumns] = useState<ITableColumn<DataSchema>[]>(
    props?.columns || []
  );

  const handleSubmit = useCallback(
    (params: ITableSubmitParams) => props.onSubmitTable({ ...params }),
    [props]
  );

  const updatePagination = useCallback(
    (newPagination) => {
      setPagination(newPagination);

      const formSearchQuery = searchForm.getValues();

      const queries = [];

      Object.entries(formSearchQuery)?.forEach((query) => {
        if (!query[1]) return;

        queries.push({
          field: !props.isFormatedUpperQueries ? camelToSnake(query[0]) : query[0],
          text: query[1],
        });
      });

      const filtersSelected: ITableFilter[] = localFilters
        .map((filter) => ({
          id: filter.id,
          label: filter.label,
          options: filter.options
            .filter((option) => option.selected)
            .map((option) => option.value),
        }))
        .filter((filter) => filter.options.length > 0);

      handleSubmit({
        filters: filtersSelected,
        queries,
        limit: newPagination.limit,
        page: newPagination.page,
      });
    },
    [localFilters, handleSubmit, searchForm]
  );

  const nextPage = useCallback(() => {
    updatePagination({ ...pagination, page: pagination.page + 1 });
  }, [pagination, updatePagination]);

  const prevPage = useCallback(() => {
    if (pagination.page > 1) {
      updatePagination({ ...pagination, page: pagination.page - 1 });
    }
  }, [pagination, updatePagination]);

  const resetPage = useCallback(() => {
    setPagination({ ...pagination, page: 1 });
  }, []);

  const getFiltersWithOptionsSelected = () => {
    return localFilters
      .map((filter) => ({
        id: filter.id,
        label: filter.label,
        options: filter.options
          .filter((option) => option.selected)
          .map((option) => option.value),
      }))
      .filter((filter) => filter.options.length > 0);
  };

  const getFilterOptionsSelectedById = (filterId) => {
    const filterFinded = localFilters.find((f) => f.id === filterId);

    if (filterFinded) {
      const selectedOptions = filterFinded.options
        .filter((option) => option.selected)
        .map((option) => option.value);
      return selectedOptions;
    }

    return [];
  };

  const selectOptionFilter = (filterId, optionId, optionValue) => {
    const filterFinded = localFilters.map((filter) => {
      if (filter.id === filterId) {
        return {
          ...filter,
          options: filter.options.map((option) => {
            if (option.id === optionId) {
              return { ...option, selected: optionValue };
            }
            return option;
          }),
        };
      }
      return filter;
    });

    setLocalFilters(filterFinded);
  };

  const getGlobalFilters = () => localFilters;

  const resetOptionsByFilter = (filterId) => {
    const filtersReseted = localFilters.map((filter) => {
      if (filter.id === filterId) {
        return {
          ...filter,
          options: filter.options.map((option) => ({
            ...option,
            selected: false,
          })),
        };
      }

      return filter;
    });

    setLocalFilters(filtersReseted);
  };

  const updateLimit = (limit, page?: number) => updatePagination({ 
    ...pagination, 
    limit ,
    page: page || pagination?.page
  });

  const resetFilters = () => {
    const filtersReseted = localFilters.map((filter) => ({
      ...filter,
      options: filter.options.map((option) => ({ ...option, selected: false })),
    }));

    setLocalFilters(filtersReseted);
  };

  useEffect(() => setLocalData(props?.data || []), [props?.data]);
  useEffect(() => setLocalLoading(props?.loading), [props?.loading]);
  useEffect(() => setLocalError(props?.error || false), [props?.error]);
  useEffect(() => setPagination(props?.pagination), [props?.pagination]);
  useEffect(() => setLocalColumns(props?.columns || []), [props?.columns]);

  // Extract Queries
  useEffect(() => {
    const queries = localColumns
      .filter((userColumn) => userColumn.isQuery)
      .map((column) => ({
        id: column.id as string,
        label: column.label,
      }));

    setLocalQueries(queries);
  }, [localColumns]);

  // Extract Filters
  useEffect(() => {
    const filterFiltersExist = (columnToFilter) =>
      columnToFilter?.filters && columnToFilter?.filters.length;

    const filters: ITableFilter[] = localColumns
      .filter(filterFiltersExist)
      .map((filter) => {
        const filterOptions = filter.filters.map((filterOption) => ({
          ...filterOption,
          selected: false,
        }));
        const toReturn: ITableFilter = {
          ...filter,
          id: filter.id as string,
          options: filterOptions,
        };

        return toReturn;
      });

    setLocalFilters(filters);
  }, [localColumns]);

  // Extract Dynamic Filters
  useEffect(() => {
    if (!props?.filters) {
      return;
    }

    props?.filters.forEach((filter) => {
      if (!filter?.filters) return;

      localColumns.forEach((column) => {
        if (filter.id === column.id) {
          setLocalFilters((prevState) => {
            const exist = prevState.some((item) => item.id === filter.id);

            if (exist) {
              return prevState;
            }

            return [
              ...prevState,
              {
                id: column.id,
                label: column.label,
                options: filter.filters,
              },
            ];
          });
        }
      });
    });
  }, [localColumns, props?.filters]);

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      hasNextPage: props?.pagination?.hasNextPage,
      hasPrevPage: props?.pagination?.hasPrevPage,
    }));
  }, [props.pagination.hasNextPage, props.pagination.hasPrevPage]);

  return (
    <TableContext.Provider
      value={{
        data: localData,
        columns: localColumns,
        pagination,
        nextPage,
        prevPage,
        resetPage,
        searchForm,
        isFormatedUpperQueries: props.isFormatedUpperQueries,
        updateLimit,
        showFilters,
        resetFilters,
        getGlobalFilters,
        selectOptionFilter,
        resetOptionsByFilter,
        multiItemsSelected: props.multiItemsSelected,
        setMultiItemsSelected: props.setMultiItemsSelected,
        limitOfMultiSelect: props.limitOfMultiSelect,
        queries: localQueries,
        filters: localFilters,
        onSubmitTable: handleSubmit,
        getFilterOptionsSelectedById,
        getFiltersWithOptionsSelected,
        setSelectItem: props.setSelectItem,
        setShowFilters: (value) => setShowFilters(value),
        setSearchForm: (searchForm) => setSearchForm(searchForm),
      }}
    >
      <div className="w-full h-fit space-y-4">
        {<TableSearch onSubmitTable={handleSubmit} loading={localLoading} />}

        <div className="rounded-md border overflow-clip">
          {localLoading && <TableLoading />}
          {!localLoading && localError && <TableError />}
          {!localLoading && !localError && !localData && <TableEmpty />}
          {!localLoading && !localError && localData && <TableContent />}
        </div>

        {!localLoading && !localError && localData && <TablePagination />}
      </div>
    </TableContext.Provider>
  );
}
