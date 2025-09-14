import type { WindowLayout } from "../../types/LayoutTypes";

const NewLayout : WindowLayout = {
    title: "Home",
    layout: {
        'resume': {
            position: 1,
            size: {x: 100, y: 100},
            offset: {x: 100, y: 0}
        },
        'work': {   
            position: 3,
            size: {x: 900, y: 300}
        }
    }
}

export default NewLayout