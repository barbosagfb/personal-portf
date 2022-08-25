import React from 'react';
import "../styles/aboutpage.css";
import { Link } from "react-router-dom";
import { AboutData } from '../components/AboutData';

const AboutPage = () => {
  return (
    <body className="about-container">
    <>
    <div className="about-title">About me</div>
      <ul className="about-list">
    <span>Developer passionate about simple solutions to difficult problems. enthusiast of agile methods, flexible environments, and continuous delivery. meet new challenges and solve them</span>
    {/* <li>Developer passionate about simple solutions to difficult problems.</li>
    <li>Enthusiast of agile methods, flexible environments, and continuous delivery.</li>
    <li>Meet new challenges and solve them</li> */}
    </ul>
    {AboutData.map((item,index) =>{
          return (
            <li key={index} className={item.cName}>
                {item.icon}
                <span>{item.title}</span>
                <span>{item.description}</span>
            </li>
          )})}

    {/* <li>Full Name:</li>
    <li>Age:</li>
    <li>Languages:</li>
  <li>Location:</li> */}
  

    <Link className="link"
          to="public\documents\CV_GUILHERME_BARBOSA.pdf"
          target="_blank"
          download
          ><button className="download-btn">DOWNLOAD CV</button> 
        </Link>
          </>
          </body>
  );
}

export default AboutPage;