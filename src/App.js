import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  HomePage  from './pages/HomePage';
import  AboutPage  from './pages/AboutPage';
import  ResumePage  from './pages/ResumePage';
// import {PortfoliosPage} from './pages/PortfoliosPage'
// import {ContactPage} from './pages/ContactPage'
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
    <Routes>
   <Route path="/" element= {<HomePage/>}/>
   <Route path="/about"element={<AboutPage/>}/>
   <Route path="/resume"element={<ResumePage/>}/>
   </Routes>
   </Router> 
    </div>
  );
}

export default App;
