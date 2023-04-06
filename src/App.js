
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Composants/Home'
import Inscription from "./Composants/Inscription"
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
        exact
        path="/inscription"
        element={<Inscription  />}
      />
      
     
    </Routes>
  </Router>
  );
}

export default App;
