'use client'

import { UseFormReturn } from 'react-hook-form'
import { ReactNode, useContext } from 'react'
import { Search } from 'lucide-react'

import {
  Badge,
  Button,
  Input,
  Separator,
  Popover,
  PopoverContent,
  PopoverTrigger,
  camelToSnake,
  Label
} from '../..'
import { TableContext } from './store'

interface SearchQueryProps {
  id: string
  label: string
  form: UseFormReturn<any, any, any>
  icon?: ReactNode
  queryText: string
}

export const SearchQuery = ({ id, form, label, icon, queryText }: SearchQueryProps) => {
  const { onSubmitTable, pagination: { page, limit }, isFormatedUpperQueries } = useContext(TableContext)

  const onSubmit = () => {
    const queries = []

    Object.entries(form?.getValues())?.forEach((query) => {
      if (!query[1]) return

      queries.push({
        field: !isFormatedUpperQueries ? camelToSnake(query[0]) : query[0],
        text: query[1],
      })
    })

    onSubmitTable({ queries, filters: [], limit, page })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='py-5 border-dashed border-muted-foreground' type='button'>
          <Search size={16} className='mr-2 text-gray-500' />

          {label}

          {
            queryText && (
              <>
                <Separator orientation='vertical' className='mx-2 h-4' />

                <Badge
                  variant='secondary'
                  className='rounded-sm px-1 font-normal'
                >
                  {queryText}
                </Badge>
              </>
            )
          }
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-fit p-4' align='start'>
        <Label htmlFor={id}>
          Buscar {label}
        </Label>

        <div className='w-full flex justify-between items-end gap-x-3'>
          <Input
            id={id}
            form={form}
            type='text'
            placeholder={`Ingrese ${label}`}
          />

          <Button
            type='button'
            onClick={onSubmit}
            className='h-10 w-fit'
          >
            <Search size={18} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
