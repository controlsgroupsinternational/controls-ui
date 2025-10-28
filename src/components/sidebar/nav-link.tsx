"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../";
import { useSidebar } from "./primary";

type LinkNavigationProps = {
  to: string;
  label: string;
  icon?: ReactNode;
  pathname: string;
  Link?: any;
  isBottomNavLink?: boolean;
};

export const NavLink = ({
  to,
  label,
  icon,
  pathname,
  Link,
  isBottomNavLink,
}: LinkNavigationProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const navLinkContainer = useRef(null);
  const { isExpanded } = useSidebar();

  useEffect(() => {
    const updateTruncationMap = () => {
      const linkElement = navLinkContainer.current.querySelector(
        `#${to.replaceAll("/", "_")}`
      );

      if (linkElement) {
        const labelCollapsed =
          linkElement.offsetWidth < linkElement.scrollWidth;
        setShowTooltip(labelCollapsed);
      }
    };

    window.addEventListener("resize", updateTruncationMap);
    updateTruncationMap();

    return () => window.removeEventListener("resize", updateTruncationMap);
  }, [to]);

  if (!Link) {
    return (
      <TooltipProvider delayDuration={180}>
        <div
          ref={navLinkContainer}
          className={
            isBottomNavLink
              ? "cursor-pointer"
              : `cursor-pointer border-2 border-transparent flex ${isExpanded ? "justify-start h-[42px]" : "justify-center"
              } items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10
          ${pathname.startsWith(to) &&
              "border-2 border-brand-primary/30 bg-brand-primary/20  hover:dark:bg-brand-primary/10 text-brand-primary"
              } select-none`
          }
        >
          <div>{icon}</div>

          {!showTooltip && isExpanded && (
            <span
              id={to.replaceAll("/", "_")}
              className="pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block"
            >
              {isBottomNavLink ? "" : label}
            </span>
          )}

          {showTooltip && isExpanded && (
            <Tooltip>
              <TooltipTrigger className="truncate">
                <span
                  id={to.replaceAll("/", "_")}
                  className="pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block"
                >
                  {label}
                </span>
              </TooltipTrigger>

              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider delayDuration={180}>
      <Link
        href={to}
        ref={navLinkContainer}
        className={
          isBottomNavLink
            ? "cursor-pointer"
            : `cursor-pointer border-2 border-transparent flex ${isExpanded ? "justify-start h-[42px]" : "justify-center"
            } items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${pathname.startsWith(to) &&
            "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/10 text-brand-primary"
            } select-none`}
      >
        <div>{icon}</div>

        {!showTooltip && isExpanded && (
          <span
            id={to.replaceAll("/", "_")}
            className="pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block"
          >
            {isBottomNavLink ? "" : label}
          </span>
        )}

        {showTooltip && isExpanded && (
          <Tooltip>
            <TooltipTrigger className="truncate">
              <span
                id={to.replaceAll("/", "_")}
                className="pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block"
              >
                {label}
              </span>
            </TooltipTrigger>

            <TooltipContent>
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </Link>
    </TooltipProvider>
  );
};
