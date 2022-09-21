import React from 'react';
import  {PortfoliosData}  from '../components/PortfoliosData';
import '../styles/portfoliospage.css';
// import GitHub from '@material-ui/icons/GitHub';
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
// import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';


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
                                        <a href={item.link1} target="_blank">
                                            <AiIcons.AiFillGithub/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2} target="_blank">
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