import { useEffect, useRef, useState } from "react";
import './WindowManager.css'
import GenericWindow from "./windows/GenericWindow";
import windowRegistry from "../windowRegistry";
import type { WindowLayout } from "../types/LayoutTypes";

interface WindowManagerProps {
    openWindows: string[],
    minimizedWindows: string[],
    maxWindowRef: React.RefObject<HTMLDivElement | null>,
    minimizeWindow: (windowId: string) => void,
    closeWindow: (windowId: string) => void,
    onChangeLayout: (layout: WindowLayout) => void,
    layout: WindowLayout
}

const WindowManager = ({openWindows, minimizedWindows, maxWindowRef, layout, onChangeLayout, minimizeWindow, closeWindow} : WindowManagerProps) => {
    const placeholderRefs = useRef<HTMLDivElement[]>([]);
    const [z_indexes, setZIndexes] = useState<{ [key: string]: number }>({});

    const minimizeAllExceptThis = (thisWindow: string) => {
        Object.entries(windowRegistry).forEach(entry => {
            const windowId = entry[0]
            if (!openWindows.includes(windowId) || windowId === thisWindow) return
            minimizeWindow(windowId)
        })
    }
    /* Puts window with given ID on top of z index */
    const promoteZIndex = (windowId: string) => { 
        const currentZIndex = z_indexes[windowId] || 0;
        const maxZIndex = Math.max(...Object.values(z_indexes), 0);
        if (currentZIndex === maxZIndex) return; // already on top
        else {
            const newZIndexes = { ...z_indexes };
            Object.keys(newZIndexes).forEach(id => {
                if (newZIndexes[id] > currentZIndex) {
                    newZIndexes[id] -= 1;
                }
            });
            newZIndexes[windowId] = maxZIndex;
            setZIndexes(newZIndexes);
        }
    }

    useEffect(() => {
        // initialize z_indexes
        let i = Object.entries(windowRegistry).length;
        const initialZIndexes: { [key: string]: number } = {};
        Object.keys(windowRegistry).forEach(windowId => {
            initialZIndexes[windowId] = --i;
        });
        setZIndexes(initialZIndexes);
    }, []);

    useEffect(() => {
        console.log(layout)
        onChangeLayout(layout)
    }, [layout])

    useEffect(() => {
        onChangeLayout(layout)
    }, [])

    return <div className="window-manager">
        <h1>{layout.title}</h1>
        {Object.entries(windowRegistry).map(([windowId, windowComponent]) => (
            <>
                {/* @ts-ignore */}
                <div className="window-placeholder" ref={el => {if(!placeholderRefs.current.includes(el)) placeholderRefs.current.push(el)}} key={windowId + "-placeholder"}>
                </div>

                <GenericWindow
                    key={windowId}
                    layout={layout}
                    placeholderRefs={placeholderRefs}
                    minimizeAllExceptThis={minimizeAllExceptThis}
                    zIndex={z_indexes[windowId] || 1}
                    promoteZIndex={promoteZIndex}
                    content={windowComponent} 
                    windowId={windowId} 
                    closeWindow={closeWindow} 
                    minimizeWindow={minimizeWindow}
                    isOpen={openWindows.includes(windowId) && !minimizedWindows.includes(windowId)}
                    maxWindowRef={maxWindowRef}
                />
            </>
        ))}
            
        
    </div>
};

export default WindowManager;