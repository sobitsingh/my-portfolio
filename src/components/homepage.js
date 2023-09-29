import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import myphoto from './images/me.jpg';

function Homepage() {
  return (
    <div className="start">
      <div>
        <h1>SOBIT SINGH</h1>
        <div className="photo-container">
          <img src={myphoto} alt="myphoto" className="circular-photo" />
        </div>
        <p className="m-0">
          Welcome to my personal website! I'm Sobit Singh, and I'm passionate
          about AWS. In this section, you can learn
          more about me, my skills, and my interests.
        </p>
      </div>
      {/* <header className="bg-splash-gray px3 py3 border-bottom border-light-gray"></header> */}
      <div className='me'>
        <div className='aboutme'>
          <h2>About me</h2>
          <p>
            I am an AWS-certified Business Architecture Senior Analyst at Accenture Japan, specializing in cloud solutions. In my current role on the Global OSS team, I leverage AWS services like Grafana, Docker, and InfluxDB to create dynamic, real-time dashboards for data visualization. I also explore OpenAI integration into projects using Python, harnessing AWS infrastructure for scalability.
            Previously, as a Business Architecture Analyst, I contributed to cloud migration projects by optimizing application source code using AWS's Cast Highlight Tool, ensuring compatibility and performance. My AWS certifications include Solutions Architect - Associate, Developer - Associate, and Cloud Practitioner.
            With expertise in AWS services and a strong technical skill set in Java, C++, Python, and AI frameworks, I am dedicated to driving cloud-centric innovation and delivering efficient solutions for organizations seeking to harness the full potential of AWS.
          </p>
        </div>
        <div className='contact'>
          <h2>Contact</h2>
          <div className="contact-icons">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:sobitsingh007@gmail.com" className="text">sobitsingh007@gmail.com</a>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+8108071944350" className="text">+81-08071944350</a>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faTwitter} />
              <a href="https://twitter.com/sobitsingh007" className="text">@sobitsingh007</a>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faSquareInstagram} />
              <a href="https://instagram.com/__sobit_007" className="text">@__sobit_007</a>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/sobitsingh" className="text">@sobitsingh</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer className="sticky-footer border-top border-light-gray gray h6">
          <div className="footer-content">
            <div className="footer-left">
              &copy; 2023 Sobit Singh
            </div>
            <div className="footer-right">
              {/* Add any additional content here */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
