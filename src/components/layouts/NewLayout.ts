import type { WindowLayout } from "../../types/LayoutTypes";

const NewLayout : WindowLayout = {
    title: "Work",
    layout: {
        'experience': {
            position: 1,
            size: {x: 1250, y: 1100},
            offset: {x: 0, y: -25}
        },
        'projects': {
            position: 0,
            size: {x: 1000, y: 750},
            offset: {x: 150, y: 0}
        }
    }
}

export default NewLayout