import type { Blog } from '../../../data/blogposts';

interface BlogPreviewProps {
    post: Blog;
}

const BlogPreview = ({post}: BlogPreviewProps) => {
    return (
         <div key={post.id} className="blog-post pixel-border">
            <div className="blog-post-header">
                <h2 className="blog-post-title">{post.title}</h2>
                <div className="blog-post-date">{post.date.toDateString()}</div>
            </div>
                <div className="blog-post-content-preview">{post.byline}</div>
        </div>
    )
}

export default BlogPreview;