import React from 'react'
import Services from '../components/Services'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='pt-10'>
      <About /> 
      <Services />
      <Footer />
      </div>
      
    </div>
  )
}

export default HomePage