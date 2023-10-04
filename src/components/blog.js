
import Navbar from './navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.css'
import s3p from './images/s3.png'
import tips from './images/tips.jpeg'
const apiKey = 'AIzaSyDXtTnKSHRpSzkO5ThAUjepM_LBSuA8axg';
const blogId = '7277986497118541841'; // Replace with your blog's ID
const postIds = ['2654597709872572861','3393098599662649676']; 
const descriptions = ['This article offers invaluable advice and strategies to demystify the AWS Cloud Practitioner Exam, providing a roadmap to success. Whether you are studying for professional growth or simply aiming to grasp the fundamentals of AWS, the tips and tricks shared here will help you not only pass the exam but also gain a deeper understanding of AWS. Readers will gain insights into the exam content, including details on question formats (multiple-choice and multiple-response) and how to approach them.', 'The article provides a detailed example of how developers can use Amazon S3 to host static websites, accommodating a range of front-end programming languages, including Vue, React, Next, HTML, CSS, and JavaScript.Readers will learn about the benefits of using Amazon S3, such as durability, global accessibility, and seamless integration with AWS services. The step-by-step guide walks users through the process of deploying a static website on Amazon S3, covering essential tasks like creating a bucket, enabling hosting, making the bucket public, adding a bucket policy, and uploading content. It also provides insights on testing the website using a public URL.'];
const photos = [tips,s3p];

function Blog() {
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
    <div>
    <Navbar />
    {postData && postData.map((post, index) => (
      <div key={index} className="blog1 container">
        <img src={photos[index]} className="blog-photo" />
        <div className="blog-content">
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog1-link">
            <div className="published">{new Date(post.published).toLocaleDateString()}</div>
            <div className="article-title">{post.title}</div>
            <p className="description">{descriptions[index]}</p>
          </a>
        </div>
      </div>
    ))}
  </div>
  


  );
  }
  
  export default Blog;







