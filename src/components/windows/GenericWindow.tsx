import { type JSX } from "react"
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
    windowId: string,
    isOpen: boolean,
    zIndex: number,
    layout: WindowLayout,
    maxWindowRef: React.RefObject<HTMLDivElement | null>,
    placeholderRefs: React.RefObject<HTMLDivElement[]>
}

const GenericWindow = 
    ({content, closeWindow, minimizeWindow, promoteZIndex, minimizeAllExceptThis, placeholderRefs, windowId, layout, isOpen, zIndex, maxWindowRef} 
    : GenericWindowProps) => {
        
    const { pos, setPos, isDragging, onMouseDown, onMouseUp, onMouseMove } = useDraggable({x: 0, y: 0})

    const { size, isFullscreen, setIsFullscreen, savePos, setSize } = useFullscreen({
        maxWindowRef,
        isOpen,
        windowId,
        promoteZIndex,
        setPos,
        pos
    })

    const {isLoadingLayout} = useWindowLayout({layout, placeholderRefs, windowId, isOpen, setPos, setSize})
    

    const onMaximize = () => { if (!isFullscreen) minimizeAllExceptThis(windowId); setIsFullscreen(!isFullscreen) }
    const onMinimize = () => { savePos(); minimizeWindow(windowId) }
    const onCloseWindow = () => closeWindow(windowId)

    return (
        <div className={"window pixel-border " 
            + (isOpen ? 'open ' : '') 
            + (isLoadingLayout ? 'hidden ' : '')
            + (!isDragging ? 'do-transition ' : '') 
            + (isFullscreen && 'fullscreen' )} 
            onMouseDown={() => promoteZIndex(windowId)}
            style={{left: pos.x, top: pos.y, width: size.width, height: size.height, zIndex: zIndex}} 
        >
            <div className="draggable-area" 
            onMouseUp={onMouseUp} 
            /*@ts-ignore */ 
            onMouseDown={!isFullscreen ? onMouseDown : undefined} onMouseMove={onMouseMove}>
                <WindowControls
                    closeWindow={onCloseWindow}
                    onMinimize={onMinimize}
                    onMaximize={onMaximize}
                />
            </div>
            <div className="window-content">
                {content}
            </div>
        </div>
    )
}

export default GenericWindow;