
import React from 'react'
import Header from '../Components/header/Header'
import Cards from '../Components/cards/Cards'
import Filter from '../Components/filter/Filter'
import NavBar from '../Components/navBar/NavBar'
import Footer from '../Components/Footer/Footer'



function Home() {
  return (
    <div>
      <NavBar />
      <Header/>
      
      <Cards/>
     
    </div>
  )
}

export default Home