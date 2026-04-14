import { useLocation } from "react-router-dom";
import AboutLayout from "../data/layouts/AboutLayout";
import Layout from "../data/layouts/HomeLayout";
import WorkLayout from "../data/layouts/WorkLayout";
import BlogLayout from "../data/layouts/BlogLayout";
import AckLayout from "../data/layouts/AckLayout";

const useRouteLayout = () => {
    const LocationToLayout = {
        '': Layout,
        'about': AboutLayout,
        'projects': WorkLayout,
        'blog': BlogLayout,
        'acknowledgements': AckLayout
    }
    const location = useLocation();
    const parts = location.pathname.split("/").filter(Boolean)

    const layoutName = parts[0] ?? "home"
    console.log("layout name: " + layoutName);
    const id = parts[1] ?? null // id of a blog post or project, if applicable

    const layout = LocationToLayout[layoutName as keyof typeof LocationToLayout] ?? Layout;
    console.log(layout);
    return {layout, id};
}

export default useRouteLayout;