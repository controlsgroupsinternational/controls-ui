import { default as React } from 'react';

export interface SidebarTheme {
    toggleTheme: () => void;
    value: "dark" | "light" | string;
}
interface ToggleThemeProps {
    isExpanded: boolean;
    theme: SidebarTheme;
}
export declare const ToggleTheme: ({ isExpanded, theme }: ToggleThemeProps) => React.JSX.Element;
export {};
