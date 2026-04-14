import { useNavigate } from 'react-router-dom';
import './Icon.css';
import '@hackernoon/pixel-icon-library/fonts/iconfont.css';

interface IconProps {
    opens: string,
    title: string,
    iconName: string,
    color?: string,
}

const Icon = ({opens, title, iconName, color} : IconProps) => {
    const navigate = useNavigate();
    return (
    <div className="icon" onClick={() => navigate(opens)}>
        <i className={`hn ${iconName}`} style={{color: color}}></i>
        {title}
    </div>
    )
}

export default Icon;