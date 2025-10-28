'use client'

import { TableContext } from "./store";
import { useContext, useState } from "react";

/**
 * Function to handle checkbox change
 */
export const handleCheckboxChange = (item: Record<string, string>) => {
  const { multiItemsSelected, setMultiItemsSelected, limitOfMultiSelect } =
    useContext(TableContext);

  const [itemsSelectedCount, setItemsSelectedCount] = useState<number>(
    multiItemsSelected ? multiItemsSelected.length : 0
  );

  const verficationOfItems = () => {
    // Verify if the item is already selected
    const isSelected = multiItemsSelected.some(
      (selectedItem) => selectedItem.id === item.id
    );

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

  return { itemsSelectedCount, verficationOfItems };
};
