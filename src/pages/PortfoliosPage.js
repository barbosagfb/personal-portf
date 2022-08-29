import React from 'react';
import  {PortfoliosData}  from '../components/PortfoliosData';


const PortfolioPage = () => {
return(
  <div>Tareco
    {PortfoliosData.map((item,index)=>{
      return(
        <div key={index}>{item.pic}</div>
      )
    }
    )}
  </div>
)
}




export default PortfolioPage;