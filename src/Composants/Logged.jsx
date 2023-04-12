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
    <div className=' mt-4'>
      
      <p>User Name: {data.username}</p>
        <p>User Email: {data.email}</p>

        <p>Role : {data.role}</p>
       

    </div>
    </>
  )
}
