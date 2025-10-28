'use client'

import { useState } from "react";
import { SidebarIcon } from "lucide-react";
import { IBottonNavProps } from "./schemas/IComponent-props";
import DrawerBottomNavigation from "./drawer";
import BottomNavigationButton from "./nav-button";
import BottomNavigationSidebar from "./sidebar/sidebar";

export function BottomNavigation({
  bottomItems,
  navLinksItems,
  subLinksItems,
  sidebar,
  Link,
}: IBottonNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl">
      {/* Buttons */}
      <div className={`flex justify-between h-full max-w-lg  mx-auto font-medium`}>
        {bottomItems.map((item, idx) => (
          <BottomNavigationButton
            key={idx}
            icon={item.icon}
            titleDescription={item.titleDescription}
            Link={Link}
            item={item}
          />
        ))}

        <BottomNavigationButton
          icon={<SidebarIcon />}
          titleDescription="Options"
          actionToSet={setIsDrawerOpen}
          Link={null}
          item={null}
        />
      </div>

      {/* Drawer */}
      <DrawerBottomNavigation
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <BottomNavigationSidebar
          Link={Link}
          sidebar={sidebar}
          navLinksItems={navLinksItems}
          subLinksItems={subLinksItems}
          onCloseSideBar={() => setIsDrawerOpen(false)}
        />
      </DrawerBottomNavigation>
    </div>
  );
}
