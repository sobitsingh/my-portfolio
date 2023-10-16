import React from 'react';
import './BlogBanner.css';
import blogPic from './images/image-blog.JPG'

export default function BlogBanner(){
  return(
    <div className="row d-flex justify-content-center align-items-center Blog-Banner">
      <div className="col-12 col-md-6 col-lg-6　w-100">
        <h2 className="header-intro">Hey, I'm</h2>
        <h1 className="header-name">Sobit Singh</h1>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <img src={blogPic} alt="myself" className="banner-pic"></img>
      </div>
    </div>

  )
}
