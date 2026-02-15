import React from 'react'
import points from '../../../assets/icons/moreVerticalBlack.svg'
import ButtonList from '../../button/ButtonList'

const CardSection = ( {nomSec, elim, edit} ) => {
  return (
    <div className='my-2'>
      {/* FONDO */}
      <div className='border-2 border-blue-400 hover:border-4 rounded-2xl p-4 group'>
        {/* FONDO DE LAS LETRAS */}
        <div className='flex items-center justify-between'>
          
          <div>
            <span className='text-black font-medium'> {nomSec}</span>
          </div>
          
          <ButtonList 
            icon={points} 
            elim={elim}
            edit={edit}
          />
        
        </div>

      </div>

    </div>
  )
}

export default CardSection