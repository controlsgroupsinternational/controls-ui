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
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
} from "../../drawer";

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
    isFormatedUpperQueries,
  } = useContext(TableContext);
  const watchFields = form.watch(queries.map((item) => item.id));

  const clearAllFilters = () => {
    resetFilters();

    //--- Refactor this (pass to utility)
    const queries = [];

    Object.entries(form?.getValues())?.forEach((query) => {
      if (!query[1]) return;

      queries.push({
        field: !isFormatedUpperQueries ? camelToSnake(query[0]) : query[0],
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

      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="py-5 border-dashed border-muted-foreground"
          >
            Filtros
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Filtros</DrawerTitle>
              <DrawerDescription>
                Selecciona los filtros que deseas aplicar
              </DrawerDescription>
            </DrawerHeader>
            {/* <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <Minus />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-muted-foreground text-[0.70rem] uppercase">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <Plus />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={
                        {
                          fill: "hsl(var(--foreground))",
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div> */}
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
