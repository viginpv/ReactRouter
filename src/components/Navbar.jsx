import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <div className='style'>
        Navbar
        <Link to={'/'}><h3>home</h3></Link> 
        <Link to={'/cart'}>   <h3>cart</h3></Link>
        <h3>logout</h3>
        </div></>

  )
}
