import './Icon.css';

interface IconProps {
    opens: string,
    title: string,
    imgName: string,
    openWindow: (windowId: string) => void,
}

const Icon = ({opens, title, imgName, openWindow} : IconProps) => {
    const imgSrc = new URL(`../assets/${imgName}`, import.meta.url).href;

    return (
    <div className="icon" onDoubleClick={() => openWindow(opens)}>
        <img src={imgSrc} alt={title} />
        {title}
    </div>
    )
}

export default Icon;