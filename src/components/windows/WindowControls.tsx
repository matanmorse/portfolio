interface WindowControlsProps {
    closeWindow: () => void,
    onMaximize: () => void,
    onMinimize: () => void,
}

const WindowControls = ({onMinimize, onMaximize, closeWindow} : WindowControlsProps) => {
    return (
        <div className="window-controls">
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

    )
}

export default WindowControls;