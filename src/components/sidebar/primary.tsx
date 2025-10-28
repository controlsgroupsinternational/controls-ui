'use client';

import { create } from 'zustand';

import { cn } from '../../lib/utils';
import { SidebarHeader, SidebarProfile } from './header';
import { SidebarFooter } from './footer';
import { SidebarTheme } from './toggle-theme';

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

export const useSidebar = create<SidebarStore>((set) => ({
  isExpanded: true,
  setIsExpanded: (value) => set({ isExpanded: value }),
  toggleExpandSidebar: () =>
    set((state) => ({ isExpanded: !state.isExpanded })),
}));

export const Sidebar = ({
  children,
  className,
  profile,
  logout,
  theme,
  isDrawerSidebar,
}: SidebarProps) => {
  const { isExpanded, toggleExpandSidebar } = useSidebar();

  return (
    <aside
      tabIndex={-1}
      className={cn(
        `sidebar dark:border-transparent overflow-hidden ${
          isDrawerSidebar ? '' : 'hidden'
        } lg:block`,
        className,
        `${isExpanded ? 'max-w-[240px]' : 'max-w-[100px]'}`,
        `${isDrawerSidebar ? 'ml-auto' : ''}`
      )}
    >
      <div className='w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3'>
        <SidebarHeader isExpanded={isExpanded} profile={profile} />

        {children}

        <SidebarFooter
          theme={theme}
          logout={logout}
          isExpanded={isExpanded}
          toggleExpandSidebar={toggleExpandSidebar}
        />
      </div>
    </aside>
  );
};
