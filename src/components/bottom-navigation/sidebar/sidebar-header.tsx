'use client'

import { AvatarImage, SidebarProfile } from "../../";
import { Avatar, AvatarFallback, Badge } from "../../";

export default function BottomNavigationSidebarHeader({
  profile,
}: {
  profile: SidebarProfile;
}) {
  return (
    <header className="justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10">
      <Avatar className="w-16 h-full border border-gray-200 shadow-sm rounded-md">
        <AvatarImage src={profile?.photo} className='object-cover' />

        <AvatarFallback className="p-2 rounded-md h-full bg-transparent">
          <AvatarImage src={profile?.photo} className='object-cover' />
        </AvatarFallback>
      </Avatar>

      <section className="w-full h-full flex flex-col justify-center">
        <span className="truncate">
          {profile?.name} {profile?.lastname}
        </span>
        {profile?.role && <Badge className="w-full">{profile.role}</Badge>}
      </section>
    </header>
  );
}
