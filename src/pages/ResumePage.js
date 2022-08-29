import React from 'react';
import '../styles/resumepage.css';
import {ResumeData , Resume2Data , resumeJobData} from '../components/ResumeData';

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
<div className="resume-container2">
        <div className="resume-title2">
          <h2>Resume</h2>
        </div>
      <div className="resume-list2">
        {resumeJobData.map((item,index)=>{
          return(
            <div className="joblist">
          <h4 key={index}>{item.title1}</h4>
          <h4>{item.role}</h4>
            </div>
          )
        })}
      {Resume2Data.map((item,index)=>{
        return (
          <div>
          <li key={index}>{item.description}</li>
          </div>
        )
      })}
      </div>
  </div>
      </body>
  );
}

export default ResumePage;