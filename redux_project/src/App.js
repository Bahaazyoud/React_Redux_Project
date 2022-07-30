<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {Login} from "./pages/login";
import Registeration from "./pages/registeration";
import Dashboard from "./admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Registeration />} />
      </Routes>
    </Router>
=======
 
import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
 


function App() {
  return (
    <div >
    
    <Router>


      <Routes>
      <Route path="/" element={<Dashboard/>} />

        <Route path="/Users" element={<ShowUsers/>} />
        

      </Routes>

    </Router>

   
    </div>
>>>>>>> e44e198930f2b32fe37403590ae740dbb7eb8668
  );
}

export default App;
