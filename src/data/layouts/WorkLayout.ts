import type { WindowLayout } from "../../types/LayoutTypes";

const WorkLayout : WindowLayout = {
    title: "Work",
    layout: {
        'experience': {
            position: 1,
            size: {x: 1250, y: 1000},
            offset: {x: 0, y: -25}
        },
        'projects': {
            position: 0,
            size: {x: 1000, y: 750},
            offset: {x: 100, y: 50}
        },
        // pbl= project-based-learning
        'project based learning': {
            position: 4,
            size: {x: 800, y: 300},
            offset: {x: 150, y: 250
        }
    }
}
}
export default WorkLayout;
