
import Navbar from './navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.css'
import s3p from './images/s3.png'
import tips from './images/tips.jpeg'
import BlogBanner from './BlogBanner.js'
import BlogData from './BlogData.js';

function Blog() {
  const { apiKey, blogId, postIds, descriptions } = BlogData;
  const photos = [tips, s3p];
	const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const promises = postIds.map(async (postId) => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}&fetchBody=true`
          );
          return response.data;
        } catch (error) {
          console.error(error);
          return null;
        }
      });

      const allPostData = await Promise.all(promises);
      setPostData(allPostData);
    };

    fetchPostData();
  }, [blogId, apiKey, postIds]);
  // Render the author name, article title, and link in separate div containers
  return (
  <div className="blog">
    <Navbar />
    <BlogBanner />
    {postData && postData.map((post, index) => (
      <div key={index} className="my-blog container">
        <img src={photos[index]} className="blog-photo" alt="myself"/>
        <div className="blog-content">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog1-link">
            <div className="blog-published">{new Date(post.published).toDateString()}</div>
            <div className="blog-article-title">{post.title}</div>
            <p className="blog-description">{descriptions[index]}</p>
          </a>
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog-readmore">Read the post </a>
        </div>
      </div>
    ))}
  </div>



  );
  }

  export default Blog;
