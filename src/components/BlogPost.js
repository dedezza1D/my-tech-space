import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const [markdown, setMarkdown] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [slug]);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default BlogPost;
