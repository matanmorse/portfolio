import { useEffect, useRef, useState } from "react";
import './WindowManager.css'
import GenericWindow from "./windows/GenericWindow";
import windowRegistry from "../windowRegistry.tsx";
import type { WindowLayout } from "../types/LayoutTypes";
import MobileWindow from "./windows/MobileWindow";

interface WindowManagerProps {
    openWindows: string[],
    minimizedWindows: string[],
    maxWindowRef: React.RefObject<HTMLDivElement | null>,
    minimizeWindow: (windowId: string) => void,
    maximizeWindow: (windowId: string) => void,
    closeWindow: (windowId: string) => void,
    onChangeLayout: (layout: WindowLayout) => void,
    layout: WindowLayout,
    layoutToggle: boolean,
}

const WindowManager = ({openWindows, minimizedWindows, maxWindowRef, layout, onChangeLayout, minimizeWindow, maximizeWindow, closeWindow, layoutToggle} : WindowManagerProps) => {
    const placeholderRefs = useRef<HTMLDivElement[]>([]);
    const [z_indexes, setZIndexes] = useState<{ [key: string]: number }>({});

    const minimizeAllExceptThis = (thisWindow: string) => {
        Object.entries(windowRegistry).forEach(entry => {
            const windowId = entry[0]
            if (!openWindows.includes(windowId) || windowId === thisWindow) return
            minimizeWindow(windowId)
        })
    }

    const maximizeAllWindows = () => {
        Object.keys(layout.layout).forEach(windowId => {
            maximizeWindow(windowId)
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
        onChangeLayout(layout)
    }, [layout])

    useEffect(() => {
        onChangeLayout(layout)
    }, [])
    if (window.innerWidth >= 1080)
    return (<div className="window-manager">
        <h1>{layout.title}</h1>
        {Object.entries(windowRegistry).map(([windowId, WindowComponent]) => (
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
                    content={<WindowComponent
                        {...(layout.layout[windowId]??"{}").props} />
                    } 
                    windowId={windowId} 
                    closeWindow={closeWindow} 
                    minimizeWindow={minimizeWindow}
                    maximizeAllWindows={maximizeAllWindows}
                    isOpen={openWindows.includes(windowId) && !minimizedWindows.includes(windowId)}
                    maxWindowRef={maxWindowRef}
                    layoutToggle={layoutToggle}
                    title={(layout.layout[windowId]??"{}").title}

                />
            </>
        ))}
            
        
    </div>)
    else return(
        <div className="window-manager">
            <h1>{layout.title}</h1>
            {Object.entries(windowRegistry).map(([windowId, WindowComponent]) => (
                <MobileWindow
                    isOpen={!Object.keys(layout.layout).includes(windowId)}
                    content={<WindowComponent
                        {...(layout.layout[windowId]??"{}").props} />}
                    windowId={windowId}
                />
            ))}

        </div>
    )

};

export default WindowManager;