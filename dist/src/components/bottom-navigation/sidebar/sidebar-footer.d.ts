import { ISidebarConfigProps } from '../schemas/IComponent-props';

interface ISidebarFooterProps {
    sidebar: ISidebarConfigProps;
    onCloseSideBar: () => void;
}
export default function BottomNavigationSidebarFooter({ sidebar, onCloseSideBar, }: ISidebarFooterProps): import("react").JSX.Element;
export {};
