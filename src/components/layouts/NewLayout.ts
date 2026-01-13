import type { WindowLayout } from "../../types/LayoutTypes";

const NewLayout : WindowLayout = {
    title: "Work",
    layout: {
        'experience': {
            position: 1,
            size: {x: 750, y: 600},
            offset: {x: 0, y: -25}
        },
        'projects': {
            position: 0,
            size: {x: 700, y: 600},
            offset: {x: 150, y: 0}
        }
    }
}

export default NewLayout