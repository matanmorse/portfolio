import ResumeWindow from "./components/windows/ResumeWindow";
import WorkWindow from "./components/windows/WorkWindow";
import BlogWindow from "./components/windows/BlogWinodw";
import TestimonialsWindow from "./components/windows/TestimonialsWindow";
import AboutWindow from "./components/windows/AboutWindow";
import ExperienceWindow from "./components/windows/ExperienceWindow";
import ProjectsWindow from "./components/windows/ProjectsWindow";
import ProjectLearningWindow from "./components/windows/ProjectLearningWindow";
import FAQWindow from "./components/windows/FAQWindow";
const windowRegistry  = {
    "about": AboutWindow,
    "resume": ResumeWindow,
    "work": WorkWindow,
    "blog": BlogWindow,
    "testimonials": TestimonialsWindow,
    "experience": ExperienceWindow,
    "projects": ProjectsWindow,
    "project based learning": ProjectLearningWindow,
    "frequently asked questions": FAQWindow,
}

export default windowRegistry