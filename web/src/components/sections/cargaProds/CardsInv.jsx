import React from 'react'

const CardsInv = ( { sec, productos } ) => {

  if (productos.length === 0) return null

  return (
    <div className='p-10 border-4 border-blue-300 rounded-3xl'>
      
      <div className='pb-8 text-center'>
        <span className='font-extrabold tracking-wide'> {sec} </span>
      </div>

      <span className='bg-blue-400 p-4 rounded-2xl text-white font-bold'> Productos cargados </span>

      <div className='flex flex-wrap gap-4 mt-6'>
        {productos.map( (p, i) => (
          <div key={i} className='p-2 border-2 border-blue-400 rounded-2xl'>
            {p.nombre} - {p.cantidad ?? 'Sin cantidad'}
          </div>
        ) ) }
      </div>

    </div>
  )
}

export default CardsInv