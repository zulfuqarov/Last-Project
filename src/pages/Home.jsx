import React from 'react'
import Navbar from '../componets/homes/header/Navbar'
import Header from '../componets/homes/header/Header'
import SectionsWelcome from '../componets/homes/sections/SectionsWelcome'
import SectionsNewest from '../componets/homes/sections/SectionsNewest'
import SectionsParalax from '../componets/homes/sections/SectionsParalax'
import SectionCountr from '../componets/homes/sections/SectionCountr'
import SectionsCards from '../componets/homes/sections/SectionsCards'
import SectionSign from '../componets/homes/sections/SectionSign'
import SectionStudying from '../componets/homes/sections/SectionStudying'
import Footer from '../componets/homes/header/Footer'
const Home = () => {
  return (
   <div>
   
   <Header />
   <SectionsWelcome/>
   <SectionsNewest/>
   <SectionsParalax/>
   <SectionCountr/>
   <SectionsCards/>
   <SectionSign/>
   <SectionStudying/>
   
   </div>
  )
}

export default Home