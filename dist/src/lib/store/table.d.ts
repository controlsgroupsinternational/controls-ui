interface ITableAtom {
    filters: object;
    setFilters: (...args: any[]) => void;
}
export declare const useTableStore: import('zustand').UseBoundStore<import('zustand').StoreApi<ITableAtom>>;
export {};
