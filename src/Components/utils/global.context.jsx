import { createContext, useEffect, useState, useContext, useReducer } from "react";


export const ContextGlobal = createContext();

const themes = {
  dark: {
    theme: false,
    bgColor: 'black',
    color: 'white'
  },
  light: {
    theme: true,
    bgColor: 'white',
    color: 'black'
  }
}


const initialThemeState = themes.light
const initialFavState = []
//JSON.parse(localStorage.getItem('favs')) || []

const themeReducer = (state , action) => {
  switch(action.type){
    case 'SET_DARK': 
      return themes.dark
    case 'SET_LIGHT':
      return themes.light
    default:
      throw new Error()
  }
}

const favReducer = (state, action) => {
  switch (action.type){
    case 'ADD_FAV':
      return [...state, action.payload]
    default:
      throw new Error
  }
}




export const ContextProvider = ({ children }) => {

  const [doctor, setDoctor] = useState([])

  const [favState, favDispatch] = useReducer(favReducer, initialFavState)

  const [themeState,themeDispatch] = useReducer(themeReducer, initialThemeState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])


  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDoctor(data))

  })

  return (
    <ContextGlobal.Provider 
      value={{doctor, setDoctor, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}