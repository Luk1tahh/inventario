import React from 'react'

const CardProd = ( {nomProd, nomSec, cant} ) => {
  return (
    <div className='flex justify-center'>
    
      <div className='flex'>
        <span> {nomSec} </span>

        <div>
          <span> {nomProd} - {cant} </span>
        </div>

      </div>
    
    </div>
  )
}

export default CardProd