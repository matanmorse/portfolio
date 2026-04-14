import type { WindowLayout } from "../../types/LayoutTypes";

const BlogLayout : WindowLayout = {
    title: "Blog",
    layout: {
        'blog': {
            position: 1,
            size: {x: 1000, y: 800},
            offset: {x: 0, y: 0}
        },
        'tip: blogs': {
            position: 2,
            size: {x: 500, y: 400},
            offset: {x: 50, y: 100}
        }
    }
}

export default BlogLayout;