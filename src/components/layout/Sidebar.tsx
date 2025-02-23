'use client'

import { 
  Newspaper, 
  User, 
  Calendar, 
  Globe, 
  MessageSquare,
  Disc,
  Video,
  Share2,
  Users,
  Store,
  Grid
} from 'lucide-react'
import Link from 'next/link'

const sidebarItems = [
  { icon: Newspaper, label: 'News', href: '/news' },
  { icon: User, label: 'Biography', href: '/biography' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: Globe, label: 'Web', href: '/web' },
  { icon: MessageSquare, label: 'Chat', href: '/chat' },
  { icon: Disc, label: 'Albums', href: '/albums' },
  { icon: Video, label: 'Music Videos', href: '/videos' },
  { icon: Share2, label: 'Social Media', href: '/social' },
  { icon: Users, label: 'Collaborators', href: '/collaborators' },
  { icon: Store, label: 'Store', href: '/store' },
  { icon: Grid, label: 'Minesweeper', href: '/minesweeper' },
]

export default function Sidebar() {
  return (
    <aside className="w-20 bg-[#c0c0c0] min-h-screen border-r border-[#808080] flex flex-col items-center py-4 gap-6">
      {sidebarItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col items-center group"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#808080] rounded group-hover:bg-[#efefef]">
            <item.icon className="w-6 h-6" />
          </div>
          <span className="text-xs mt-1 text-center">{item.label}</span>
        </Link>
      ))}
    </aside>
  )
} 