import React,{useState} from 'react'
import Nav from "./Nav"
import '../style/connexion.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import jwt from "jsonwebtoken"; // Add this line


export default function Connexion() {

  const history = useNavigate();
 


  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
  
    let url = "/api/connexion";
    await axios
      .post(url, data)
      .then((res) => {
        if (res.data.token) {
          const decodedToken = jwt.decode(res.data.token);
          const userId = decodedToken.userId; // Retrieve the user ID from the decoded token
          const role = decodedToken.role;
          if(role === "admin")
          {
            localStorage.setItem("token", res.data.token);
            history("/Dashboard")
          }
          else{

            localStorage.setItem("token", res.data.token);
            history(`/logged/${userId}`);
          }
        } else if (res.data === "Invalid password") {
          setErrorMessage(res.data);
        } else if (res.data === "Invalid username") {
          setErrorMessage(res.data);
        }
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };
  

  return (
    <>
    <Nav />
    <div className='container mt-4'>
      <form  onSubmit={handleSubmit}>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card-group mb-0">
          <div class="card p-4">
            <div class="card-body">
              <h1>Connexion</h1>
              <p class="text-muted">Connectez-vous à votre compte</p>
              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="pseudo"/>
              </div>
              <div class="input-group mb-4">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="******"/>
              </div>
              <div class="row">
                <div class="col-6">
                <input type="submit"   className="btn btn-primary" />
                </div>
                <div class="col-6 text-right">
                <p style={{color: "red"}}> {errorMessage} </p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </form>
    </div>
    </>
  )
}
