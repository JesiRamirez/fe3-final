import { createContext, useEffect, useState, useContext, useReducer } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'dark':
      return {...state, theme:action.payload}
    case 'light':
      return {...state, theme:action.payload}
    default:
      return state
  }
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favs, setFavs] = useState([])

  const [state, dispatch] = useReducer(reducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users'


  const [doctor, setDoctor] = useState([])

  // useEffect( () => {
  //   const fetchData = async () => {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     return setDoctor(data)
  //   } 
  //   fetchData();
  // }, [])

  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDoctor(data))
  })

  return (
    <ContextGlobal.Provider value={{doctor, state, dispatch, favs, setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}