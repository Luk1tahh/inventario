import React from 'react'
import './nav.css'

const Nav = () => {
    const list = ['Apartado1', 'Apartado2', 'Apartado3' ]

  return (
    <ul class='flex justify-around'>
      { list.map( (item, index) => <li key={index} class='text-white p-4 text-2xl'> {item} </li> ) }
    </ul>
  )
}

export default Nav
