    import BlogWindow from "./components/windows/blog/BlogWindow";
import TestimonialsWindow from "./components/windows/testimonials/TestimonialsWindow";
import AboutWindow from "./components/windows/about/AboutWindow";
import ExperienceWindow from "./components/windows/experience/ExperienceWindow";
import ProjectsWindow from "./components/windows/projects/ProjectsWindow";
import ProjectLearningWindow from "./components/windows/projects/ProjectLearningWindow";
import FAQWindow from "./components/windows/FAQ/FAQWindow";
import BlogTipWindow from "./components/windows/tips/BlogTipWindow";
import blogPosts from "./data/blogposts";
import ArtWindow from "./components/windows/acks/ArtWindow";
import NicchanWindow from "./components/windows/acks/NicchanWindow";

const derivedRegisry = Object.fromEntries(
    blogPosts.map(post => [
        post.title, post.content
    ])
)

const manualRegistry  = {
    "about": AboutWindow,
    "blog": BlogWindow,
    "testimonials": TestimonialsWindow,
    "experience": ExperienceWindow,
    "projects": ProjectsWindow,
    "project based learning": ProjectLearningWindow,
    "frequently asked questions": FAQWindow,
    "tip: blogs": BlogTipWindow,
    "art": ArtWindow,
    "nicchan": NicchanWindow,
}

const windowRegistry = {
    ...manualRegistry,
    ...derivedRegisry
}

export default windowRegistry