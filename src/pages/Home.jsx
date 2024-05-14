import React from 'react'
import './home.css'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home">
        <h2>homepage</h2>
        </div>
        <Footer/>
        </>
  )
}

export default Home