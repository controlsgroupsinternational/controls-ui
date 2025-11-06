"use client";

import { TableUI } from "../../table";

import { TableHeader } from "./Header";
import { TableBody } from "./Body";

export const TableContent = () => {
  return (
    <TableUI>
      <TableHeader />
      <TableBody />
    </TableUI>
  );
};
