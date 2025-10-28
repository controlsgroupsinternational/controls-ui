'use client'

import { User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage, Badge } from '../'

export interface SidebarProfile {
  role?: string
  name?: string
  photo?: string
  lastname?: string
}

export interface SidebarHeaderProps {
  profile?: SidebarProfile
  isExpanded: boolean
}

export const SidebarHeader = ({ profile, isExpanded }: SidebarHeaderProps) => {
  return (
    <header className={`${isExpanded ? 'justify-start' : 'justify-center'} w-full h-14 flex items-start gap-x-3`}>
      <Avatar className='w-16 h-full border border-gray-200 shadow-sm rounded-md'>
        <AvatarImage
          className='h-full border border-gray-200 object-cover rounded-md'
          src={profile?.photo}
        />

        <AvatarFallback className='p-2 rounded-md h-full bg-transparent'>
          <User className='text-black dark:text-white h-full' />
        </AvatarFallback>
      </Avatar>

      {
        isExpanded && (
          <section className='w-full h-full flex flex-col justify-center'>
            <span className='truncate'>{profile?.name} {profile?.lastname}</span>
            {profile?.role && (<Badge className='w-full bg-brand-secondary dark:text-white'>{profile.role}</Badge>)}
          </section>
        )
      }
    </header>
  )
}
