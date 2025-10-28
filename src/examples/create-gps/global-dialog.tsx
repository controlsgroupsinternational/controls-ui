import { useEffect } from 'react'
import { Dialog, DialogContent } from '../../components'
import { useDialogStore } from '../../lib/store/dialog'

export const GlobalDialog = ({ children }: { children?: any }) => {
  const { open, setOpenDialog, closeDialog } = useDialogStore()

  useEffect(() => {
    return () => closeDialog()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!open) return null

  return (
    <Dialog open={open} defaultOpen={false} modal onOpenChange={setOpenDialog}>
      <DialogContent className='sm:max-w-xl max-h-[86vh] overflow-y-auto pr-2 p-6'>
        {children}
      </DialogContent>
    </Dialog>
  )
}
