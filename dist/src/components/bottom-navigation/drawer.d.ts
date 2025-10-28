import { default as React } from 'react';

interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export default function DrawerBottomNavigation({ isOpen, onClose, children, }: IDrawerProps): React.JSX.Element;
export {};
