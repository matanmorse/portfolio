import type { Blog } from '../../../data/blogposts';
import { UseWindowContext } from '../../../contexts/WindowContext';
import windowRegistry from '../../../windowRegistry';

interface BlogPreviewProps {
    post: Blog;
}

const BlogPreview = ({post}: BlogPreviewProps) => {
    const {openWindow, closeWindow, isWindowOpen, isWindowMinimized, isMobileMode} = UseWindowContext();
    return (
         <div key={post.id} onClick={() => {
            if (isMobileMode) {
                // mobile behavior: close all windows and open this one
                Object.keys(windowRegistry).forEach(windowId => {
                    console.log(windowId);
                    if (windowId === post.id) return
                    closeWindow(windowId)
                });
                openWindow(post.id);
            }
            else {
                if (!isWindowOpen(post.id) || isWindowMinimized(post.id)) {
                    openWindow(post.id);
                }
                else {
                    closeWindow(post.id);
                }
            }

         }} className="blog-post pixel-border">
            <div className="blog-post-header">
                <h2 className="blog-post-title">{post.title}</h2>
                <div className="blog-post-date">{post.date.toDateString()}</div>
            </div>
                <div className="blog-post-content-preview">{post.byline}</div>
        </div>
    )
}

export default BlogPreview;