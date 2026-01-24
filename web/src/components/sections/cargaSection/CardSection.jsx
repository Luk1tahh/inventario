import React from 'react'

const CardSection = ( {nomSec} ) => {
  return (
    <div>
      <div className='border-2 border-blue-400 hover:border-4 rounded-2xl p-4 my-2'>
        <span className='text-black font-medium'> {nomSec}</span>
      </div>
    </div>
  )
}

export default CardSection