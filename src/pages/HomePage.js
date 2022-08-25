import React from 'react';
import '../styles/homepage.css';
import * as BsIcons from 'react-icons/bs'
// BsWhatsapp
import * as AiIcons from 'react-icons/ai'
// AiFillLinkedin
//AiOutlineGithub


const HomePage = () => {
  return (
    
    <div className="bg">
    <div className="main-container">
        <h1>
        <span>Hello World,<br></br> i'm Guilherme</span>
        </h1>
        <span className="main-title">This is my Personal Portfolio, here you can find a little bit more about me and my work.</span>
        <div className="icons">

          <a href="https://api.whatsapp.com/send?phone=5581987056742" className="icon-i-whatsapp">
            <BsIcons.BsWhatsapp/>
          </a>
          <a href="https://github.com/barbosagfb" className="icon-i-github">
            <AiIcons.AiOutlineGithub/>
          </a>
          <a href="https://www.linkedin.com/in/barbosagfb/" className="icon-i-linkedin">
            <AiIcons.AiFillLinkedin/>
          </a>
        </div>
     </div>
    </div>
  );
} 

export default HomePage;