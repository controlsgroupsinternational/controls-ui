'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { IconSearch } from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, camelToSnake, Form, Spinner } from "../../";
import { TableToolbar } from "./Toolbar";
import { ListContext } from "./store";
import { IListSubmit } from "./types";

interface TableSearchProps {
  onSubmitTable: IListSubmit;
  loading: boolean;
}

export const TableSearch = ({ onSubmitTable, loading }: TableSearchProps) => {
  const {
    queries,
    getFiltersWithOptionsSelected,
    filters,
    pagination: { page, limit },
    setSearchForm,
  } = useContext(ListContext);

  const form = useForm<any>({
    defaultValues: queries.reduce((obj, item) => {
      obj[item.id] = "";
      return obj;
    }, {}),

    resolver: zodResolver(
      z.object(
        queries.reduce((obj, item) => {
          obj[item.id] = z.string().optional();
          return obj;
        }, {}),
      ),
    ),
  });

  const onSubmit = async (data) => {
    console.log({ data });
    const filtersSelected = getFiltersWithOptionsSelected();

    const queries = [];

    Object.entries(data)?.forEach((query) => {
      if (!query[1]) return;

      queries.push({
        field: camelToSnake(query[0]),
        text: query[1],
      });
    });

    console.log("queries formatted ", queries);
    onSubmitTable({ queries, filters: filtersSelected, limit, page });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSearchForm(form), [form]);

  if (!queries?.length && !filters?.length) {
    return <div></div>;
  }

  return (
    <Form {...form}>
      <div className="w-full flex flex-wrap justify-between items-end gap-y-2">
        {queries?.length || filters?.length ? (
          <TableToolbar form={form} onSubmit={onSubmit} />
        ) : (
          <div></div>
        )}

        <div className="w-fit flex flex-col gap-y-2">
          <Button
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
            disabled={loading}
            className="bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white"
          >
            {loading ? (
              <Spinner />
            ) : (
              <>
                <IconSearch className="dark:border-white h-5 w-5 mr-2" />
                Buscar
              </>
            )}
          </Button>

          {/* {visibilityColumns && <SettingsColumns table={table} />} */}
        </div>
      </div>
    </Form>
  );
};
