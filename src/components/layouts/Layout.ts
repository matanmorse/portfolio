import type { WindowLayout } from "../../types/LayoutTypes";

const Layout : WindowLayout = {
    title: "Home",
    layout: {
        'about': {
            position: 1,
            size: {x: 500, y:600},
            offset: {x: 75, y:0}
        },
        'work': {
            position: 0,
            size: {x: 750, y: 400},
            offset: {x: 100, y: 0}
        },
        'blog': {   
            position: 4,
            size: {x: 900, y: 300}
        }
    }
}

export default Layout