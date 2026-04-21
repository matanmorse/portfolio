import type { JSX } from "react";

type Blog = {
    id: string;
    title: string;
    date: Date;
    byline: string;
    content: () => JSX.Element;
    tags?: string[];
}

const blogPosts: Blog[] = [
];

export default blogPosts;
export type { Blog };
