import React from 'react'
import Navbar from './header/Navbar'
import Header from './header/Header'
import SectionsWelcome from './sections/SectionsWelcome'
import SectionsNewest from './sections/SectionsNewest'
import SectionsParalax from './sections/SectionsParalax'
import SectionCountr from './sections/SectionCountr'
const Home = () => {
  return (
   <div>
   <Navbar />
   <Header />
   <SectionsWelcome/>
   <SectionsNewest/>
   <SectionsParalax/>
   <SectionCountr/>
   </div>
  )
}

export default Home