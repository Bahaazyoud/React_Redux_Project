<<<<<<< HEAD
 
import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Register  from "./pages/Login/Register";
  import  Login  from "./pages/Login/Login";

function App() {
  return (
    <div >
    
    <Router>


      <Routes>
      <Route path="/" element={<Dashboard/>} />

        <Route path="/Users" element={<ShowUsers/>} />
        
        <Route path="/Register" element={<Register/>} />
         
        <Route path="/Login" element={<Login/>} />
      </Routes>



    </Router>

   
    </div>
 
  );
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {Login} from "./pages/login";
import Registeration from "./pages/registeration";
import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Registeration />} />
        <Route exact path="/Users" element={<ShowUsers/>} />
      </Routes>
    </Router>
  )
>>>>>>> 92d89c1d706010298b47208f4d2e80fcf4b3ad3b
}
 
 

export default App;
