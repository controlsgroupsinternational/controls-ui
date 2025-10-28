interface IDialogStore {
    open: boolean;
    toggleOpenDialog: () => void;
    setOpenDialog: (value: boolean) => void;
    openDialog: () => void;
    closeDialog: () => void;
}
interface IDialogLoadingStore extends IDialogStore {
    title: string;
    description: string;
    setDialogLoading: (values: {
        title?: string;
        description?: string;
        open?: boolean;
    }) => void;
}
export declare const useDialogStore: import('zustand').UseBoundStore<import('zustand').StoreApi<IDialogStore>>;
export declare const useLoadingDialogStore: import('zustand').UseBoundStore<import('zustand').StoreApi<IDialogLoadingStore>>;
export declare const handleGloballoader: {
    Open: () => void;
};
export {};
