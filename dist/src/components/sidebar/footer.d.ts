import { SidebarTheme } from './toggle-theme';

interface SidebarFooterProps {
    logout: () => void;
    isExpanded: boolean;
    toggleExpandSidebar: () => void;
    theme: SidebarTheme;
}
export declare const SidebarFooter: ({ logout, isExpanded, toggleExpandSidebar, theme }: SidebarFooterProps) => import("react").JSX.Element;
export {};
