import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import myphoto from './images/me.jpg';
import './homepage.css';
import About from "./about.js";
import Banner from "./banner.js"

function Homepage() {
  return (
    <div>
      <Banner />
      <About />
    </div>
    );
  }
  // <div className="start">
  //   <div>
  //     <h1>SOBIT SINGH</h1>
  //     <div className="photo-container">
  //       <img src={myphoto} alt="myphoto" className="circular-photo" />
  //     </div>
  //     <h3>Welcome to my personal website!</h3>
  //     <h3>I'm <span><em>Sobit Singh</em></span> , and I'm passionate
  //       about <span><em>AWS</em></span>.</h3>
  //      <h4>In this section, you can learn
  //       more about <span><em>me</em></span>, my <span><em>skills</em></span>, and my <span><em>interests</em></span>.</h4>
  //   </div>
  //   {/* <header className="bg-splash-gray px3 py3 border-bottom border-light-gray"></header> */}
  //   <div className='me container '>
  //     <div className="row d-flex justify-content-end">
  //       <div className='aboutme col-12 col-md-6 col-lg-6'>
  //         <h2>About me</h2>
  //         <p>
  //         I am an AWS-certified Business Architecture Senior Analyst at Accenture Japan, specializing in cloud solutions. In my current role on the Global OSS team, I use AWS services like Grafana, Docker, and InfluxDB to create real-time data dashboards. I also explore OpenAI integration with Python on AWS for scalability. Previously, as a Business Architecture Analyst, I optimized application source code for cloud migration projects using AWS's Cast Highlight Tool. I hold AWS certifications including Solutions Architect - Associate, Developer - Associate, and Cloud Practitioner. I have expertise in AWS services and strong technical skills in Java, C++, Python, and AI frameworks.
  //           </p>
  //       </div>
  //       <div className='contact col-12 col-md-6 col-lg-4'>
  //         <h2>Contact</h2>
  //         <div className="contact-icons">
  //           <div className="icon fs-5">
  //             <a href="mailto:sobitsingh007@gmail.com" className="text text-decoration-none"><FontAwesomeIcon icon={faEnvelope} /><span className="contact-label">Email</span></a>
  //           </div>
  //           <div className="icon fs-5">
  //             <a href="tel:+8108071944350" className="text text-decoration-none"><FontAwesomeIcon icon={faPhone} /><span className="contact-label">Phone</span></a>
  //           </div>
  //           <div className="icon fs-5">
  //             <a href="https://twitter.com/sobitsingh007" className="text text-decoration-none"><FontAwesomeIcon icon={faTwitter} /><span className="contact-label">Twitter</span></a>
  //           </div>
  //           <div className="icon fs-5">
  //             <a href="https://instagram.com/__sobit_007" className="text text-decoration-none"> <FontAwesomeIcon icon={faSquareInstagram} /><span className="contact-label">Instagram</span></a>
  //           </div>
  //           <div className="icon fs-5">
  //             <a href="https://github.com/sobitsingh" className="text text-decoration-none"><FontAwesomeIcon icon={faGithub} /><span className="contact-label">Github</span></a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="footer">
  //     <footer className="sticky-footer border-top border-light-gray gray h6">
  //       <div className="footer-content">
  //         <div className="footer-left">
  //           &copy; 2023 Sobit Singh
  //         </div>
  //         <div className="footer-right">
  //         </div>
  //       </div>
  //     </footer>
  //   </div>
  // </div>

export default Homepage;
