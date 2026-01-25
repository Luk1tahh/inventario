import React from 'react'
import points from '../../assets/icons/moreVerticalBlack.svg'

const ButtonList = ( {icon, edit, elim} ) => {
    return (
    <div>
      {/* FONDO DE BOTON */}
      <button className='group relative cursor-pointer'>
        <img src={icon} /> 
        {/* FONDO DE LISTA */}
        <div className='bg-white absolute rounded-lg p-4 mx-6 shadow-lg scale-x-0 group-focus:scale-x-100 origin-left duration-200'>

          <div className='hover:bg-gray-100 p-3 rounded-2xl'>
            <a onClick={edit} className='cursor-pointer'> Editar </a>
          </div>

          <div className='hover:bg-gray-100 p-3 rounded-2xl'>
            <a onClick={elim} className='cursor-pointer'> Eliminar </a>
          </div>

        </div>

      </button>

    </div>
  )
}

export default ButtonList