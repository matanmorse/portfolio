import { useEffect, useLayoutEffect, useState } from "react";

interface LayoutOptions {
    placeholderRect: DOMRect,
    placeholderRef?: HTMLDivElement | null
    maxWindowRect: DOMRect, 
    isOpen: boolean, 
    promoteZIndex: (windowId: string) => void,
    windowId: string,
    setPos: ({x, y}: {x: number, y: number}) => void
    pos: {x: number, y: number}
}

export function useWindowLayout({placeholderRef, maxWindowRect, isOpen, windowId, promoteZIndex, setPos, pos} : LayoutOptions) {
    const [savedPos, setSavedPos] = useState({x: -1, y: -1}) // the saved position when a window is minimized
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [placeholderRect, setPlaceholderRect] = useState<DOMRect>(new DOMRect(0,0,0,0))
    const [size, setSize] = useState({width: 0, height: 0})

    const hasPlaceholderRect = () => !(placeholderRect.x === 0 && placeholderRect.y === 0 && placeholderRect.height === 0 && placeholderRect.width === 0)
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

    useLayoutEffect(() => {
            setPlaceholderRect(placeholderRef?.getBoundingClientRect() || new DOMRect(0,0,0,0))
        }, [placeholderRef]
    )

    useLayoutEffect(() => {
        conformToPlaceholder()
    }, [placeholderRect])

    useLayoutEffect(() => {
        conformToPlaceholder()
    }, [])

    const conformToPlaceholder = () => {
        if (hasPlaceholderRect()) {
            goToPlaceholder()
            makePlaceholderSize()
            setTimeout(() => {
                setIsLoaded(true);
            }, 0); 
        }
    }

    return {
    pos,
    setPos,
    size,
    setSize,
    isFullscreen,
    isLoaded,
    setIsFullscreen,
    savePos,
    goToPlaceholder,
  };
}