'use client'

import { Select, Button, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../..'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useContext } from 'react'

import { ListContext } from './store'

export function ListPagination() {
  const { pagination, updateLimit, nextPage, prevPage } = useContext(ListContext)

  return (
    <div className='flex flex-wrap items-center justify-end'>
      {/* {
        rowsToSelect && (
          <div className='flex-1 text-sm text-muted-foreground'>
            {table.getFilteredSelectedRowModel().rows.length} de {' '}
            {table.getFilteredRowModel().rows.length} {pagination?.labels?.singularItem}(s) Seleccionados.
          </div>
        )
      } */}

      <div className='flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0'>
        <div className='flex flex-wrap items-center gap-2'>
          <p className='text-sm font-medium'>{pagination?.labels?.plural || 'Items'} por Pagina</p>

          <Select
            value={`${pagination.limit}`}
            onValueChange={(value) => updateLimit(Number(value))}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={pagination.limit} />
            </SelectTrigger>

            <SelectContent side='top'>
              {
                [5, 10, 15, 20].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>

        {/* <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Pagina {table.getState().pagination.pageIndex + 1} de{' '} { table.getPageCount() }
        </div> */}

        <div className='flex items-center space-x-2'>
          <Button
            type='button'
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => prevPage()}
            disabled={!pagination.hasPrevPage}
          >
            <span className='sr-only'>Pagina Anterior</span>
            <ChevronLeft className='h-4 w-4' />
          </Button>

          <div>
            <p className='text-sm font-medium'>Pagina {pagination.page}</p>
          </div>

          <Button
            type='button'
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() => nextPage()}
            disabled={!pagination.hasNextPage}
          >
            <span className='sr-only'>Siguiente Pagina</span>
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  )
}
