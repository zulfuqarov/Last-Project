import React from 'react'
import Navbar from './header/Navbar'
import Header from './header/Header'
import SectionsWelcome from './sections/SectionsWelcome'
import SectionsNewest from './sections/SectionsNewest'


const Home = () => {
  return (
   <div>
   <Navbar />
   <Header />
   <SectionsWelcome/>
   <SectionsNewest/>
   </div>
  )
}

export default Home