'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../'

export interface SublinksItem {
  to: string
  label: string
  icon?: ReactNode
}

interface NavSubLinkProps extends SublinksItem {
  isExpanded: boolean
  Link?: any
  pathname: string
}

export const NavSubLink = ({ isExpanded, pathname, to, icon, label, Link }: NavSubLinkProps) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateTruncationMap = () => {
      const linkElement = containerRef.current.querySelector(`#${to.replaceAll('/', '_')}`)

      if (linkElement) {
        const labelCollapsed = linkElement.offsetWidth < linkElement.scrollWidth
        setShowTooltip(labelCollapsed)
      }
    }

    window.addEventListener('resize', updateTruncationMap)
    updateTruncationMap()

    return () => window.removeEventListener('resize', updateTruncationMap)
  }, [to])

  if (!Link) {
    return (
      <TooltipProvider delayDuration={180}>
        <div
          ref={containerRef}
          className={
            `cursor-pointer border-2 border-transparent flex ${isExpanded ? 'pl-4 justify-start h-[42px]' : 'justify-center'} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
          ${pathname.startsWith(to) && 'border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary'} select-none`
          }
        >
          <div>{icon}</div>

          {
            (!showTooltip && isExpanded) && (
              <span
                id={to.replaceAll('/', '_')}
                className='pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block'
              >
                {label}
              </span>
            )
          }

          {
            (showTooltip && isExpanded) && (
              <Tooltip>
                <TooltipTrigger className='truncate'>
                  <span
                    id={to.replaceAll('/', '_')}
                    className='pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block'
                  >
                    {label}
                  </span>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            )
          }
        </div>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider delayDuration={180}>
      <Link
        href={to}
        ref={containerRef}
        className={
          `cursor-pointer border-2 border-transparent flex ${isExpanded ? 'pl-4 justify-start h-[42px]' : 'justify-center'} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg  hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${pathname.startsWith(to) && 'border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary'} select-none`
        }
      >
        <div>{icon}</div>

        {
          (!showTooltip && isExpanded) && (
            <span
              id={to.replaceAll('/', '_')}
              className='pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block'
            >
              {label}
            </span>
          )
        }

        {
          (showTooltip && isExpanded) && (
            <Tooltip>
              <TooltipTrigger className='truncate'>
                <span
                  id={to.replaceAll('/', '_')}
                  className='pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block'
                >
                  {label}
                </span>
              </TooltipTrigger>

              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          )
        }
      </Link>
    </TooltipProvider>
  )
}
