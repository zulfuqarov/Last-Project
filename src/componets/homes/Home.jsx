import React from 'react'
import Navbar from './header/Navbar'
import Header from './header/Header'
import SectionsWelcome from './sections/SectionsWelcome'
import SectionsNewest from './sections/SectionsNewest'
import SectionsParalax from './sections/SectionsParalax'
import SectionCountr from './sections/SectionCountr'
import SectionsCards from './sections/SectionsCards'
import SectionSign from './sections/SectionSign'
import SectionStudying from './sections/SectionStudying'
import Footer from './header/Footer'
const Home = () => {
  return (
   <div>
   <Navbar />
   <Header />
   <SectionsWelcome/>
   <SectionsNewest/>
   <SectionsParalax/>
   <SectionCountr/>
   <SectionsCards/>
   <SectionSign/>
   <SectionStudying/>
   <Footer/>
   </div>
  )
}

export default Home