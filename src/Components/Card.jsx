import React, { useEffect } from "react";
import { useGlobalStates } from "./utils/global.context";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const {favs, setFavs} = useGlobalStates()

  useEffect(() => {
    localStorage.setItem('favs',JSON.stringify(favs))
  })

  const addFav = ({name, username, id})=>{
    setFavs([...favs,{name, username, id}])
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img src ="./images/doctor.jpg" alt='doctor' width={200} />
      <h2>{name}</h2>
      <h3>{username}</h3>
      {<Link to='/detail'>Detail</Link>}
      
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐Add Favs⭐</button>
    </div>
  );
};

export default Card;
