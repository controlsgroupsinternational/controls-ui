'use client'

import { useSidebar } from "./"

export const SidebarContent = ({ children }) => {
  const { isExpanded } = useSidebar()

  return (
    <section className='w-full h-full py-3 scroll-content'>
      <div className={`${isExpanded ? ' pr-2' : 'pl-2'} w-full space-y-3`}>
        {children}
      </div>
    </section>
  )
}
