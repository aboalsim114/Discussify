import React, { useState, useEffect } from 'react'
import Nav from "./Nav"
import '../style/connexion.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/Dashboard')
      .then(res => {
        setIsLoading(false);
      })
      .catch(err => {
        navigate('/connexion');
      });
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>Dashboard</div>
  )
}
