import ResumeWindow from "./components/windows/ResumeWindow";
import WorkWindow from "./components/windows/WorkWindow";
import BlogWindow from "./components/windows/BlogWinodw";
import TestimonialsWindow from "./components/windows/TestimonialsWindow";
import AboutWindow from "./components/windows/AboutWindow";
import ExperienceWindow from "./components/windows/ExperienceWindow";
import ProjectsWindow from "./components/windows/ProjectsWindow";

const windowRegistry  = {
    "about": <AboutWindow />,
    "resume": <ResumeWindow />,
    "work": <WorkWindow />,
    "blog": <BlogWindow />,
    "testimonials": <TestimonialsWindow />,
    "experience": <ExperienceWindow />,
    "projects": <ProjectsWindow />,
}

export default windowRegistry