"use client";

import { UseFormReturn } from "react-hook-form";
import { ReactNode } from "react";
import { Search } from "lucide-react";

import {
  Badge,
  Button,
  Input,
  Separator,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Label,
} from "../..";

interface SearchQueryProps {
  id: string;
  label: string;
  form: UseFormReturn<any, any, any>;
  icon?: ReactNode;
  queryText: string;
}

export const SearchQuery = ({
  id,
  form,
  label,
  queryText,
}: SearchQueryProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="py-5 border-dashed border-muted-foreground"
          type="button"
        >
          <Search size={16} className="mr-2 text-gray-500" />

          {label}

          {queryText && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />

              <Badge className="rounded-sm px-1 font-normal text-white">
                {queryText}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-fit p-4" align="start">
        <Label htmlFor={id}>Buscar {label}</Label>

        <div className="w-full flex justify-between items-end gap-x-3">
          <Input
            id={id}
            form={form}
            type="text"
            placeholder={`Ingrese ${label}`}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
