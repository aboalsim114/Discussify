import React from 'react'
import Nav from "./Nav"
import '../style/connexion.css';

export default function Dashboard() {
  return (
    <>
    {sessionStorage.getItem("role") === "admin" ?
      <div>
        <Nav />
        <div className='container mt-4'>
          <h1>Dashboard</h1>
        </div>
      </div>
      :
      <div>
        <Nav />
        <div className='container mt-4'>
          <p>L'accès non autorisé</p>
        </div>
      </div>
    }
    </>
  )
}
