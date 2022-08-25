import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import '../styles/navbar.css'
import { IconContext } from 'react-icons';


const Navbar = () =>{
  const [sidebar, setSidebar] = useState(false);

  const handleShowSidebar= () => setSidebar(!sidebar)
  
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={handleShowSidebar}/>
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={handleShowSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineCloseSquare/>
          </Link>
        </li>
        {SidebarData.map((item,index) =>{
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
                </Link>  
            </li>
              
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
        </>
  )
}

export default Navbar;