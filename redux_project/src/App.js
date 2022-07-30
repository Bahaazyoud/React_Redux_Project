 
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
  );
}

export default App;
