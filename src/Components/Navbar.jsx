import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import { useGlobalStates } from './utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate();

  //const {state, dispatch} = useGlobalStates();
  

  const changeTheme = () => {
    
  
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => navigate(-1)}>←</button>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/favs'><h3>Favorites</h3></Link>
      <Link to='/detail'><h3>Detail</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      
      <button onClick={changeTheme()}>🌗</button>
    </nav>
  )
}

export default Navbar