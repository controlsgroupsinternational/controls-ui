export declare function useFetch<Entity = any>(fetchFunction?: () => Promise<Entity>): {
    data: Entity;
    error: Error;
    loading: boolean;
    fetcher: (fetchFunction: () => Promise<Entity>) => Promise<void>;
};
