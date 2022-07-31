import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {Login} from "./pages/login";
import Registeration from "./pages/registeration";
import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import Posts from "./admin/Posts";
import AddUser from "./admin/redux/AddUser";
 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/register" element={<Registeration />} />
        <Route exact path="/Users" element={<ShowUsers/>} />
        <Route exact path="/addUser" element={<AddUser/>} />

        <Route exact path="/Posts" element={<Posts/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home />} />

      </Routes>
    </Router>
  )
}
 
 

export default App;
