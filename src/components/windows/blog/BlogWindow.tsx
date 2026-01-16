import './BlogWindow.css';
import blogPosts from '../../../data/blogposts';
import BlogPreview from './BlogPreview';
const BlogWindow = () => {
    return (
    <div className='blog-posts'>
    {blogPosts.map(post => (
       <BlogPreview key={post.id} post={post} />
    ))}
    </div>
    );
}

export default BlogWindow;