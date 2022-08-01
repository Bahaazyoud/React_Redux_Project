import Dashboard from "./admin/Dashboard";
import ShowUsers from "./admin/showUsers";
import Posts from "./admin/Posts";
import AddUser from "./admin/redux/AddUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Register  from "./pages/Login/Register";
import  Login  from "./pages/Login/login";
import { Home } from "./pages/Home";
<<<<<<< HEAD
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
=======
import { createContext, useState } from 'react';
import Comments from "./admin/Comments";

 const userContext = createContext();
 
function App() {

  const [userData, setUserData] = useState([]);

  return (
    <div >
     
     <userContext.Provider value={{ userData, setUserData }}>
>>>>>>> 6e61e58bb03dcea75fe4a9b7ae973121078d6347
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Users" element={<ShowUsers/>} />
        <Route exact path="/addUser" element={<AddUser/>} />
<<<<<<< HEAD


=======
        <Route exact path="/comments" element={<Comments/>} />
>>>>>>> 6e61e58bb03dcea75fe4a9b7ae973121078d6347
        <Route exact path="/Posts" element={<Posts/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Home />} />

      </Routes>



    </Router>
<<<<<<< HEAD
</userContext.Provider>
   
=======

    </userContext.Provider>
>>>>>>> 6e61e58bb03dcea75fe4a9b7ae973121078d6347
    </div>
  );
};

export default App;
