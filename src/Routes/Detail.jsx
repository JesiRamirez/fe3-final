import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {id} = useParams();

  const [dentist, setDentist] = useState({
    id: "",
    name: "",
    email: "",
    address: {},
    phone: "",
    website: "",
    company: {},
  });
  
  const url = `https://jsonplaceholder.typicode.com/users/:${id}`


  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setDentist(data));
  }, []);

  return (
    <>
      <Navbar/>
      <h1>Detail Dentist id </h1>
      <div >
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Footer/>
    </>
  )
}

export default Detail