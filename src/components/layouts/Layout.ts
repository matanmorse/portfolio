import type { WindowLayout } from "../../types/LayoutTypes";

const Layout : WindowLayout = {
    title: "Home",
    layout: {
        'about': {
            position: 1,
            size: {x: 750, y:600},
            offset: {x: 0, y:0}
        },
        'projects': {
            position: 0,
            size: {x: 1000, y: 430},
            offset: {x: -100, y: 0},
            props: {lockedType: 'featured', carousel: true},
            title: 'Featured Projects'
        },
        'blog': {   
            position: 4,
            size: {x: 1100, y: 600},
            offset: {x:-300,y:-200}
        }
    }
}

export default Layout