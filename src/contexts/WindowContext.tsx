import { createContext, useContext } from "react";
import type { WindowLayout } from "../types/LayoutTypes";

type WindowContextType = { 
    openWindow: (id: string) => void;
    closeWindow: (id: string) => void; 
    minimizeWindow: (id: string) => void;  
    isWindowOpen: (id: string) => boolean;
    isWindowMinimized: (id: string) => boolean; 
    onLayoutChange: (layout: WindowLayout) => void;
    isMobileMode: boolean;
}

export const WindowContext = createContext<WindowContextType | null>(null);

export const UseWindowContext = () => {
    const context = useContext(WindowContext);
    if (!context) {
        throw new Error("UseWindowContext must be used within a WindowContextProvider");
    }
    return context;
} 
