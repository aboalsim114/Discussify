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
        <div class="row">
            <div class="col-md-3" style={{position: "fixed"}}>
                <div class="card">
                    <div class="card-body">
                        <div class="h5">@{data.username}</div>
                        <div class="h7 text-muted">pseudo  : {data.username} </div>
                        <div class="h7">  {data.email} </div>
                    </div>
                    
                </div>
            </div>
         {/* toDo */}

        </div>
    </div>
    </>
  )
}
