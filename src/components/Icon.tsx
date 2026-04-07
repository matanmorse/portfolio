import type { WindowLayout } from '../types/LayoutTypes';
import './Icon.css';
import '@hackernoon/pixel-icon-library/fonts/iconfont.css';

interface IconProps {
    opens: WindowLayout,
    title: string,
    iconName: string,
    changeLayout: (layout: WindowLayout) => void,
    color?: string,
}

const Icon = ({opens, title, iconName, changeLayout, color} : IconProps) => {

    return (
    <div className="icon" onClick={() => changeLayout(opens)}>
        <i className={`hn ${iconName}`} style={{color: color}}></i>
        {title}
    </div>
    )
}

export default Icon;