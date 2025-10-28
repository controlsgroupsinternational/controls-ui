import { SidebarTheme } from './toggle-theme';
import { SidebarProfile } from './header';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    profile?: SidebarProfile;
    logout: () => void;
    theme: SidebarTheme;
    isDrawerSidebar?: boolean;
}
interface SidebarStore {
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
    toggleExpandSidebar: () => void;
}
export declare const useSidebar: import('zustand').UseBoundStore<import('zustand').StoreApi<SidebarStore>>;
export declare const Sidebar: ({ children, className, profile, logout, theme, isDrawerSidebar, }: SidebarProps) => import("react").JSX.Element;
export {};
