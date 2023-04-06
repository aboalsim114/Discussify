import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
   
<div className="container mt-4">


<div class="jumbotron">
  <h1 class="display-4">Bienvenue sur notre plateforme de débat en ligne</h1>
  <p class="lead">Notre plateforme de débat en ligne offre une expérience de débat unique en son genre, en permettant aux utilisateurs de discuter de sujets brûlants avec d'autres personnes du monde entier. Nous croyons que le débat est un moyen essentiel de partager des idées et d'enrichir nos perspectives, et nous sommes ravis de vous offrir cette plateforme pour participer à des débats en temps réel.</p>
  <hr class="my-4"/>
  <p>Nos fonctionnalités de débat en ligne incluent des temps de parole limités pour chaque participant, des règles de débat claires et équitables, ainsi que des outils de modération pour assurer un débat respectueux et civilisé. Nous sommes déterminés à fournir un environnement de débat positif et constructif pour tous les utilisateurs.</p>
  <p class="lead">
  <Link className="btn btn-primary" to="/inscription">Commencer a debatre </Link>
  </p>
</div>

</div>
  )
}
