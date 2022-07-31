import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import { createContext, useState } from "react";
export const userContext = createContext();

function App() {

  const [userData, setUserData] = useState([]);

  return (
    <div className="app">
        <userContext.Provider value={{ userData, setUserData }}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Users" element={<ShowUsers/>} />
      </Routes>
    </Router>
    </userContext.Provider>

    </div>
  )
}
 
 

export default App;
