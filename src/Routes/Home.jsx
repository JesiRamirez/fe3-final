import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {doctor} = useGlobalStates()
  
  return (
    <main className="" >
      <Navbar/>
      <h1>Home</h1>
      <div className='card-grid'>
        {doctor.map((item) => <Card  key={item.id} name = {item.name} username = {item.username} />)}
      </div>
      <Footer/>
    </main>
  )
}

export default Home