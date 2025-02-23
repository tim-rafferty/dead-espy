'use client'

import WindowContainer from '@/components/layout/WindowContainer'
import Image from 'next/image'

const albums = [
  {
    id: '1',
    title: 'Digital Dreams',
    year: '2020',
    tracks: 12,
    cover: 'https://picsum.photos/300/300?random=1'
  },
  {
    id: '2',
    title: 'Neon Nights',
    year: '2021',
    tracks: 10,
    cover: 'https://picsum.photos/300/300?random=2'
  },
  {
    id: '3',
    title: 'Future Past',
    year: '2022',
    tracks: 14,
    cover: 'https://picsum.photos/300/300?random=3'
  },
  {
    id: '4',
    title: 'Retro Wave',
    year: '2023',
    tracks: 8,
    cover: 'https://picsum.photos/300/300?random=4'
  }
]

export default function AlbumsPage() {
  return (
    <WindowContainer 
      id="albums-main"
      title="Album Collection"
      defaultPosition={{ x: 150, y: 50 }}
    >
      <div className="w-[800px] space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div key={album.id} className="space-y-2 group cursor-pointer">
              <div className="relative aspect-square">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">{album.title}</h3>
                <div className="text-sm text-gray-600">
                  <p>{album.year}</p>
                  <p>{album.tracks} tracks</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WindowContainer>
  )
} 