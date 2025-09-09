import { useEffect, useState, type JSX } from "react"
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

    const [size, setSize] = useState({width: placeholderRect.width, height: placeholderRect.height})
    const [pos, setPos] = useState({ x: placeholderRect.x, y: placeholderRect.y });
    const [savedPos, setSavedPos] = useState({x: -1, y: -1}) // the saved position when a window is minimized
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isFullscreen, setIsFullscreen] = useState(false);

    const onMouseDown = (e: MouseEvent) => {
        promoteZIndex(windowId); // bring to front
        if (isFullscreen) return // can't drag fullscreen elements
        setIsDragging(true);
        setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    };

    const onMouseMove = (e: MouseEvent) => {
        if (isDragging) {
        setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
        }
    };

    const onMouseUp = () => setIsDragging(false);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            minimizeAllExceptThis(windowId)
            setIsFullscreen(true) // size and pos updated in useeffect
        }
        else {
            setIsFullscreen(false)
        }
    }

    const goToBottomLeft = () => {
        setPos({ x: 0, y: window.innerHeight - 200 });
    }

    const goToPlaceholder = () => {
        setPos({x: placeholderRect.x, y: placeholderRect.y})
    }

    const goToSavedPos = () => {
        if (!hasSavedPos()) goToPlaceholder(); // the default value
        else setPos({x: savedPos.x, y: savedPos.y})
    }

    const savePos = () => setSavedPos({x: pos.x, y: pos.y})
    const hasSavedPos = () => savedPos.x !== -1 && savedPos.y !== -1

    const makePlaceholderSize = () => {
        setSize({width: placeholderRect.width, height: placeholderRect.height})
    }

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        } else {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        // Cleanup on unmount
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, [isDragging, offset]);

    // when we open, go to 
    useEffect(() => {
        if (!isOpen) goToBottomLeft()
        else if (!isFullscreen) { promoteZIndex(windowId); goToSavedPos(); }
        else {
            promoteZIndex(windowId);             
            setPos({x: maxWindowRect.x, y: maxWindowRect.y})
            setSize({width: maxWindowRect.width, height: maxWindowRect.height})
        }
    }, [isOpen]);
    
    useEffect(() => {
        makePlaceholderSize()
    }, [placeholderRect.width, placeholderRect.height])

    useEffect(() => {
        if (isFullscreen) {
            setPos({x: maxWindowRect.x, y: maxWindowRect.y})
            setSize({width: maxWindowRect.width, height: maxWindowRect.height})
            promoteZIndex(windowId)
        }
        else {
            makePlaceholderSize()
            if (isOpen) goToSavedPos()
        }
    }, [isFullscreen])

    return (
        <div className={"window pixel-border " + (isOpen ? 'open ' : '') + (!isDragging ? 'do-transition ' : '') + (isFullscreen && 'fullscreen' )} 
        style={{left: pos.x, top: pos.y, width: size.width, height: size.height, zIndex: zIndex}} >
            <div className="draggable-area" onMouseUp={onMouseUp} 
            //@ts-ignore
            onMouseDown={onMouseDown} onMouseMove={onMouseMove}>
                <div className="window-controls">
                    <button className="window-control minimize" onClick={toggleFullscreen}>[]</button>
                    <button className="window-control maximize" onClick={() => {savePos(); minimizeWindow(windowId)}}>_</button>
                    <button className="window-control close" onClick={() => closeWindow(windowId)}>X</button>
                </div>
            </div>
            <div className="window-content">
                {content}
            </div>
        </div>
    )
}

export default GenericWindow;