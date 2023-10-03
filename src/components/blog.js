
import Navbar from './navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.css'
import s3p from './images/s3.png'
const apiKey = 'AIzaSyDXtTnKSHRpSzkO5ThAUjepM_LBSuA8axg';
const blogId = '7277986497118541841'; // Replace with your blog's ID
const postId = '3393098599662649676'; 

function Blog() {
	const [postData, setPostData] = useState(null);

  useEffect(() => {
    axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}&fetchBody=true`)
      .then((response) => {
        const postData = response.data;
        setPostData(postData);
		console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Render the author name, article title, and link in separate div containers
  return (
    <div>
  <Navbar />
  <div className="blog1">
    {postData && (
      <a href={postData.url} target="_blank" rel="noopener noreferrer" className="blog1-link">
        <div className="article-title">{postData.title}</div>
        <p>
          Example of utilizing Amazon S3 as a website storage area that enables users to see it openly. Numerous
          front-end programming languages may be used by developers, including Vue, React, Nuxt, and simply simple HTML,
          CSS, and JavaScript.
        </p>
        <div className="link">Read more</div>
		<div className="published">{new Date(postData.published).toLocaleDateString()}</div>
      </a>
    )}
  </div>
</div>

  );
  }
  
  export default Blog;







