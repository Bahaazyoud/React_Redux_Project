 
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
}

export default App;
