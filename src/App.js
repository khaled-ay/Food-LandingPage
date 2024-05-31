import React from 'react'
import Header from './Components/Header/Header'

import About from './Components/About/About'

import Cheifs from './Components/Cheifs/Cheifs'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Gallery from './Components/Gallery/Gallery'
import Book from './Components/Book/Book'
import Contact from './Components/Contact/Contact'
import Footers from './Components/Footer/Footers'
import Offer from './Components/Offers/Offer'
import Dishes from './Components/Dishes/Dishes'

const App = () => {
  return (
    <>
  <Navbar/>
 <Header/>
 <Dishes/>
 <About/>
 <Offer/>
 <Cheifs/>
 <Menu/>
 <Gallery/>
 <Book/>
 <Contact/>
 <Footers/>
 </>


  


    
  )
}

export default App