import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../style/connexion.css';
import Navlogged from './Navlogged';
import axios from 'axios';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/Dashboard')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navlogged />
      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user._id}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
