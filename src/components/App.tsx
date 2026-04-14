import Desktop from './Desktop'
import Taskbar from './Taskbar'
import WindowManager from './WindowManager'

import Icon from './Icon'
import './App.css'
import { useRef, useState } from 'react'
import HomeLayout from '../data/layouts/HomeLayout'
import type { WindowLayout } from '../types/LayoutTypes'
import WorkLayout from '../data/layouts/WorkLayout'
import AboutLayout from '../data/layouts/AboutLayout'
import BlogLayout from '../data/layouts/BlogLayout'

import { WindowContext } from '../contexts/WindowContext'
import AckLayout from '../data/layouts/AckLayout'

function App() {
  const DEFAULT_LAYOUT = HomeLayout

  const [openWindows, setOpenWindows] = useState<string[]>(['about'])
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([])
  const maxWindowRef = useRef<HTMLDivElement | null>(null);
  const [layout, setLayout] = useState<WindowLayout>(DEFAULT_LAYOUT)
  const [layoutToggle, setLayoutToggle] = useState(false)
  const [isMobileMode] = useState(window.innerWidth < 1024);

  const isWindowOpen = (windowId: string) => openWindows.includes(windowId)

  const isWindowMinimized = (windowId: string) => minimizedWindows.includes(windowId)

  const closeWindow = (windowId: string) => {
    console.log("closing " + windowId);

    setOpenWindows(prev =>
      prev.filter(id => id !== windowId)
    );
  }

  const openWindow = (windowId: string) => {
    setOpenWindows(prev => {
        if (prev.includes(windowId)) return prev;
        return [...prev, windowId];
      });  
    setMinimizedWindows(prev => prev.filter(id => id !== windowId));
  }
  
  const minimizeWindow = (windowId: string) => {
    setMinimizedWindows(prev => {
        if (prev.includes(windowId)) return prev;
        return [...prev, windowId];
      });  
    }

  const maximizeWindow = (windowId: string) => {
    setMinimizedWindows(prev => prev.filter(id => id !== windowId));
  }
  
  const toggleWindowVisibility = (windowId: string) => {
    if (minimizedWindows.includes(windowId)) {
      maximizeWindow(windowId)
    } else {
      minimizeWindow(windowId)
    }
  }

  const onLayoutChange = (layout: WindowLayout) => {
      setLayoutToggle(!layoutToggle) // force windows to conform to layout, even if the layout doesn't actually change
      const windowsInLayout : string[] = Object.keys(layout.layout)

      setLayout(layout)
      setOpenWindows(windowsInLayout)
      setMinimizedWindows([])
  }

  return (
      <WindowContext.Provider value={{openWindow, closeWindow, minimizeWindow, isWindowOpen, isWindowMinimized, isMobileMode, onLayoutChange}}>
        <div className="desktop-container">
          <Desktop fullscreenPlaceholderRef={maxWindowRef}>
            <Icon opens={HomeLayout} title="Home" iconName="hn-home" color="#d6618a" changeLayout={onLayoutChange}/>
            <Icon opens={WorkLayout} title="Work" iconName="hn-code" color="#ff9c5f" changeLayout={onLayoutChange} />
            <Icon opens={AboutLayout} title="About" iconName="hn-user" color="#55beff" changeLayout={onLayoutChange} />
            <Icon opens={BlogLayout} title="Blog" iconName="hn-pen-nib" color="#cf455f" changeLayout={onLayoutChange} />
            <Icon opens={AckLayout} title="Thanks" iconName="hn-heart" color="#ff5f87" changeLayout={onLayoutChange} />
          </Desktop>
          <WindowManager
          layout={layout}
          onChangeLayout={onLayoutChange}
          openWindows={openWindows}
          minimizedWindows={minimizedWindows}
          closeWindow={closeWindow}
          minimizeWindow={minimizeWindow}
          maximizeWindow={maximizeWindow}
          maxWindowRef={maxWindowRef}
          layoutToggle={layoutToggle}
          />
        </div>
        <Taskbar openWindows={openWindows} toggleWindow={toggleWindowVisibility}/>
      </WindowContext.Provider>
  )
}

export default App
