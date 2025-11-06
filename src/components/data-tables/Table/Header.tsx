"use client";

import {
  TableHead,
  TableRow,
  TableHeader as TablerHeaderUI,
} from "../../table";
import { useContext } from "react";

import { TableContext } from "./store";
import { Checkbox } from "../..";

export const TableHeader = () => {
  const { columns, onSelectAllItems, isSelectedAllItems, isMultiSelect } =
    useContext(TableContext);

  const renderHeader = (column: any, idx: number) => {
    if (onSelectAllItems && idx === 0 && isMultiSelect) {
      return (
        <Checkbox
          className="border-white data-[state=checked]:bg-brand-primary-lighter"
          onCheckedChange={onSelectAllItems}
          checked={isSelectedAllItems}
        />
      );
    }

    return <>{column.label}</>;
  };
  return (
    <TablerHeaderUI className="bg-brand-primary-lighter">
      <TableRow>
        {columns.length > 0 &&
          columns.map((column, idx) => {
            return (
              <TableHead
                key={`${column.id}-${idx}`}
                className="text-brand-text"
              >
                {renderHeader(column, idx)}
              </TableHead>
            );
          })}
      </TableRow>
    </TablerHeaderUI>
  );
};
