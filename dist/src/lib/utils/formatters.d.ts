export declare const formatCI: (value: string) => string;
export declare const formatRIF: (value: string) => string;
export declare const formatPhoneNumber: (value: string) => string;
export declare const formatPhone: (phoneNumber: string) => {
    codeLine: string;
    number: string;
};
export declare const convertBytes: (bytes: number) => string;
export declare const formatCodePhoneLines: () => {
    label: string;
    value: string;
    image: string;
}[];
