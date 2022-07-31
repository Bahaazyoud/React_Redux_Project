import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import Posts from "./admin/Posts";
import AddUser from "./admin/redux/AddUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/login";
import { Home } from "./pages/Home";
<<<<<<< HEAD
import Comments from "./admin/Comments";
function App() {
  return (
    <div >
    
    <Router>


      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Users" element={<ShowUsers/>} />
        <Route exact path="/addUser" element={<AddUser/>} />
        <Route exact path="/comments" element={<Comments/>} />

        <Route exact path="/Posts" element={<Posts/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home />} />

      </Routes>



    </Router>

   
=======
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/register" element={<Registeration />} /> */}
          <Route exact path="/Users" element={<ShowUsers />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Posts" element={<Posts />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
>>>>>>> d8cf9d1227bfaba8d570cfbd270b8811e142cbc8
    </div>
  );
};

export default App;
