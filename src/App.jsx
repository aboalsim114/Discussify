
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Composants/Home'
import Inscription from "./Composants/Inscription"
import Connexion from "./Composants/Connexion"
import Dashboard from "./Composants/Dashboard"
import PrivateRoutes from './utils/PrivateRoutes';
import Logged from "./Composants/Logged"
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
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/logged" element={<Logged />} />
    </Route>
    

     
    </Routes>
  </Router>
  );
}

export default App;
