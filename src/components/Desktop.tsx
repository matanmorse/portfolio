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
                <h1 className="page-title">Desktop</h1>
                <div className="fullscreen-placeholder" ref={fullscreenPlaceholderRef}>

                </div>
            </div>
        </>
    )
};

export default Desktop;