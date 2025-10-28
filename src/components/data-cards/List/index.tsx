'use client'

import type {
  IListPagination,
  IListColumn,
  IListFilter,
  IListSubmit,
  IListSubmitParams,
  IListDynamicFilter,
} from "./types";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { UseFormReturn } from "react-hook-form";
import { ListContext } from "./store";

import { ListPagination } from "./Pagination";
import { ListContent } from "./Content";
import { ListLoading } from "./Loading";
import { TableSearch } from "./Search";
import { ListError } from "./Error";
import { ListEmpty } from "./Empty";
import { listCamelToSnake } from "./utils";

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

const initialPagination: IListPagination = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: false,
  hasNextPage: false,
};

export function D4TCardsList<DataSchema>(props: CustomTableProps<DataSchema>) {
  const [localData, setLocalData] = useState([]);
  const [localFilters, setLocalFilters] = useState([]);
  const [localQueries, setLocalQueries] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [localError, setLocalError] = useState(props?.error);
  const [localLoading, setLocalLoading] = useState(props?.loading);
  const [searchForm, setSearchForm] = useState<UseFormReturn<any, any, any>>();
  const [pagination, setPagination] = useState(
    props?.pagination ?? initialPagination,
  );
  const [localColumns, setLocalColumns] = useState<IListColumn<DataSchema>[]>(
    props?.columns || [],
  );
  const { cardsColsNumber } = props

  const handleSubmit = useCallback(
    (params: IListSubmitParams) => props.onSubmitTable({ ...params }),
    [props],
  );

  const updatePagination = useCallback(
    (newPagination) => {
      setPagination(newPagination);

      const formSearchQuery = searchForm.getValues();

      const queries = [];

      Object.entries(formSearchQuery)?.forEach((query) => {
        if (!query[1]) return;

        queries.push({
          field: listCamelToSnake(query[0]),
          text: query[1],
        });
      });

      const filtersSelected: IListFilter[] = localFilters
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
    [localFilters, handleSubmit, searchForm],
  );

  const nextPage = useCallback(() => {
    updatePagination({ ...pagination, page: pagination.page + 1 });
  }, [pagination, updatePagination]);

  const prevPage = useCallback(() => {
    if (pagination.page > 1) {
      updatePagination({ ...pagination, page: pagination.page - 1 });
    }
  }, [pagination, updatePagination]);

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

  const updateLimit = (limit) => updatePagination({ ...pagination, limit });

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

    const filters: IListFilter[] = localColumns
      .filter(filterFiltersExist)
      .map((filter) => {
        const filterOptions = filter.filters.map((filterOption) => ({
          ...filterOption,
          selected: false,
        }));
        const toReturn: IListFilter = {
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
    <ListContext.Provider
      value={{
        data: localData,
        columns: localColumns,
        pagination,
        nextPage,
        prevPage,
        searchForm,
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

        <div
          className={`overflow-clip grid grid-cols-1 ${cardsColsNumber
            // ? `lg:grid-cols-${cardsColsNumber}`
            ? `${cardsColsNumber === 2 ? 'sm' : 'lg'}:grid-cols-${cardsColsNumber}`
            : 'grid-cols-3'
            }  gap-6`}
        >
          {localLoading && <ListLoading />}
          {!localLoading && localError && <ListError />}
          {!localLoading && !localError && !localData && <ListEmpty />}
          {!localLoading && !localError && localData && <ListContent />}
        </div>

        {!localLoading && !localError && localData && <ListPagination />}
      </div>
    </ListContext.Provider>
  );
}
