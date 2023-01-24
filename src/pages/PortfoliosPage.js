import React from 'react';
// import {Link} from 'react-router-dom';
import  {PortfoliosData}  from '../components/PortfoliosData';
import '../styles/portfoliospage.css';
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'


const PortfolioPage = () => {
return(
  <body className="portfolios-body">
    <h2 className="portfolios-title">Portfolios</h2>
    <div className="portfolios-card-container">
    {PortfoliosData.map((item,index)=>{
      return(
            <div className="portfolios-card">
          <img alt={item.title} src={item.pic}/>
          <div className="icon-container">
          <ul className="icon-list">
                                    <li>
                                        <a href={item.link1} target={item.link1} alt="Repository link">
                                            <AiIcons.AiFillGithub/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2} target={item.link2} alt="Application link">
                                            <BsIcons.BsLaptop/>
                                        </a>
                                    </li>
                                </ul>
          </div>
               <div className={item.cName}key={index}>{item.title}</div>
                <p>{item.description}</p>
               </div>
      )})}
      </div>
  </body>
)
}




export default PortfolioPage;