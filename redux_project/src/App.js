 import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Register  from "./pages/Login/Register";
import  Login  from "./pages/Login/login";
import { Home } from "./pages/Home";
import { Provider } from 'react-redux';
import { createContext, useState } from "react";
// import { BrowserRouter } from 'react-router-dom';
import store from './admin/redux/store';
export const userContext = createContext();
function App() {
  const [userData, setUserData] = useState([]);
  return (
    <div >
    <userContext.Provider value={{ userData, setUserData }}>
    <Router>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Home/>} />
        <Route path="/Users" element={<ShowUsers/>} />
        
        <Route path="/register" element={<Register/>} />
         
        <Route path="/Login" element={<Login/>} />
      </Routes>



    </Router>
</userContext.Provider>
   
    </div>
 
  );
}

export default App;
