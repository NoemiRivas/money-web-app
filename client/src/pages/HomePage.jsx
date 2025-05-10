import React from 'react'
import Navbar from '../components/mui/home/Navbar'
import Hero from '../components/mui/home/Hero'
import Main from '../components/mui/home/Main'
import Footer from '../components/mui/home/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main/>
      <Footer/>
    </div>
  )
}

export default HomePage
