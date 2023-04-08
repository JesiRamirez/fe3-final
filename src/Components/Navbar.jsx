import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate();

  const {themeState, themeDispatch} = useGlobalStates();
  

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type:'SET_DARK'})
    }else{
      themeDispatch({type:'SET_LIGHT'})
    }
  }

  return (
    <nav>

      <button onClick={() => navigate(-1)}>←</button>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/favs'><h3>Favorites</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      
      <button  onClick={switchTheme}>{themeState.theme ? '🌘' : '☀️'}</button>

    </nav>
  )
}

export default Navbar