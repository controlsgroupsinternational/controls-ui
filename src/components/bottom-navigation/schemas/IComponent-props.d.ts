import { SidebarProfile } from "../../";
import { SidebarTheme } from "../sidebar/toggle-theme";

//--- Bottom
export interface IBottomNavItem {
  titleDescription: string;
  path: string;
  icon: React.ReactNode;
}

export interface IBottonNavProps
  extends Omit<IBottomNavigationSidebarProps, "onCloseSideBar"> {
  bottomItems: IBottomNavItem[];
}

//--- Sidebar
export interface INavLink {
  to: string;
  pathname: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ISidebarConfigProps {
  logout: () => void;
  profile?: SidebarProfile;
  theme: SidebarTheme;
}

export interface INavLinkNested extends INavLink {
  subLinks: INavLink[];
}

export interface IBottomNavigationSidebarProps {
  navLinksItems?: INavLink[];
  subLinksItems?: INavLinkNested[];
  sidebar: ISidebarConfigProps;
  Link: any;
  onCloseSideBar: () => void;
}
