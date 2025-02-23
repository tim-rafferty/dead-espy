'use client'

import { useState, useEffect } from 'react'
import { Minus, Square, X } from 'lucide-react'
import { useWindowContext } from './MainLayout'

interface WindowContainerProps {
  id: string
  title: string
  children: React.ReactNode
  defaultPosition?: { x: number; y: number }
}

export default function WindowContainer({
  id,
  title,
  children,
  defaultPosition = { x: 20, y: 20 }
}: WindowContainerProps) {
  const { minimizedWindows, handleMinimize, handleRestore } = useWindowContext()
  const [position, setPosition] = useState(defaultPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isMaximized, setIsMaximized] = useState(false)
  const [previousPosition, setPreviousPosition] = useState(defaultPosition)
  const isMinimized = minimizedWindows.some(w => w.id === id)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMaximize = () => {
    if (!isMaximized) {
      setPreviousPosition(position)
      setIsMaximized(true)
    } else {
      setPosition(previousPosition)
      setIsMaximized(false)
    }
  }

  if (isMinimized) return null

  return (
    <div
      className={`absolute bg-white border-2 border-[#808080] shadow-lg ${
        isMaximized ? 'fixed inset-0 w-full h-full' : ''
      }`}
      style={isMaximized ? undefined : { left: position.x, top: position.y }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between cursor-move"
        onMouseDown={handleMouseDown}
      >
        <span>{title}</span>
        <div className="flex gap-2">
          <button onClick={() => handleMinimize(id, title)} className="hover:bg-[#1084d0]">
            <Minus className="w-4 h-4" />
          </button>
          <button onClick={handleMaximize} className="hover:bg-[#1084d0]">
            <Square className="w-4 h-4" />
          </button>
          <button className="hover:bg-[#1084d0]">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className={`${isMaximized ? 'p-6' : 'p-4'}`}>
        {children}
      </div>
    </div>
  )
} 