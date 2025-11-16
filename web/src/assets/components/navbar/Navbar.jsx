import React from 'react'
import logo from '../../img/logo.png'

const Navbar = () => {
  const list = ['Categoria',  ]
  return (
    <div className='bg-blue-950 px-2'>
      
      <div className='flex justify-center'>
        <div className='w-30'>
          <img src={logo} />
        </div>
      </div>

      <div>
        <ul className='flex justify-around'>
          { list.map( (item, index) => <li key={index} className='text-white p-4 text-2xl'> {item} </li> ) }
        </ul>
      </div>

    </div>
  )
}

export default Navbar
