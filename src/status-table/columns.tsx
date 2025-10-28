/* eslint-disable brace-style */
import { ColumnDef } from '@tanstack/react-table'

import type { IGetEntityColumnsParams, TColumnActions } from '../lib/types/tables'
import type { IStatus } from '../lib/types/status'

import { StatusColumnActions } from './ColumnActions'
import { Badge, Checkbox } from '../components'
import { StatusColumnSort } from './ColumnSort'

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <StatusColumnActions status={row.original} />
    </div>
  )
}

const idColumn = {
  id: 'ID',
  accessorKey: 'id',
  header: ({ column }) => <StatusColumnSort column={column} columnLabel='ID' />,
  cell: ({ row: { original } }) => (
    <div className='font-medium pl-6'>
      { original.id }
    </div>
  )
}

export const statusColumns: ColumnDef<IStatus>[] = [
  {
    id: 'Titulo',
    accessorKey: 'title',
    header: 'Titulo',
    cell: ({ row: { original } }) => {
      return <div className='w-full'>{original.title}</div>
    }
  },
  {
    id: 'Descripcion',
    accessorKey: 'description',
    header: 'Descripcion',
    cell: ({ row: { original } }) => original.description
  },
  {
    id: 'Estatus',
    accessorKey: 'isActive',
    header: ({ column }) => (
      <div className='w-full text-center'>
        <StatusColumnSort column={column} columnLabel='Estatus' />
      </div>
    ),
    cell: ({ row: { original } }) => (
      <div className='w-full text-center'>
        <Badge variant={original.isActive ? 'success' : 'red'}>
          {original.isActive ? 'Activo' : 'Bloqueado'}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => value.includes(row.getValue(id).toString())
  }
]

const selectionColumn = {
  id: 'select',
  header: ({ table }) => (
    <Checkbox
      checked={table.getIsAllPageRowsSelected()}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label='Select all'
    />
  ),
  cell: ({ row, table }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label='Select row'
    />
  ),
  enableSorting: false,
  enableHiding: false
}

const initialActions: TColumnActions = {
  edit: false,
  detail: null,
  create: false,
  delete: false,
  removeLocalItem: null
}

export const getStatusColumns = ({
  selection = false,
  actions = initialActions,
  id = true
}: IGetEntityColumnsParams): ColumnDef<IStatus>[] => {
  const subcategoryColumnsAcum: ColumnDef<IStatus>[] = []

  if (id && !subcategoryColumnsAcum.includes(idColumn)) {
    subcategoryColumnsAcum.push(idColumn)
  }

  statusColumns.forEach(statusColumn => {
    subcategoryColumnsAcum.push({ ...statusColumn })
  })

  if (actions && !subcategoryColumnsAcum.includes(actionsColumn)) {
    subcategoryColumnsAcum.push({
      id: 'Acciones',
      accessorKey: 'actions',
      header: () => <div className='w-full text-right'>Acciones</div>,
      cell: ({ row }) => {
        return (
          <div className='w-full text-right'>
            <StatusColumnActions
              actions={actions}
              itemIdx={row.index}
              status={row.original}
            />
          </div>
        )
      }
    })
  }

  // Mover la columna de selección a la primera posición si existe
  const selectionIndex = subcategoryColumnsAcum.findIndex(column => column === selectionColumn)

  if (selection && selectionIndex === -1) {
    subcategoryColumnsAcum.unshift(selectionColumn)
  } else if (selectionIndex !== -1 && selectionIndex !== 0) {
    subcategoryColumnsAcum.splice(selectionIndex, 1)
    subcategoryColumnsAcum.unshift(selectionColumn)
  }

  return subcategoryColumnsAcum
}
