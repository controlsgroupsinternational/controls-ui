'use client'

import { TableHead, TableRow, TableHeader as TablerHeaderUI } from '../../table'
import { useContext } from 'react'

import { TableContext } from './store'

export const TableHeader = () => {
  const { columns } = useContext(TableContext)

  return (
    <TablerHeaderUI className='bg-brand-primary-lighter'>
      <TableRow >
        {
          columns.length > 0 && columns.map((column, idx) => (
            <TableHead key={`${column.id}-${idx}`} className='text-brand-text'>{column.label}</TableHead>
          ))
        }
      </TableRow>
    </TablerHeaderUI>
  )
}
