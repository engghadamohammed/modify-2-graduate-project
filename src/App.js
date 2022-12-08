import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"


import { Register } from "./Signup/index.js";
 
import './App.css';


function App() {
  return (
    <> 
      <Register />
     
    
{      
      <Router>
       
        <Routes>
         
          
          <Route path="/login" element={ <Register/> } /> 
         
       
     
        </Routes>
       
      </Router> }

      
    </>
  );
}

export default App;
 