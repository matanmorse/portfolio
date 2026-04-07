import { useEffect, useLayoutEffect, useState } from "react"
import type { Point, WindowLayout } from "../types/LayoutTypes"
import getScale from "./scale"

interface WindowLayoutProps {
    layout: WindowLayout,
    placeholderRefs: React.RefObject<HTMLDivElement[]>,
    windowId: string,
    isFullscreen: boolean,
    setPos: ({x, y}: {x: number, y: number}) => void,
    pos: {x: number, y: number},
    setSize: ({width, height} : {width: number, height: number}) => void
    maximizeAllWindows: () => void,
    promoteZIndex: (windowId: string) => void,
    layoutToggle: boolean,
}

export function useWindowLayout({layout, placeholderRefs, windowId, isFullscreen, setPos, pos, setSize, maximizeAllWindows, promoteZIndex, layoutToggle} : WindowLayoutProps) {
    const [inLayout, setInLayout]= useState(false)
    const [isLoadingLayout, setIsLoadingLayout] = useState(true)
    const [scaleTick, setScaleTick] = useState(0);

    
    

    const hasLayoutEntry = () => Object.keys(layout.layout).includes(windowId)

    const getLayoutRect = () : DOMRect => {
        if (!hasLayoutEntry()) return new DOMRect(-1,-1,-1,-1)
        const position = layout.layout[windowId].position
        const placeHolderRef = placeholderRefs.current[position]
        if (!placeHolderRef) return new DOMRect(0,window.innerHeight,-1,-1)
        return placeHolderRef.getBoundingClientRect() 
    }

    const getLayoutSize = () : {width: number, height: number} => {
        if (!hasLayoutEntry()) return {width: 0, height: 0}
        const {sx, sy} = getScale();
        const size : Point = layout.layout[windowId].size
        return {width: size.x * sx , height: size.y * sy}
    }

    const getLayoutOffset = () => {
        if (!hasLayoutEntry()) return {x: 0, y: 0}
        const {sx, sy} = getScale();
        const offset : Point = layout.layout[windowId].offset ?? {x: 0, y: 0}
        if (!offset) return {x: 0, y: 0}
        return {
            x: offset.x * sx,
            y: offset.y * sy,
        }
    }


    useLayoutEffect(() => {
        setInLayout(hasLayoutEntry())

        const raf = requestAnimationFrame(() => {
            setLayoutRect(getLayoutRect())
            setIsLoadingLayout(false)
        })

        return () => cancelAnimationFrame(raf)
    }, [layout])

    const [layoutRect, setLayoutRect] = useState<DOMRect>(getLayoutRect())


    useEffect(() => {
        if (!hasLayoutEntry()) return
        const offset = getLayoutOffset()

        // kinda hacky, but prevent windows from going offscreen when resizing
        if(hasLayoutEntry() && layoutRect.y + offset.y > window.innerHeight - getLayoutSize().height - 20) {
            offset.y = window.innerHeight - getLayoutSize().height - layoutRect.y - 80
        }
        
        setPos({x: layoutRect.x + offset.x, y: layoutRect.y + offset.y})
        setSize(getLayoutSize())
    }, [layoutRect, layoutToggle, scaleTick])

    useEffect(() => {
        if (!isFullscreen) {
            maximizeAllWindows()
            setTimeout(() => {
                promoteZIndex(windowId)
            }, 100);
            if (!hasLayoutEntry()) return
            setSize(getLayoutSize())
        }
    }, [isFullscreen])

    useEffect(() => {
    let rafId: number | null = null

    const onResize = () => {
        if (rafId !== null) return
        rafId = requestAnimationFrame(() => {
        rafId = null
        setLayoutRect(getLayoutRect())
        setScaleTick(t => t + 1)
        setPos(pos);
        })
    }

    window.addEventListener("resize", onResize)
    return () => {
        window.removeEventListener("resize", onResize)
        if (rafId !== null) cancelAnimationFrame(rafId)
    }
    }, [])


    return {inLayout, isLoadingLayout}
}