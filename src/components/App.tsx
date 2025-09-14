import Desktop from './Desktop'
import Taskbar from './Taskbar'
import WindowManager from './WindowManager'

import Icon from './Icon'
import './App.css'
import { useRef, useState } from 'react'
import Layout from './layouts/Layout'
import type { WindowLayout } from '../types/LayoutTypes'
import NewLayout from './layouts/NewLayout'

function App() {
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([])
  const maxWindowRef = useRef<HTMLDivElement | null>(null);

  const closeWindow = (windowId: string) => { 
    setOpenWindows(openWindows.filter(id => id !== windowId))  
  }

  const minimizeWindow = (windowId: string) => {
    setMinimizedWindows(prev => {
        if (prev.includes(windowId)) return prev;
        return [...prev, windowId];
      });  
    }

  const maximizeWindow = (windowId: string) => {
    setMinimizedWindows(minimizedWindows.filter(id => id !== windowId))
  }
  
  const toggleWindowVisibility = (windowId: string) => {
    if (minimizedWindows.includes(windowId)) {
      maximizeWindow(windowId)
    } else {
      minimizeWindow(windowId)
    }
  }

  const onLayoutChange = (layout: WindowLayout) => {
      console.log("changing layouts")
      const windowsInLayout : string[] = Object.keys(layout.layout)
      setOpenWindows(windowsInLayout)
  }

  return (
    <>
    <div className="desktop-container">
      <Desktop fullscreenPlaceholderRef={maxWindowRef}>
        <Icon opens={Layout} title="Home" imgName="react.svg" changeLayout={onLayoutChange}/>
        <Icon opens={NewLayout} title="Work" imgName="react.svg" changeLayout={onLayoutChange} />
      </Desktop>
      <WindowManager 
      layout={Layout}
      onChangeLayout={onLayoutChange}
      openWindows={openWindows} 
      minimizedWindows={minimizedWindows} 
      closeWindow={closeWindow} 
      minimizeWindow={minimizeWindow}
      maxWindowRef={maxWindowRef}
      />
    </div>
    <Taskbar openWindows={openWindows} toggleWindow={toggleWindowVisibility}/>

    </>
  )
}

export default App
