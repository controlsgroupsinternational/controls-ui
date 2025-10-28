'use client'

import { LogOut, SidebarClose, SidebarOpen } from "lucide-react"
import { SidebarTheme, ToggleTheme } from "./toggle-theme"


interface SidebarFooterProps {
  logout: () => void
  isExpanded: boolean
  toggleExpandSidebar: () => void
  theme: SidebarTheme
}

export const SidebarFooter = ({ logout, isExpanded, toggleExpandSidebar, theme }: SidebarFooterProps) => {
  return (
    <section className='pl-2 pr-3'>
      <div className='border border-slate-200 w-full'></div>

      <ul className='mt-2 space-y-2'>
        <li>
          <ToggleTheme isExpanded={!isExpanded} theme={theme} />
        </li>

        <li>
          <button
            onClick={toggleExpandSidebar}
            className={`w-full border-2 border-transparent flex ${!isExpanded ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
          >
            {
              isExpanded
                ? (<SidebarClose className='dark:text-white' size={20} />)
                : (<SidebarOpen className='dark:text-white' size={20} />)
            }

            {
              isExpanded && (
                <span className='pl-2 dark:text-white text-sm'>
                  Cerrar Menu
                </span>
              )
            }
          </button>
        </li>

        {
          logout && (
            <li>
              <button
                onClick={logout}
                className={`w-full border-2 border-transparent flex ${!isExpanded ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
              >
                <LogOut className='dark:text-white' size={20} />

                {isExpanded && (<span className='pl-2 dark:text-white text-sm'>Cerrar Sesión</span>)}
              </button>
            </li>
          )
        }
      </ul>
    </section>
  )
}
