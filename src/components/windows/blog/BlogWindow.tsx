import './BlogWindow.css';
import blogPosts from '../../../data/blogposts';
import BlogPreview from './BlogPreview';
const BlogWindow = () => {
    return (
    <div className='blog-posts'>
    <h2>No Posts Yet! Please check back soon.</h2>
    {blogPosts.map(post => (
       <BlogPreview key={post.id} post={post} />
    ))}
    </div>
    );
}

export default BlogWindow;