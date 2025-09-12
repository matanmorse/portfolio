import { type JSX } from "react"
import { useDraggable } from "../../hooks/useDraggable";
import { useWindowLayout } from "../../hooks/useWindowLayout";
import WindowControls from "./WindowControls";
import './Window.css'

interface GenericWindowProps {
    content: JSX.Element,
    closeWindow: (windowId: string) => void,
    minimizeWindow: (windowId: string) => void,
    promoteZIndex: (windowId: string) => void,
    minimizeAllExceptThis: (thisWindow: string) => void,
    windowId: string,
    isOpen: boolean,
    zIndex: number,
    placeholderRef?: HTMLDivElement | null,
    maxWindowRef: React.RefObject<HTMLDivElement | null>,
}

const GenericWindow = 
    ({content, closeWindow, minimizeWindow, promoteZIndex, minimizeAllExceptThis, windowId, isOpen, zIndex, placeholderRef, maxWindowRef} 
    : GenericWindowProps) => {
    const placeholderRect : DOMRect = placeholderRef?.getBoundingClientRect() || new DOMRect(0, 0, 300, 200);
    const maxWindowRect : DOMRect = maxWindowRef.current?.getBoundingClientRect()  || new DOMRect(0, 0, 300, 200);
        
    const { pos, setPos, isDragging, onMouseDown, onMouseUp, onMouseMove } = useDraggable({x: placeholderRect.x, y: placeholderRect.y})

    const { size, isFullscreen, setIsFullscreen, isLoaded, savePos } = useWindowLayout({
        placeholderRect,
        placeholderRef,
        maxWindowRect,
        isOpen,
        windowId,
        promoteZIndex,
        setPos,
        pos
    })

    const onMaximize = () => { if (!isFullscreen) minimizeAllExceptThis(windowId); setIsFullscreen(!isFullscreen) }
    const onMinimize = () => { savePos(); minimizeWindow(windowId) }
    const onCloseWindow = () => closeWindow(windowId)

    if (!isLoaded) {
        return null
    } else
    return (
        <div className={"window pixel-border " 
            + (isOpen ? 'open ' : '') 
            + (!isLoaded ? 'hidden ' : '')
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