import type { JSX } from "react"
import WindowControls from "./WindowControls"

interface MobileWindowProps {
    content: JSX.Element,
    windowId: string,
    isOpen: boolean,
}

const MobileWindow = ({content, windowId, isOpen} : MobileWindowProps) => {
    return (
        <div className={"window mobile pixel-border " + (isOpen ? "display-none" : "")}>
            <div className="draggable-area">
                <WindowControls
                        windowTitle={windowId.charAt(0).toLocaleUpperCase() + windowId.slice(1)}
                        closeWindow={() => 0}
                        onMinimize={() => 0}
                        onMaximize={() => 0}
                    />
            </div>

            <div className="window-content">{content}</div>
        </div>
    )
}

export default MobileWindow