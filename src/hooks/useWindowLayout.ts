import { useEffect, useState } from "react";

interface LayoutOptions {
    placeholderRect: DOMRect,
    maxWindowRect: DOMRect, 
    isOpen: boolean, 
    promoteZIndex: (windowId: string) => void,
    windowId: string,
    setPos: ({x, y}: {x: number, y: number}) => void
    pos: {x: number, y: number}
}

export function useWindowLayout({placeholderRect, maxWindowRect, isOpen, windowId, promoteZIndex, setPos, pos} : LayoutOptions) {
    const [size, setSize] = useState({width: placeholderRect.width, height: placeholderRect.height})
    const [savedPos, setSavedPos] = useState({x: -1, y: -1}) // the saved position when a window is minimized
    const [isFullscreen, setIsFullscreen] = useState(false);

    const savePos = () => setSavedPos(pos)
    const restorePos = () => hasSavedPos() && setPos(savedPos);
    const hasSavedPos = () => !(savedPos.x === -1 && savedPos.y === -1)
    const goToBottomLeft = () => setPos({ x: 0, y: window.innerHeight - 200 });
    const goToPlaceholder = () => setPos({ x: placeholderRect.x, y: placeholderRect.y });
    const makePlaceholderSize = () => setSize({width: placeholderRect.width, height: placeholderRect.height})

    useEffect(() => {
        if (!isOpen) {
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
            makePlaceholderSize();
            if (hasSavedPos()) {restorePos(); return}
            goToPlaceholder();
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
    goToPlaceholder,
  };
}