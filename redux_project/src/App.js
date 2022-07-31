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
}
 
 

export default App;
