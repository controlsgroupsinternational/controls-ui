"use client";

import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import { useContext } from "react";

import { TableContext } from "./store";
import { Button } from "../..";

export const VisibilityFilters = () => {
  const { showFilters, setShowFilters } = useContext(TableContext);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => setShowFilters(!showFilters)}
      className="ml-auto py-5 whitespace-nowrap"
    >
      <IconAdjustmentsHorizontal className="mr-2 h-4 w-4" />
      Mostrar Filtros
    </Button>
  );
};
