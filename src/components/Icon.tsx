import type { WindowLayout } from '../types/LayoutTypes';
import './Icon.css';

interface IconProps {
    opens: WindowLayout,
    title: string,
    imgName: string,
    changeLayout: (layout: WindowLayout) => void,
}

const Icon = ({opens, title, imgName, changeLayout} : IconProps) => {
    const imgSrc = new URL(`../assets/${imgName}`, import.meta.url).href;

    return (
    <div className="icon" onClick={() => changeLayout(opens)}>
        <img src={imgSrc} alt={title} />
        {title}
    </div>
    )
}

export default Icon;