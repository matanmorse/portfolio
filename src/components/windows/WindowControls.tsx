interface WindowControlsProps {
    windowTitle: string,
    closeWindow: () => void,
    onMaximize: () => void,
    onMinimize: () => void,
}

const WindowControls = ({windowTitle, onMinimize, onMaximize, closeWindow} : WindowControlsProps) => {
    return (
        <div className="window-controls">
            <h3 className="window-title">{windowTitle}</h3>
            <div className="controls">
                <button className="window-control minimize"
                    onClick={onMaximize}>[]
                </button>
                <button className="window-control maximize"
                    onClick={onMinimize} >_
                </button>
                <button className="window-control close"
                    onClick={closeWindow}>X
                </button>
            </div>
        </div>

    )
}

export default WindowControls;