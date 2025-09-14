import React from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";

const BlogLayout = ({ posts }) => {
  return (
    <div className="blog-layout">
      <h1>Blog Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <MarkdownRenderer content={post.content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogLayout;