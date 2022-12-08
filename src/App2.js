import {BrowserRouter as Router , Routes , Route} from "react-router-dom"


import { Header, Footer, } from "./Seaction/index.js";
import { Home, Memory } from "./Pages/index";

 
import './App.css';


function App2() {
  return (
    <> 
      
      <Router>
        <Header/>
        <Routes>
         
          
          <Route path="/home" element={<Home /> } /> 
         
          <Route path="/Memory" element={<Memory/> } /> 
     
        </Routes>
        <Footer/>
      </Router>

      
    </>
  );
}

export default App2;