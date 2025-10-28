import { create } from 'zustand'

interface ITableAtom {
  filters: object
  setFilters: (...args) => void
}

export const useTableStore = create<ITableAtom>(set => ({
  filters: [],
  setFilters: (newFilters) => {
    set(prevState => ({ filters: { ...prevState.filters, ...newFilters } }))
  }
}))
