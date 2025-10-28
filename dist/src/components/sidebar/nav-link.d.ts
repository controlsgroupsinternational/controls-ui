import { ReactNode } from 'react';

type LinkNavigationProps = {
    to: string;
    label: string;
    icon?: ReactNode;
    pathname: string;
    Link?: any;
    isBottomNavLink?: boolean;
};
export declare const NavLink: ({ to, label, icon, pathname, Link, isBottomNavLink, }: LinkNavigationProps) => import("react").JSX.Element;
export {};
