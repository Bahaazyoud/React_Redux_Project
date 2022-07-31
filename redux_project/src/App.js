 import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Register  from "./pages/Login/Register";
import  Login  from "./pages/Login/login";
import { Home } from "./pages/Home";
function App() {
  return (
    <div >
    
    <Router>


      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Home/>} />
        <Route path="/Users" element={<ShowUsers/>} />
        
        <Route path="/register" element={<Register/>} />
         
        <Route path="/Login" element={<Login/>} />
      </Routes>



    </Router>

   
    </div>
 
  );
}

export default App;
