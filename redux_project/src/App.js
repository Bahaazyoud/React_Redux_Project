import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/Users" element={<ShowUsers />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </userContext.Provider>

    </div>
  );
}

export default App;
