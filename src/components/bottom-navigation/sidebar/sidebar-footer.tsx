'use client'

import { ISidebarConfigProps } from "../schemas/IComponent-props";
import { LogOut, SidebarIcon } from "lucide-react";
import { ToggleTheme } from "./toggle-theme";

interface ISidebarFooterProps {
  sidebar: ISidebarConfigProps;
  onCloseSideBar: () => void;
}

export default function BottomNavigationSidebarFooter({
  sidebar,
  onCloseSideBar,
}: ISidebarFooterProps) {
  return (
    <section className="pl-2 pr-3 my-2">
      <div className="border border-slate-200 w-full"></div>

      <ul className="mt-2 space-y-2">
        {/*Theme*/}
        {sidebar.theme && (
          <li>
            <ToggleTheme isExpanded={false} theme={sidebar.theme} />
          </li>
        )}

        {/*Close menu*/}
        <li>
          <button
            onClick={onCloseSideBar}
            data-testId="toggle-sidebar-bottom-btn"
            className={`w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`}
          >
            <SidebarIcon className="dark:text-white" size={20} />
            <span className="pl-2 dark:text-white text-sm">Cerrar Menu</span>
          </button>
        </li>

        {/*Logout*/}
        {sidebar.logout && (
          <li>
            <button
              onClick={() => {sidebar.logout()}}
              data-testId="logout-sidebar-bottom-btn"
              className={`w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`}
            >
              <LogOut className="dark:text-white" size={20} />

              <span className="pl-2 dark:text-white text-sm">
                Cerrar Sesión
              </span>
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
