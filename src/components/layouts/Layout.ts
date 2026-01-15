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
            size: {x: 1250, y: 610},
            offset: {x: -300, y: 0},
            props: {lockedType: 'featured'},
            title: 'Featured Projects'
        },
        'blog': {   
            position: 4,
            size: {x: 1100, y: 600},
            offset: {x:-200,y:-100}
        }
    }
}

export default Layout