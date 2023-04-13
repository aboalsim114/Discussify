import React,{useState,useEffect} from 'react'
import Navlogged from "./Navlogged"
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Logged() {

  const { userid } = useParams();


  const [data, setData] = useState([]);

  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/Profile/${userid}`)

      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userid]);
  



  return (
    <>
    <Navlogged/>
    <div class="container-fluid gedf-wrapper mt-4">
    <div class="jumbotron jumbotron-fluid container">
  <div class="container">
    <h1 class="display-4">Bienvenue sur Discussify {data.username} </h1>
    <p class="lead">Discussify est une plateforme de discussion en ligne qui permet aux utilisateurs de créer des groupes de discussion et de participer à des conversations avec d'autres utilisateurs du monde entier.</p>
    <hr class="my-4"/>
    <p>Notre objectif est de fournir un espace sûr et inclusif où les utilisateurs peuvent partager leurs opinions, discuter de sujets importants et se connecter avec des personnes partageant les mêmes idées.</p>
    <p class="lead">
      <a class="btn  bg-custom btn-lg" href="#" role="button">Commencer un debat </a>
    </p>
  </div>
</div>
   
        
    </div>
    
    </>
  )
}
