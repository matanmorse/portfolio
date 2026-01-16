import './BlogWindow.css';
import blogPosts from '../../../data/blogposts';
import BlogPreview from './BlogPreview';
const BlogWindow = () => {
    return (
    <>
    {blogPosts.map(post => (
       <BlogPreview key={post.id} post={post} />
    ))}
    </>
    );
}

export default BlogWindow;