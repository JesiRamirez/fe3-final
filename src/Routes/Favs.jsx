import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favs = localStorage.getItem('favs')
  const parsedFavs = JSON.stringify(favs)

  const [id, name, username] = parsedFavs

  return (
    <>
    <Navbar/>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <Card id={id} name={name} username={username}/>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      <Footer/>
    </>
  );
};

export default Favs;
