import React from 'react'

const StepProds = ( { nom, setNom, onNext } ) => {
  return (
    <div className='flex justify-center'>

      <div>
        <span className='bg-blue-400 p-4 rounded-2xl text-white font-bold'> Nuevo Producto </span>

        <input
          value={nom}
          placeholder='Nombre del producto...'
          onChange={ (e) => setNom(e.target.value) }
          className={`p-2 border-2 rounded-2xl outline-none ${nom ? 'border-blue-500' : 'border-blue-400'} `}
        />

        <div className='flex justify-center my-5'>
          <button onClick={onNext} className='bg-blue-600 p-4 rounded-2xl text-white' > Continuar </button>
        </div>

      </div>

    </div>
  )
}

export default StepProds