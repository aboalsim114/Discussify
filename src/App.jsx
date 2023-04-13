
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Composants/Home'
import Inscription from "./Composants/Inscription"
import Connexion from "./Composants/Connexion"
import Dashboard from "./Composants/Dashboard"
import PrivateRoutes from './utils/PrivateRoutes';
import PrivateRouteAdmin from "./utils/PrivateRouteAdmin";
import Logged from "./Composants/Logged"
import Profile from "./Composants/Profile"
import CreateRoom from "./Composants/CreateRoom";
function App() {
  return (
    <Router>
    <Routes>
      <Route
        exact
        path="/"
        element={<Home  />}
      />
      
      
      <Route
        
        path="/inscription"
        element={<Inscription  />}
      />
      
      <Route
        
        path="/connexion"
        element={<Connexion  />}
      />


    <Route element={<PrivateRoutes /> }>
      <Route path="/logged/:userid" element={<Logged />} />
      <Route path="/create-room" element={<CreateRoom />} />
      <Route path="/Profile" element={<Profile />} />

    </Route>
    
    <Route element={<PrivateRouteAdmin/>}>
      
      <Route path="/Dashboard" element={<Dashboard />} exact />

    </Route>

     
    </Routes>
  </Router>
  );
}

export default App;
