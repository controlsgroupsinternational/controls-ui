'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../'
import { NavSubLink, SublinksItem } from './nav-sublink'
import { useSidebar } from './primary'

type LinkNavigationNestedProps = {
  label: string
  icon?: ReactNode
  pathname: string
  Link?: any
  sublinks: SublinksItem[]
}

export const NavLinkNested = ({ label, icon, sublinks, pathname, Link }: LinkNavigationNestedProps) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [show, setShow] = useState(false)
  const { isExpanded } = useSidebar()
  const containerRef = useRef(null)

  const toggleShow = () => setShow(prevState => !prevState)
  const labelReplaced = label.replaceAll(' ', '_')

  useEffect(() => {
    const updateTruncationMap = () => {
      const linkElement = containerRef.current.querySelector(`#${labelReplaced}`)

      if (linkElement) {
        const labelCollapsed = linkElement.offsetWidth < linkElement.scrollWidth
        setShowTooltip(labelCollapsed)
      }
    }

    window.addEventListener('resize', updateTruncationMap)
    updateTruncationMap()

    return () => window.removeEventListener('resize', updateTruncationMap)
  }, [label])


  if (!Link) {
    return (
      <TooltipProvider delayDuration={180}>
        <div
          ref={containerRef}
          onClick={toggleShow}
          className={`cursor-pointer border-2 border-transparent grid grid-rows-1 ${isExpanded ? 'grid-cols-8 justify-center h-[42px]' : 'grid-cols-2 justify-center'} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`}
        >
          <div className={`flex w-full justify-start items-center ${isExpanded ? 'col-span-7' : 'col-span-1'}`}>
            <div>{icon}</div>

            {
              (!showTooltip && isExpanded) && (
                <span
                  id={labelReplaced}
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
                      id={labelReplaced}
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

          <div className='col-span-1 w-fit'>
            {
              show
                ? (<ChevronUp className='justify-self-end dark:text-white' size={20} />)
                : (<ChevronDown className='justify-self-end dark:text-white' size={20} />)
            }
          </div>
        </div>


        <ul className={`${show ? 'block' : 'hidden'} space-y-2`}>
          {
            sublinks.map(subLink => {
              return (
                <li key={subLink.to}>
                  <NavSubLink
                    {...subLink}
                    pathname={pathname}
                    isExpanded={isExpanded}
                  />
                </li>
              )
            })
          }
        </ul>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider delayDuration={180}>
      <div
        ref={containerRef}
        onClick={toggleShow}
        className={`cursor-pointer border-2 border-transparent grid grid-rows-1 ${isExpanded ? 'grid-cols-8 justify-center h-[42px]' : 'grid-cols-2 justify-center'} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`}
      >
        <div className={`flex w-full justify-start items-center ${isExpanded ? 'col-span-7' : 'col-span-1'}`}>
          <div>{icon}</div>

          {
            (!showTooltip && isExpanded) && (
              <span
                id={labelReplaced}
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
                    id={labelReplaced}
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

        <div className='col-span-1 w-fit'>
          {
            show
              ? (<ChevronUp className='justify-self-end dark:text-white' size={20} />)
              : (<ChevronDown className='justify-self-end dark:text-white' size={20} />)
          }
        </div>
      </div>


      <ul className={`${show ? 'block' : 'hidden'} space-y-2`}>
        {
          sublinks.map(subLink => {
            return (
              <li key={subLink.to}>
                <NavSubLink
                  {...subLink}
                  Link={Link}
                  pathname={pathname}
                  isExpanded={isExpanded}
                />
              </li>
            )
          })
        }
      </ul>
    </TooltipProvider>
  )
}
