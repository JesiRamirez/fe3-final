import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useGlobalStates } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {doctor} = useGlobalStates


  let favs = localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs)



  return (
    <>
    <Navbar/>
      <h1>Dentists Favs</h1>
      <div className="card-grid">


        {parsedFavs.map(doctor => (<Card id={doctor.id} name={doctor.name} username={doctor.username}/> ))} 

   


      </div>
      <Footer/>
    </>
  );
};

export default Favs;
