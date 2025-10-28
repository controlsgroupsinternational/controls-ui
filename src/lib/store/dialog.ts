import { create } from 'zustand'

interface IDialogStore {
  open: boolean

  toggleOpenDialog: () => void
  setOpenDialog: (value: boolean) => void

  openDialog: () => void
  closeDialog: () => void
}

interface IDialogLoadingStore extends IDialogStore {
  title: string
  description: string

  setDialogLoading: (values: { title?: string, description?: string, open?: boolean }) => void
}

export const useDialogStore = create<IDialogStore>(set => ({
  open: null,

  toggleOpenDialog: () => set(prevState => ({ ...prevState, open: !prevState })),
  setOpenDialog: (value) => set(prevState => ({ ...prevState, open: value })),

  openDialog: () => set(prevState => ({ ...prevState, open: true })),
  closeDialog: () => set(prevState => ({ ...prevState, open: false }))
}))

export const useLoadingDialogStore = create<IDialogLoadingStore>(set => ({
  open: false,
  title: null,
  description: null,

  setDialogLoading: (value) => set((prev) => ({
    ...prev,
    open: value?.open,
    title: value?.title,
    description: value?.description
  })),

  toggleOpenDialog: () => set(prevState => ({ ...prevState, open: !prevState })),
  setOpenDialog: (value) => set(prevState => ({ ...prevState, open: value })),

  openDialog: () => set(prevState => ({ ...prevState, open: true })),
  closeDialog: () => set(prevState => ({ ...prevState, open: false }))
}))

export const handleGloballoader = {
  Open: () => useDialogStore().setOpenDialog(true)
}
