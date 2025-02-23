'use client'

import WindowContainer from '@/components/layout/WindowContainer'
import Image from 'next/image'

const timelineEvents = [
  {
    year: '2020',
    title: 'First Album Release',
    description: 'Released debut album "Digital Dreams"'
  },
  {
    year: '2021',
    title: 'World Tour',
    description: 'Completed first world tour across 20 countries'
  },
  {
    year: '2022',
    title: 'Grammy Nomination',
    description: 'Nominated for Best New Artist'
  },
  {
    year: '2023',
    title: 'Collaboration Album',
    description: 'Released collaboration album with industry legends'
  }
]

export default function BiographyPage() {
  return (
    <WindowContainer 
      id="bio-main"
      title="Artist Biography"
      defaultPosition={{ x: 100, y: 50 }}
    >
      <div className="w-[600px] space-y-8">
        <div className="space-y-4">
          <Image
            src="https://picsum.photos/600/400"
            alt="Artist Profile"
            width={600}
            height={400}
            className="w-full rounded"
          />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Career Timeline</h2>
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-20 font-bold">{event.year}</div>
                <div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowContainer>
  )
} 