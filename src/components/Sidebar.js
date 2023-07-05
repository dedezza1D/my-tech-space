import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch recent posts from an API or data source
    fetch('/api/recent-posts')
      .then((response) => response.json())
      .then((data) => setRecentPosts(data));

    // Fetch categories from an API or data source
    fetch('/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="sidebar">
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>

      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h3>About Me</h3>
      <p>Add some text about yourself and your expertise in the tech industry.</p>
    </div>
  );
}

export default Sidebar;
