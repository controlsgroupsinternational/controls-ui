'use client'

import React from "react";

interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function DrawerBottomNavigation({
  isOpen,
  onClose,
  children,
}: IDrawerProps) {
  return (
    <div
      className={`fixed z-30 inset-0 bg-opacity-50  transition-opacity ${isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="fixed z-50 inset-y-0  right-0  flex" data-testId={`bottom-drawer`}>
        <div
          className={`max-w-[250px] h-full overflow-y-scroll rounded-l-xl border-l-[1.5px] bg-brand-sidebar-background text-brand-sidebar-text`}
        >
          {children}
        </div>
      </div>

      {/* "outSide" drawer section */}
      <div className="h-full" data-testId={`bottom-outside-drawer`} onClick={onClose}></div>
    </div>
  );
}
