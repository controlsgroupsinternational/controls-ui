'use client'

import { Dispatch, SetStateAction, useContext, useState } from "react";
import { IconClick } from "@tabler/icons-react";

import {
  Button,
  Checkbox,
  TableBody as TableBodyUI,
  TableCell,
  TableRow,
} from "../..";
import { generateUUID } from "./utils";
import { TableContext } from "./store";
import { ITableColumn } from "./types";
// import { useCheckboxSelection } from "./Table-controllers";

interface TableBodyRowProps {
  data: Record<string, string>[];
  columns: ITableColumn<any>[];
  setSelectItem: (item) => void;
  multiItemsSelected: any[];
  setMultiItemsSelected: Dispatch<SetStateAction<any[]>>;
  limitOfMultiSelect: number;
  setItemsSelectedCount: Dispatch<SetStateAction<number>>;
  itemsSelectedCount: number;
}

const TableBodyEmpty = ({ colSpan }: { colSpan: number }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-24 text-center">
        Sin Resultados
      </TableCell>
    </TableRow>
  );
};

const TableBodyRow = ({
  data,
  columns,
  setSelectItem,
  setMultiItemsSelected,
  multiItemsSelected,
  limitOfMultiSelect,
  itemsSelectedCount,
  setItemsSelectedCount
}: TableBodyRowProps) => {
  const renderCell = (
    column: ITableColumn<any>,
    item: Record<string, string>
  ) => {
    //=========== Refactor this after
    const verficationOfItems = () => {
      // Verify if the item is already selected
      const isSelected = multiItemsSelected ? multiItemsSelected.some(
        (selectedItem) => selectedItem.id === item.id
      ) : false;

      if (multiItemsSelected.length === limitOfMultiSelect && !isSelected) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }

      if (isSelected) {
        // If already selected, unmark it and remove it from the array
        const updatedItems = multiItemsSelected.filter(
          (selectedItem) => selectedItem.id !== item.id
        );
        setMultiItemsSelected(updatedItems);
        setItemsSelectedCount(itemsSelectedCount - 1);
      } else {
        // If not selected and not reached the limit, mark it and add it to the array
        const updatedItems = [
          ...multiItemsSelected,
          { ...item, isSelected: true },
        ];
        setMultiItemsSelected(updatedItems);
        setItemsSelectedCount(itemsSelectedCount + 1);
      }
    };
    //===========

    if (column?.render) {
      return <div>{column.render(item)}</div>;
    }

    if (column.id === "select") {
      return (
        <Button
          onClick={() => setSelectItem(item)}
          variant="outline"
          size="icon"
          type="button"
        >
          <IconClick size={18} />
        </Button>
      );
    }

    if (column.id === "multi-select") {
      return (
        <Checkbox
          className="border-slate-500 data-[state=checked]:bg-brand-primary-lighter"
          onClick={() => { multiItemsSelected ? verficationOfItems() : null }}
          checked={multiItemsSelected ? multiItemsSelected.some(
            (selectedItem) => selectedItem.id === item.id
          ) : false}
          disabled={
            itemsSelectedCount === limitOfMultiSelect && !itemsSelectedCount
          }
        />
      );
    }

    return <>{item[column.id]}</>;
  };

  return (
    <>
      {data.map((item) => (
        <TableRow key={generateUUID()}>
          {columns.map((column) => (
            <TableCell key={generateUUID()}>
              {renderCell(column, item)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export const TableBody = () => {
  const {
    data,
    columns,
    setSelectItem,
    setMultiItemsSelected,
    multiItemsSelected,
    limitOfMultiSelect,
  } = useContext(TableContext);
  const [itemsSelectedCount, setItemsSelectedCount] = useState<number>(
    multiItemsSelected ? multiItemsSelected.length : 0
  );

  return (
    <TableBodyUI className='bg-card'>
      {data.length ? (
        <TableBodyRow
          setMultiItemsSelected={setMultiItemsSelected}
          setSelectItem={setSelectItem}
          setItemsSelectedCount={setItemsSelectedCount}
          itemsSelectedCount={itemsSelectedCount}
          data={data}
          multiItemsSelected={multiItemsSelected}
          columns={columns}
          limitOfMultiSelect={limitOfMultiSelect}
        />
      ) : (
        <TableBodyEmpty colSpan={columns.length} />
      )}
    </TableBodyUI>
  );
};
