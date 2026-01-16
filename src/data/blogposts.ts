import type { JSX } from "react";
import MakingThisWebsite from "./posts/MakingThisWebsite";

type Blog = {
    id: string;
    title: string;
    date: Date;
    byline: string;
    content: () => JSX.Element;
    tags?: string[];
}

const blogPosts: Blog[] = [
    {
        id: "making-this-website",
        title: "Making This Website",
        date: new Date("2026-1-16"),
        byline: "Or: Pain, Agony, and TypeScript",
        content : MakingThisWebsite,
        tags: ["website", "react", "typescript"]
    },
    {
        id: "post-2",
        title: "Post 2",
        date: new Date("2026-1-16"),
        byline: "Or: Pain, Agony, and TypeScript",
        content : MakingThisWebsite,
        tags: ["website", "react", "typescript"]
    },
    {
        id: "post-3",
        title: "Post 3",
        date: new Date("2026-1-16"),
        byline: "Or: Pain, Agony, and TypeScript",
        content : MakingThisWebsite,
        tags: ["website", "react", "typescript"]
    }
];

export default blogPosts;
export type { Blog };
