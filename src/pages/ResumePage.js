import React from 'react';
import '../styles/resumepage.css';
import {ResumeData} from '../components/ResumeData';

const ResumePage = () => {
  return (
    <body>
      <h2 className="resume-title">My Skills</h2>
      <div className="resume-container">
      {ResumeData.map((item,index) =>{
          return (
            <div key={index} className={item.cName}>
                {item.icon}
                <p>{item.title}</p>
            <div className="progress-container">
                <progress value={item.porcentage} max="100">{item.porcentage} %</progress>
                <label>{item.porcentage}%</label>
            </div>
            </div>
          )
        })}
        </div>
<div>
      <h2>Resume</h2>
      <li>CERS - Complexo de Ensino Renato Saraiva</li>
      <li>JavaScript</li>
      </div>
      </body>
  );
}

export default ResumePage;