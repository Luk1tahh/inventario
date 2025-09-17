import React from 'react'
import logo from '../../img/logo.png'
import Nav from './Nav'
import './navbar.css'

const Navbar = () => {
  return (
    <div class='bg-blue-950'>
      
      <div class='flex justify-around'>
        <img src={logo} class='w-40' />
      </div>

      <div>
        <Nav />
      </div>

    </div>
  )
}

export default Navbar
