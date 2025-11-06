"use client";

import { IconAdjustments } from "@tabler/icons-react";
import { UseFormReturn } from "react-hook-form";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

import { ITableFilterOption } from "./types";
import { TableContext } from "./store";

import {
  Badge,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "../..";
import { cn } from "../../../lib/utils";

interface FacetedFilterProps {
  form: UseFormReturn<any, any, any>;
  id: string;
  label: string;
  icon: ReactNode;
  options: ITableFilterOption[];
  onSubmit: any;
}

export const FacetedFilter = ({
  id,
  form,
  icon,
  label,
  options,
}: FacetedFilterProps) => {
  const {
    selectOptionFilter,
    getFilterOptionsSelectedById,
    resetOptionsByFilter,
  } = useContext(TableContext);
  const [comboxWidth, setComboxWidth] = useState(null);
  const elementRef = useRef(null);

  const clearFilter = (filterId: string) => {
    resetOptionsByFilter(filterId);
    // form.handleSubmit(onSubmit)()
  };

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    // Crea una instancia de ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setComboxWidth(width);
    });

    // Observa el elemento
    resizeObserver.observe(element);

    // Limpia la instancia de ResizeObserver cuando el componente se desmonta
    return () => {
      resizeObserver.unobserve(element);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          type="button"
          ref={elementRef}
          variant="outline"
          className="py-5 border-dashed border-muted-foreground"
        >
          {icon || <IconAdjustments size={16} className="mr-2" />}

          {label}

          {getFilterOptionsSelectedById(id).length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />

              {/* <Badge
                  variant='secondary'
                  className='rounded-sm px-1 font-normal lg:hidden'
                >
                  {getFilterOptionsSelectedById(id).length}
                </Badge> */}

              <div className="hidden space-x-1 lg:flex">
                {getFilterOptionsSelectedById(id).length >= 1 ? (
                  <Badge className="rounded-sm px-1 font-normal text-white">
                    {getFilterOptionsSelectedById(id).length === 1 ? (
                      <>
                        {getFilterOptionsSelectedById(id).length} seleccionado
                      </>
                    ) : (
                      <>
                        {getFilterOptionsSelectedById(id).length} seleccionados
                      </>
                    )}
                  </Badge>
                ) : (
                  options
                    .filter((option) => option.selected)
                    .map((option) => {
                      return (
                        <Badge
                          key={option.value.toString()}
                          className="rounded-sm px-1 font-normal text-white"
                        >
                          {option.label.length >= 20 ? null : option.label}
                        </Badge>
                      );
                    })
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>

      <style>
        {`
          .combox-checkbox-content {
            min-width: 200px !important;
            width: ${comboxWidth + 24}px !important;
          }

          .checkbox-tooltip-content {
            min-width: 200px !important;
            width: ${comboxWidth + 10}px !important;
          }
        `}
      </style>

      <PopoverContent className="p-0 combox-checkbox-content" align="start">
        <Command>
          <CommandInput placeholder={label} />

          <CommandList>
            <CommandEmpty>Sin Resultados</CommandEmpty>

            <CommandGroup>
              {options.map((option) => {
                return (
                  <CommandItem
                    key={option.value.toString()}
                    onSelect={() => {
                      if (option.selected) {
                        selectOptionFilter(id, option.id, false);
                      } else {
                        selectOptionFilter(id, option.id, true);
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        option.selected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check className={cn("h-4 w-4")} />
                    </div>

                    {option.icon}

                    <span
                      className="line-clamp-2 text-xs leading-5"
                      title={option.label}
                    >
                      {option.label}
                    </span>
                    {/* {
                        facets?.get(option.value) && (
                          <span className='ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs'>
                            {facets.get(option.value)}
                          </span>
                        )
                    } */}
                  </CommandItem>
                );
              })}
            </CommandGroup>

            {getFilterOptionsSelectedById(id).length > 0 && (
              <>
                <CommandSeparator />

                <CommandGroup>
                  <CommandItem
                    // onSelect={() => {
                    //   resetFilters()
                    //   form.handleSubmit(onSubmit)
                    // }}
                    onSelect={() => clearFilter(id)}
                    className="justify-center text-center"
                  >
                    Limpiar Filtros
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
