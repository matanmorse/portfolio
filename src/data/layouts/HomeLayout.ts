import type { WindowLayout } from "../../types/LayoutTypes";

const Layout : WindowLayout = {
    title: "Home",
    layout: {
        'about': {
            position: 3,
            size: {x: 1100, y:950},
            offset: {x: -125, y:0}
        },
        'projects': {
            position: 2,
            size: {x: 1000, y: 430},
            offset: {x: 0, y: 0},
            props: {lockedType: 'featured', carousel: true},
            title: 'Featured Projects'
        },
        'blog': {   
            position: 4,
            size: {x: 1000, y: 500},
            offset: {x:0,y:40}
        }
    }
}

export default Layout