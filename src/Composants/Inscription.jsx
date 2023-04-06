import React, { useState } from 'react';
import Nav from "./Nav.jsx"
export default function Inscription() {

    
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
      });
      const [formError, setFormError] = useState(false);
    
      const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.username === "" || formData.email === "" || formData.password === "") {
          setFormError(true);
        } else {
          setFormError(false);
          // Faire une requête d'inscription ici
        }
      };
  return (
    <>
      <Nav />
    <div className='container mt-4' >
    <section class="testimonial py-5" id="testimonial">
    <div class="container">
        <div class="row ">
            <div class="col-md-4 py-5 bg-primary text-white text-center ">
                <div class=" ">
                    <div class="card-body">
                        <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{width : "30%"}} />
                        <h2 class="py-3">Inscription</h2>
                        <p>Remplissez le formulaire ci-dessous pour créer un compte sur notre plateforme de débat en ligne.</p>


                    </div>
                </div>
            </div>
            <div class="col-md-8 py-5 border">
                <h4 class="pb-4">Merci de remplir vos coordonnées</h4>
                <form method="POST">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <input id="username" name="username" placeholder="votre pseudo" class="form-control" type="text"/>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="email" name="email" class="form-control" id="email" placeholder="Email"/>
                        </div>
                      </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input id="password" name="password" placeholder="********" class="form-control"  type="password"/>
                        </div>
                      
                        
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <div class="form-group">
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                  <label class="form-check-label" for="invalidCheck2">
                                    <small>En cliquant sur Soumettre, vous acceptez nos conditions générales, notre accord de visite et notre politique de confidentialité.</small>
                                  </label>
                                </div>
                              </div>
                    
                          </div>
                    </div>
                    
                    <div class="form-row">
                        <button type="submit" name="submit" class="btn btn-danger">cree mon compte</button>
                    </div>
                        <small>vous avez deja un compte ? alors <a href="">connectez vous</a></small>
                </form>
            </div>
        </div>
    </div>
</section>

    </div>
    </>
  )
}
