import { MoreHorizontal, Edit, Eye, Trash, XIcon } from 'lucide-react'

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../components'
import { IStatus, TColumnActions } from '../lib/types'

interface IStatusColumnActionsProps {
  status: IStatus
  actions?: TColumnActions
  itemIdx?: number
  handleDialogsOpen?: {
    detail?: () => void
    edit?: () => void
    create?: () => void
    delete?: () => void
  }
}

export const StatusDropdownActions = ({ status, actions, itemIdx, handleDialogsOpen }: IStatusColumnActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Abrir menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>

        {
          actions?.detail && (
            <>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleDialogsOpen.detail}>
                <Eye className='mr-2 h-4 w-4' />
                Ver Estado
              </DropdownMenuItem>
            </>

          )
        }

        {
          actions?.edit && (
            <DropdownMenuItem onClick={handleDialogsOpen.edit}>
              <Edit className='mr-2 h-4 w-4' />
              Editar Estado
            </DropdownMenuItem>

          )
        }

        {
          actions?.delete && (
            <DropdownMenuItem onClick={handleDialogsOpen.delete}>
              <XIcon className='mr-2 h-4 w-4' />
              Bloquear Estado
            </DropdownMenuItem>
          )
        }

        {
          actions?.removeLocalItem && (
            <>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => actions.removeLocalItem(itemIdx)}>
                <Trash className='h-4 w-4 mr-2' />
                Remover
              </DropdownMenuItem>
            </>
          )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
