'use client'

import { IBottomNavItem } from "./schemas/IComponent-props";
import { ButtonHTMLAttributes } from "react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "..";
import { NavLink } from "..";

interface IBottomNavButton
  extends Pick<IBottomNavItem, "titleDescription">,
  ButtonHTMLAttributes<any> {
  icon: React.ReactNode;
  actionToSet?: React.Dispatch<React.SetStateAction<boolean>>;
  item: IBottomNavItem;
  Link: any;
}

export default function BottomNavigationButton({
  icon,
  titleDescription,
  actionToSet,
  Link,
  item
}: IBottomNavButton) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            onClick={
              actionToSet
                ? () => {
                  actionToSet(true);
                }
                : null
            }
            data-testId={`bottom-sidebar-${titleDescription}`}
            role="button"
            className="w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none"
          >
            <NavLink
              Link={Link}
              to={item ? item.path : "/"}
              pathname={item ? item.path : "/"}
              label={titleDescription}
              icon={icon}
              isBottomNavLink={true}
            />
          </div>
        </TooltipTrigger>

        <TooltipContent>{titleDescription}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
