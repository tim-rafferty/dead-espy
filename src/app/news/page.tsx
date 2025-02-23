'use client'

import WindowContainer from '@/components/layout/WindowContainer'
import Image from 'next/image'

const newsItems = [
  {
    id: '1',
    title: 'New Album Release',
    category: 'Music',
    date: '2024-03-20',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    title: 'World Tour Announced',
    category: 'Tours',
    date: '2024-03-18',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    title: 'Collaboration with Top Artist',
    category: 'Music',
    date: '2024-03-15',
    image: 'https://picsum.photos/400/300?random=3'
  }
]

export default function NewsPage() {
  return (
    <WindowContainer 
      id="news-main"
      title="Latest News"
      defaultPosition={{ x: 50, y: 50 }}
    >
      <div className="w-[800px] space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Latest Updates</h2>
          <select className="border p-1">
            <option>All Categories</option>
            <option>Music</option>
            <option>Tours</option>
            <option>Media</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="border p-4 space-y-3">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <button className="text-sm text-blue-600 hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </WindowContainer>
  )
} 