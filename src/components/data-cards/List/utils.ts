// @ts-nocheck
'use client'

import { IListPagination, IListColumn } from "./types";

export interface ListDataToFormat {
  __typename?: string;
  count: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  docs: any[];
}

export const formatListPagination = (
  dataToFormat: DataToFormat
): IListPagination => {
  const hasNextPage = dataToFormat?.hasNextPage ?? false;
  const hasPrevPage = dataToFormat?.hasPrevPage ?? false;
  const limit = dataToFormat?.limit ?? 10;
  const page = dataToFormat?.page ?? 1;
  const labels = { plural: "Items", single: "Item" };

  return { hasNextPage, hasPrevPage, limit, page, labels };
};

export const listCamelToSnake = (str: string | unknown) =>
  str
    .replace(/[A-Z]/g, (letter: any) => `_${letter.toLowerCase()}`)
    .toUpperCase();

export const initialListPagination: { limit: number; page: number } = {
  limit: 10,
  page: 1,
};

export const generateUUIDToList = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

export const insertColumnList = (
  newColumn: IListColumn<any>,
  originalColumn: IListColumn<any>[]
) => {
  return [
    ...originalColumn.slice(0, originalColumn.length - 1),
    newColumn,
    ...originalColumn.slice(originalColumn.length - 1),
  ];
};
