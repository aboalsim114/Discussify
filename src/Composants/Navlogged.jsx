import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Navlogged() {
    const history = useNavigate()
  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page
   history("/connexion")
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
      <div class="container-fluid" bis_skin_checked="1">
        <a class="navbar-brand">Discussify </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01" bis_skin_checked="1">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="">Acceuil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}
