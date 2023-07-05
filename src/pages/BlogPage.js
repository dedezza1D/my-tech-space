import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-posts">
      <h2>Blog Page</h2>
      <p>Welcome to our blog! Here we talk about all things tech...</p>

      <Navbar />
    </div>
  );
}

export default Blog;
