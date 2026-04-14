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
        date: new Date("2024-06-01"),
        byline: "A behind-the-scenes look at how I built this portfolio website from scratch.",
        content: MakingThisWebsite,
    tags: ["web development", "react", "typescript"]
    }
];

export default blogPosts;
export type { Blog };
