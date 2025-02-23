'use client'

import { useState } from 'react'

interface TaskbarProps {
  minimizedWindows: {
    id: string
    title: string
    onRestore: () => void
  }[]
}

export default function Taskbar({ minimizedWindows }: TaskbarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] border-t-2 border-[#ffffff] flex items-center px-2 gap-2">
      <button className="px-4 py-1 bg-[#c0c0c0] border-2 border-[#808080] hover:bg-[#d0d0d0]">
        Start
      </button>
      <div className="h-full w-px bg-[#808080] mx-2" />
      {minimizedWindows.map((window) => (
        <button
          key={window.id}
          onClick={window.onRestore}
          className="px-4 py-1 bg-[#c0c0c0] border-2 border-[#808080] hover:bg-[#d0d0d0] text-sm"
        >
          {window.title}
        </button>
      ))}
    </div>
  )
} 