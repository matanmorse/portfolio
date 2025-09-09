import ResumeWindow from "./components/windows/ResumeWindow";
import WorkWindow from "./components/windows/WorkWindow";
import BlogWindow from "./components/windows/BlogWinodw";
import TestimonialsWindow from "./components/windows/TestimonialsWindow";
import AboutWindow from "./components/windows/AboutWindow";
import type { JSX } from "react";

const windowRegistry : Record<string, JSX.Element> = {
    "about": AboutWindow(),
    "resume": ResumeWindow(),
    "work": WorkWindow(),
    "blog": BlogWindow(),
    "testimonials": TestimonialsWindow(),
}

export default windowRegistry