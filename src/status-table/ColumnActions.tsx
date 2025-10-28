import { AlertDialog } from '@radix-ui/react-alert-dialog'
import { useState } from 'react'
import { toast } from 'sonner'

import { TColumnActions } from '../lib/types/tables'
import { IStatus } from '../lib/types/status'

import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../components'
import { Spinner } from '../components/loaders/Spinner'
import { StatusDropdownActions } from './DropdownActions'
import { DialogDetailStatus } from './DialogDetail'
import { DialogEditStatus } from './DialogEdit'

interface ISubCategoryColumnActionsProps {
  status: IStatus
  actions?: TColumnActions
  itemIdx?: number
}

export const StatusColumnActions = ({ status, actions, itemIdx }: ISubCategoryColumnActionsProps) => {
  const [isOpenDetail, setOpenDetail] = useState(false)
  const [isOpenAlert, setOpenAlert] = useState(false)
  const [isOpenEdit, setOpenEdit] = useState(false)

  const openConfirmBlock = () => setOpenAlert(true)
  const openEdit = () => setOpenEdit(true)
  const openDetail = () => setOpenDetail(true)

  const handleDialogsOpen = {
    edit: actions.edit ? openEdit : null,
    detail: actions.detail ? openDetail : null,
    delete: actions.delete ? openConfirmBlock : null
  }

  const blockItem = async () => {
    const blockStatus = async () => fetch(`/api/status/${status.id}/block`, { method: 'PUT' })

    toast.success(`${status.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este estado?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara el estado {status.title}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction onClick={blockItem} className='w-[89px]'>
              Bloquear
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DialogDetailStatus
        status={status}
        isOpenViewModel={isOpenDetail}
        setOpenViewModel={setOpenDetail}
      />

      <DialogEditStatus
        status={status}
        isOpenEdit={isOpenEdit}
        setOpenEdit={setOpenEdit}
      />

      <StatusDropdownActions
        status={status}
        actions={actions}
        itemIdx={itemIdx}
        handleDialogsOpen={handleDialogsOpen}
      />
    </>
  )
}
