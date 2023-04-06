import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
  <div class="container-fluid" bis_skin_checked="1">
    <a class="navbar-brand" >Discussify</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01" bis_skin_checked="1">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <Link className="nav-link active" to="/">Accueil</Link>

        </li>
    
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}



