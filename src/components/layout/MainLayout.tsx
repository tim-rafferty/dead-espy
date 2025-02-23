'use client'

import Sidebar from './Sidebar'
import Taskbar from './Taskbar'
import { useState, createContext, useContext } from 'react'

interface WindowState {
  minimizedWindows: MinimizedWindow[]
  handleMinimize: (id: string, title: string) => void
  handleRestore: (id: string) => void
}

interface MinimizedWindow {
  id: string
  title: string
}

export const WindowContext = createContext<WindowState>({
  minimizedWindows: [],
  handleMinimize: () => {},
  handleRestore: () => {},
})

export function useWindowContext() {
  return useContext(WindowContext)
}

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [minimizedWindows, setMinimizedWindows] = useState<MinimizedWindow[]>([])

  const handleMinimize = (id: string, title: string) => {
    setMinimizedWindows(prev => [...prev, { id, title }])
  }

  const handleRestore = (id: string) => {
    setMinimizedWindows(prev => prev.filter(window => window.id !== id))
  }

  return (
    <WindowContext.Provider value={{ minimizedWindows, handleMinimize, handleRestore }}>
      <div className="flex min-h-screen bg-[#008080]">
        <Sidebar />
        <main className="flex-1 p-4 relative">
          {children}
        </main>
        <Taskbar 
          minimizedWindows={minimizedWindows.map(window => ({
            ...window,
            onRestore: () => handleRestore(window.id)
          }))}
        />
      </div>
    </WindowContext.Provider>
  )
} 