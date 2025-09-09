import type React from 'react';
import './Desktop.css'

type DesktopProps = React.PropsWithChildren<{
    fullscreenPlaceholderRef: React.RefObject<HTMLDivElement | null>;
}>

const Desktop = ({children, fullscreenPlaceholderRef} : DesktopProps) => {
    return (
        <>
            <div className="icons">
                {children}
            </div>
            <div className="desktop-main">
                <div className="fullscreen-placeholder" ref={fullscreenPlaceholderRef}>

                </div>
            </div>
        </>
    )
};

export default Desktop;