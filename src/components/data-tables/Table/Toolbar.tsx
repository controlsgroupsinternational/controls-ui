"use client";

import React, { useContext } from "react";
import { X } from "lucide-react";

import { TableContext } from "./store";

import { VisibilityFilters } from "./VisibilityFilters";
import { FacetedFilter } from "./FacetedFilter";
import { SearchQuery } from "./SearchQuery";
import { UseFormReturn } from "react-hook-form";
import { Button } from "../../button";
import { camelToSnake } from "./utils";

interface IToolbarProps {
  form: UseFormReturn<any, any, any>;
  onSubmit: (data: any) => Promise<void>;
}

export const TableToolbar = ({ form, onSubmit }: IToolbarProps) => {
  const {
    queries,
    filters,
    showFilters,
    resetFilters,
    onSubmitTable,
    pagination: { page, limit },
  } = useContext(TableContext);
  const watchFields = form.watch(queries.map((item) => item.id));

  const clearAllFilters = () => {
    resetFilters();

    //--- Refactor this (pass to utility)
    const queries = [];

    Object.entries(form?.getValues())?.forEach((query) => {
      if (!query[1]) return;

      queries.push({
        field: query[0],
        text: query[1],
      });
    });
    //---

    onSubmitTable({ queries, filters: [], limit, page: 1 });
  };

  return (
    <>
      <div className="w-10/12 items-center justify-between hidden md:flex">
        <div className="w-full flex flex-col-reverse items-start gap-x-2 gap-y-2">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex justify-start items-center sm:mr-4"
          >
            <section className="mr-3 flex justify-start items-center gap-x-3">
              {queries.map((item, idx) => (
                <SearchQuery
                  queryText={watchFields[idx]}
                  label={item.label}
                  key={item.id}
                  id={item.id}
                  form={form}
                />
              ))}
            </section>
          </form>

          {filters?.length ? (
            <div className="w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
              <VisibilityFilters />

              {showFilters &&
                filters &&
                filters.map((filter) => (
                  <FacetedFilter
                    onSubmit={onSubmit}
                    form={form}
                    key={filter.id}
                    id={filter.id}
                    icon={filter.icon}
                    label={filter.label}
                    options={filter.options}
                  />
                ))}
              {showFilters &&
              filters?.filter((filter) =>
                filter.options.some((option) => option.selected)
              ).length ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={clearAllFilters}
                  className="px-2 py-5 lg:px-3 ml-0 lg:ml-auto"
                >
                  Limpiar Filtros
                  <X className="ml-2 h-4 w-4" />
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
