import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Text from './components/Text'
import About from './components/About'
import ServiceSide from './components/ServiceSide'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Text/>
      <About/>
      <ServiceSide/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App