import React from 'react'
import logo from '../../img/logo.png'

const Navbar = () => {
  const list = ['Apartado1', 'Apartado2', 'Apartado3' ]
  return (
    <div className='bg-blue-950 px-2'>
      
      <div className='w-30'>
        <img src={logo}  />
      </div>

      <div>
        <ul class='flex justify-around'>
          { list.map( (item, index) => <li key={index} class='text-white p-4 text-2xl'> {item} </li> ) }
        </ul>
      </div>

    </div>
  )
}

export default Navbar
