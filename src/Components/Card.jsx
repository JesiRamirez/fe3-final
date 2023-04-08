import React, { useEffect , useState} from "react";
import { useGlobalStates } from "./utils/global.context";
import { Link } from "react-router-dom";


const Card = ({name, username, id}) => {

  const {favs, favState, favDispatch} = useGlobalStates()

  const urlById = `https://jsonplaceholder.typicode.com/users/${id}`;

  const [dentistSelectedById, setDentistSelectedById] = useState({});

  const addFav = () => {
    const existFav = favState.find((f) => f.id === dentistSelectedById.id);

    if (existFav) {
      alert('You can not add a dentist that is already in your favorites list.');
    } else {
    favDispatch({type: 'ADD_FAV', payload: dentistSelectedById})
      alert('You add a new dentist to your favs!');
    }
  };
   

  return (
    <div className="card">

      <Link key={id} to={`/detail/${id}`}>
        <div key={id}>
          <img
            className="card-img"
            src="/images/doctor.jpg"
            alt="Doctor"
            width={180}
          />
          <h3>{name}</h3>
          <h2>{username}</h2>
          {/* <img src="/images/DH.png" alt="" /> */}
        </div>
      </Link>

      <button onClick={addFav} className="favButton">
          ❤️ Add fav ❤️
        </button>    </div>
  );
};

export default Card;
