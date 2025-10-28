'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'

export interface SidebarTheme {
  toggleTheme: () => void;
  value: "dark" | "light" | string;
}

interface ToggleThemeProps {
  isExpanded: boolean;
  theme: SidebarTheme;
}

export const ToggleTheme = ({ isExpanded, theme }: ToggleThemeProps) => {
  const [mounted, setMounted] = useState(false)
  const { value, toggleTheme } = theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      data-testId="theme-sidebar-bottom-btn"
      className={`w-full border-2 border-transparent flex ${isExpanded ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`}
    >
      {
        value === 'light'
          ? (
            <>
              <IconMoon className='dark:text-white' />
              {!isExpanded && <span className='pl-2 dark:text-white text-sm'>Oscuro</span>}
            </>
          )
          : (
            <>
              <IconSun className='dark:text-white' />
              {!isExpanded && <span className='pl-2 dark:text-white text-sm'>Claro</span>}
            </>
          )
      }
    </button>
  )
}

// import { IconMoon, IconSun } from '@tabler/icons-react'
// import { useTheme } from 'next-themes'
// import React, { useEffect, useState } from 'react'

// export interface SidebarTheme {
//   toggleTheme: () => void;
//   value: "dark" | "light" | string;
// }

// interface ToggleThemeProps {
//   isExpanded: boolean;
//   theme: SidebarTheme;
// }

// export const ToggleTheme = ({ isExpanded }: ToggleThemeProps) => {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark')
//     } else {
//       setTheme('light')
//     }
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className={`w-full border-2 border-transparent flex ${isExpanded ? 'justify-center' : ''} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`}
//     >
//       {
//         theme === 'light'
//           ? (
//             <>
//               <IconMoon className='dark:text-white' />
//               {!isExpanded && <span className='pl-2 dark:text-white text-sm'>Oscuro</span>}
//             </>
//           )
//           : (
//             <>
//               <IconSun className='dark:text-white' />
//               {!isExpanded && <span className='pl-2 dark:text-white text-sm'>Claro</span>}
//             </>
//           )
//       }
//     </button>
//   )
// }