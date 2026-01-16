import { useState, type JSX } from "react"
import { useDraggable } from "../../hooks/useDraggable";
import { useFullscreen } from "../../hooks/useFullscreen";
import WindowControls from "./WindowControls";
import './Window.css'
import type { WindowLayout } from "../../types/LayoutTypes";
import { useWindowLayout } from "../../hooks/useWindowLayout";

interface GenericWindowProps {
    content: JSX.Element,
    closeWindow: (windowId: string) => void,
    minimizeWindow: (windowId: string) => void,
    promoteZIndex: (windowId: string) => void,
    minimizeAllExceptThis: (thisWindow: string) => void,
    maximizeAllWindows: () => void,
    windowId: string,
    isOpen: boolean,
    zIndex: number,
    layout: WindowLayout,
    maxWindowRef: React.RefObject<HTMLDivElement | null>,
    placeholderRefs: React.RefObject<HTMLDivElement[]>,
    layoutToggle: boolean,
    title?:string,
}

const GenericWindow = 
    ({content, closeWindow, minimizeWindow, promoteZIndex, minimizeAllExceptThis, maximizeAllWindows, placeholderRefs, windowId, layout, isOpen, zIndex, maxWindowRef, layoutToggle, title} 
    : GenericWindowProps) => {
    
    const [pos, setPosDontUse] = useState({x: 0, y: 0})

    // auto round to avoid sub pixel issues
    const setPos = ({ x, y }: { x: number; y: number }) => {
        setPosDontUse({
            x: Math.min(window.innerWidth - 50, Math.max(0,Math.round(x))),
            y: Math.min(window.innerHeight - size.height, Math.max(0, Math.round(y))),
        })
    }

    const { isDragging, onMouseDown, onMouseUp, onMouseMove } = useDraggable({pos, setPos})
    
    const { size, isFullscreen, setIsFullscreen, savePos, setSize } = useFullscreen({
        maxWindowRef,
        isOpen,
        windowId,
        promoteZIndex,
        setPos,
        pos,
        layout
    })

    const {isLoadingLayout} = useWindowLayout({layout, placeholderRefs, windowId, isFullscreen, setPos, pos, setSize, maximizeAllWindows, layoutToggle})
    
    const onMaximize = () => { if (!isFullscreen) minimizeAllExceptThis(windowId); setIsFullscreen(!isFullscreen) }
    const onMinimize = () => { savePos(); minimizeWindow(windowId) }
    const onCloseWindow = () => closeWindow(windowId)

    const capitalizedTitle = windowId.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    return (
        <div className={"window desktop-window pixel-border " 
            + (isOpen ? 'open ' : '') 
            + (isLoadingLayout ? 'hidden ' : '')
            + (!isDragging ? 'do-transition ' : '') 
            + (isFullscreen && 'fullscreen' )} 
            onMouseDown={() => promoteZIndex(windowId)}
            style={{left: pos.x, top: pos.y, width: size.width, height: size.height, zIndex: zIndex}} 
            id={windowId}
        >
            <div className="draggable-area" 
            onMouseUp={onMouseUp} 
            /*@ts-ignore */ 
            onMouseDown={!isFullscreen ? onMouseDown : undefined} onMouseMove={onMouseMove}>
                <WindowControls
                    windowTitle={title ? title : capitalizedTitle}
                    closeWindow={onCloseWindow}
                    onMinimize={onMinimize}
                    onMaximize={onMaximize}
                />
            </div>
                <div className="window-content-wrapper">
                    <div className="window-content">
                        {content}
                    </div>
                </div>
        </div>
    )
}

export default GenericWindow;