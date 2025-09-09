import './Taskbar.css';

interface TaskbarProps {
    openWindows: string[],
    toggleWindow: (windowId: string) => void,
}

const Taskbar = ({openWindows, toggleWindow} : TaskbarProps) => {
    return <div className="taskbar">
        {openWindows.map(windowId => <button onClick={() => toggleWindow(windowId)} key={windowId} className="taskbar-item">{windowId}</button>)}
    </div>;
};

export default Taskbar;