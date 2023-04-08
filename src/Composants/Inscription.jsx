import React, { useState, useEffect } from 'react';
import Nav from "./Nav.jsx"
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Inscription() {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage , setSuccessMessage] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password
    };
    

    let url = "http://localhost:3001/api/inscription";
    axios.post(url,data)
    .then(res => {
      console.log(res);
    

    
    })
    .catch((err) => {
      setErrorMessage(err.response.data.message) 

    });
  
  };
  return (
    <>
      <Nav />
      <div className='container mt-4' >
        <section className="testimonial py-5" id="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-md-4 py-5 bg-primary text-white text-center ">
                <div className=" ">
                  <div className="card-body">
                    <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ width: "30%" }} />
                    <h2 className="py-3">Inscription</h2>
                    <p>Remplissez le formulaire ci-dessous pour créer un compte sur notre plateforme de débat en ligne.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Merci de remplir vos coordonnées</h4>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="votre pseudo" className="form-control" type="text"/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="********" className="form-control"  type="password"/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                        <label className="form-check-label" htmlFor="invalidCheck2">
                          <small>En cliquant sur Soumettre, vous acceptez nos conditions générales, notre accord de visite et notre politique de confidentialité.</small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <input type="submit" name="submit" value="cree mon compte" className="btn btn-danger" />
                  </div>
                  <small>vous avez deja un compte ? alors <Link to="/connexion">connectez vous</Link> </small>

                </form>
                <p style={{color: errorMessage ? "red" : "green"}}>{errorMessage ? errorMessage : null}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
