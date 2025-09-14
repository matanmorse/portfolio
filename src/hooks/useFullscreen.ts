import { useEffect, useState } from "react";

interface LayoutOptions {
    maxWindowRef: React.RefObject<HTMLDivElement | null>, 
    isOpen: boolean, 
    promoteZIndex: (windowId: string) => void,
    windowId: string,
    setPos: ({x, y}: {x: number, y: number}) => void
    pos: {x: number, y: number}
}

export function useFullscreen({maxWindowRef, isOpen, windowId, promoteZIndex, setPos, pos} : LayoutOptions) {
    const [savedPos, setSavedPos] = useState({x: -1, y: -1}) // the saved position when a window is minimized
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [size, setSize] = useState({width: 500, height: 500})
    const maxWindowRect = maxWindowRef?.current?.getBoundingClientRect() || new DOMRect(0,0,0,0);    

    const savePos = () => setSavedPos(pos)
    const restorePos = () => hasSavedPos() && setPos(savedPos);
    const hasSavedPos = () => !(savedPos.x === -1 && savedPos.y === -1)
    const goToBottomLeft = () => setPos({ x: 0, y: window.innerHeight - 200 });

    useEffect(() => {
        if (!isOpen) {
            console.log('sending ' + windowId + ' to bottom left')
            goToBottomLeft();
        } 
        else if (isFullscreen) {
            promoteZIndex(windowId);
            setSavedPos({x: -1, y: -1}); // clear saved pos when going fullscreen so we return to placeholder on un fullscreen
            setPos({ x: maxWindowRect.x, y: maxWindowRect.y });
            setSize({ width: maxWindowRect.width, height: maxWindowRect.height });
        } 
        else {
            promoteZIndex(windowId);
            if (hasSavedPos()) {restorePos(); return}
        }
    }, [isOpen, isFullscreen]);
    
    return {
    pos,
    setPos,
    size,
    setSize,
    isFullscreen,
    setIsFullscreen,
    savePos,
  };
}