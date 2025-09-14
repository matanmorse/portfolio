import type { WindowLayout } from "../../types/LayoutTypes";

const NewLayout : WindowLayout = {
    title: "New Layout",
    layout: {
        'resume': {
            position: 1,
            size: {x: 400, y: 400},
            offset: {x: 100, y: 0}
        },
        'testimonials': {   
            position: 3,
            size: {x: 900, y: 300}
        }
    }
}

export default NewLayout