// @ts-nocheck

import {
  ITablePagination,
  ITableColumn,
  ITableQueries,
  ITableFilter,
  PageQueries,
} from "./types";

export interface DataToFormat {
  __typename?: string;
  count: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  docs: any[];
}

export const formatPagination = (
  dataToFormat: DataToFormat,
): ITablePagination => {
  const hasNextPage = dataToFormat?.hasNextPage ?? false;
  const hasPrevPage = dataToFormat?.hasPrevPage ?? false;
  const limit = dataToFormat?.limit ?? 10;
  const page = dataToFormat?.page ?? 1;
  const labels = { plural: "Items", single: "Item" };

  return { hasNextPage, hasPrevPage, limit, page, labels };
};

export const camelToSnake = (str: string | unknown) =>
  str
    // @ts-ignore
    .replace(/[A-Z]/g, (letter: any) => `_${letter.toLowerCase()}`)
    .toUpperCase();

export const initialPagination: { limit: number; page: number } = {
  limit: 10,
  page: 1,
};

export const generateUUID = () =>
  // @ts-ignore
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );

export const insertColumn = (
  newColumn: ITableColumn<any>,
  originalColumn: ITableColumn<any>[],
) => {
  return [
    ...originalColumn.slice(0, originalColumn.length - 1),
    newColumn,
    ...originalColumn.slice(originalColumn.length - 1),
  ];
};

export function updateSearchInUrl(params: ITableQueries) {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.forEach((_, key) => {
    if (
      key.startsWith("queries") ||
      key.startsWith("filters") ||
      key === "perPage" ||
      key === "page"
    ) {
      searchParams.delete(key);
    }
  });

  // Procesar queries
  if (params.queries) {
    params.queries.forEach((query, index) => {
      if (query.field) {
        searchParams.set(
          `queries[${index}][field]`,
          encodeURIComponent(query.field),
        );
      }
      if (query.text) {
        searchParams.set(
          `queries[${index}][text]`,
          encodeURIComponent(query.text),
        );
      }
    });
  }

  // Procesar filters
  if (params.filters) {
    params.filters.forEach((filter) => {
      filter.options.forEach((option, index) => {
        searchParams.set(
          `filters[${filter.id}][${index}]`,
          encodeURIComponent(option as any),
        );
      });
    });
  }

  // Agregar limit y page
  if (params.limit !== undefined && params.limit !== null) {
    searchParams.set("perPage", params.limit.toString());
  } else {
    searchParams.delete("perPage"); // Eliminar si limit es null o undefined
  }

  if (params.page !== undefined && params.page !== null) {
    searchParams.set("page", params.page.toString());
  } else {
    searchParams.delete("page");
  }

  window.history.pushState(
    {},
    "",
    `${window.location.origin}${
      window.location.pathname
    }?${searchParams.toString()}`,
  );
}

interface IReturnParseURLSearchParams extends PageQueries {
  isSelectedAll?: boolean;
  limit: number;
  page: number;
  perPage: number;
}

export const parseURLSearchParams: () => IReturnParseURLSearchParams = () => {
  const url = window.location.href;
  const queryString = url.split("?")[1];

  const obj: IReturnParseURLSearchParams = {
    queries: [],
    filters: {}, // Inicializamos filters como un objeto vacío
    limit: 10, // Valor por defecto para limit, asumiendo initialPagination.limit
    page: 1, // Valor por defecto para page, asumiendo initialPagination.page
    perPage: 10, // perPage de la URL, por defecto igual a limit
    isSelectedAll: undefined,
  };

  if (!queryString) {
    return obj;
  }

  const searchParams = new URLSearchParams(queryString);

  const tempQueriesMap: Record<string, { field?: string; text?: string }> = {};
  const tempFiltersCollection: Record<string, Record<string, string>> = {};

  searchParams.forEach((value, key) => {
    const decodedValue = decodeURIComponent(value);

    // Procesar queries
    const queryMatch = key.match(/^queries\[(\d+)\]\[(\w+)\]$/);
    if (queryMatch) {
      const index = queryMatch[1];
      const fieldName = queryMatch[2];

      if (!tempQueriesMap[index]) {
        tempQueriesMap[index] = {};
      }
      // @ts-ignore
      tempQueriesMap[index][fieldName] = decodedValue;
      return;
    }

    // Procesar filters
    const filterMatch = key.match(/^filters\[(\w+)\]\[(\d+)\]$/);
    if (filterMatch) {
      const filterId = filterMatch[1];
      const optionIndex = filterMatch[2];

      if (!tempFiltersCollection[filterId]) {
        tempFiltersCollection[filterId] = {};
      }
      tempFiltersCollection[filterId][optionIndex] = decodedValue;
      return;
    }

    // Procesar perPage, page, isSelectedAll
    if (key === "perPage") {
      obj.perPage = Number(decodedValue);
      obj.limit = Number(decodedValue); // Si perPage de la URL se usa como limit
    } else if (key === "page") {
      obj.page = Number(decodedValue);
    } else if (key === "isSelectedAll") {
      obj.isSelectedAll = decodedValue === "true";
    }
  });

  // Convertir los mapas temporales a arrays con el formato final
  obj.queries = Object.keys(tempQueriesMap)
    .sort((a, b) => Number(a) - Number(b))
    .map((index) => tempQueriesMap[index] as { field: string; text: string })
    .filter((query) => query.field && query.text);

  // Reconstruir el objeto filters
  Object.keys(tempFiltersCollection).forEach((filterId) => {
    const optionsArray: string[] = [];
    Object.keys(tempFiltersCollection[filterId])
      .sort((a, b) => Number(a) - Number(b))
      .forEach((optionIndex) => {
        optionsArray[Number(optionIndex)] =
          tempFiltersCollection[filterId][optionIndex];
      });
    obj.filters[filterId] = optionsArray.filter(
      (option) => option !== undefined,
    );
  });

  return obj;
};

export function newFiltersBasedInUrlSearch(
  original: PageQueries, // 'original' ahora tiene el formato de PageQueries
  newFilters: ITableFilter[], // 'newFilters' sigue siendo un array de ITableFilter
): ITableFilter[] {
  // Creamos una copia de los nuevos filtros para no mutar el original
  let response = [...newFilters];

  // Convertimos original.filters (que es Record<string, string[]>) a un mapa fácil de buscar
  // Si original.filters es undefined o null, usamos un objeto vacío.
  const originalFiltersMap: Record<string, string[]> = original.filters || {};

  response = response.map((newFilterItem) => {
    // Buscamos las opciones seleccionadas para este filtro en los filtros de la URL
    const selectedOptionsFromUrl = originalFiltersMap[newFilterItem.id];

    // Si encontramos opciones para este filtro en la URL, actualizamos el estado 'selected'
    if (selectedOptionsFromUrl && selectedOptionsFromUrl.length > 0) {
      return {
        ...newFilterItem,
        options: newFilterItem.options.map((option) => {
          return {
            ...option,
            // Marcamos como seleccionado si el valor de la opción está en las opciones de la URL
            selected: selectedOptionsFromUrl.includes(option.value),
          };
        }),
      };
    } else {
      // Si no hay opciones para este filtro en la URL, aseguramos que todas sus opciones no estén seleccionadas
      // o se mantenga su estado original si no tienen 'selected' por defecto.
      // Aquí, por simplicidad, los deseleccionamos si no hay presencia en la URL.
      return {
        ...newFilterItem,
        options: newFilterItem.options.map((option) => ({
          ...option,
          selected: false, // Deseleccionar si no hay en la URL
        })),
      };
    }
  });

  return response;
}

export function updateIsSelectAllInUrl(isSelectAll: boolean) {
  const searchParams = new URLSearchParams(window.location.search);

  if (isSelectAll) {
    searchParams.set("isSelectedAll", "true");
  } else {
    searchParams.delete("isSelectedAll");
  }

  window.history.pushState(
    {},
    "",
    `${window.location.origin}${
      window.location.pathname
    }?${searchParams.toString()}`,
  );
}
