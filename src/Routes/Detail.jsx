import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({id}) => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [detail, setDetail] = useState([])

  const url = `https://jsonplaceholder.typicode.com/users/:${id}`




  return (
    <>
      <Navbar/>
      <h1>Detail Dentist id </h1>
      <div >
        <img src="./images/doctor.png" alt="" width={200}/>
        <h1>{detail.name}</h1>
        <h1>{detail.email}</h1>
        <h1>{detail.phone}</h1>
        <h1>{detail.website}</h1>
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Footer/>
    </>
  )
}

export default Detail