import type { Blog } from '../../../data/blogposts';
import { UseWindowContext } from '../../../contexts/WindowContext';

interface BlogPreviewProps {
    post: Blog;
}

const BlogPreview = ({post}: BlogPreviewProps) => {
    const {openWindow} = UseWindowContext();

    return (
         <div key={post.id} onClick={() => openWindow('about')} className="blog-post pixel-border">
            <div className="blog-post-header">
                <h2 className="blog-post-title">{post.title}</h2>
                <div className="blog-post-date">{post.date.toDateString()}</div>
            </div>
                <div className="blog-post-content-preview">{post.byline}</div>
        </div>
    )
}

export default BlogPreview;