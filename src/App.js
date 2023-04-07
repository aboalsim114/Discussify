
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Composants/Home'
import Inscription from "./Composants/Inscription"
import Connexion from "./Composants/Connexion"
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
     
    </Routes>
  </Router>
  );
}

export default App;
