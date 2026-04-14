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
                console.log('mobile open')
                // mobile behavior: close all windows and open this one
                Object.keys(windowRegistry).forEach(windowId => {
                    console.log(windowId);
                    if (windowId === post.title) return
                    closeWindow(windowId)
                });
                openWindow(post.title);
            }
            else {
                if (!isWindowOpen(post.title) || isWindowMinimized(post.title)) {
                    openWindow(post.title);
                }
                else {
                    closeWindow(post.title);
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