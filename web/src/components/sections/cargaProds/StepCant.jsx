import React from 'react'

const StepCant = ( { cant, setCant, onAdd } ) => {
  return (
    <div className='flex justify-center'>

      <div>
        <span className='bg-blue-400 p-4 rounded-2xl text-white font-bold'> Cantidad de Productos </span>

        <input
          type='number'
          placeholder='Cantidad a agregar...'
          value={cant}
          onChange={ (e) => setCant(e.target.value) }
          className={`p-2 border-2 rounded-2xl outline-none ${cant ? 'border-blue-500' : 'border-blue-400'} `} 
        />

        <div className='flex justify-center my-5'>
          <button onClick={onAdd} className='bg-blue-600 p-4 rounded-2xl text-white' > Agregar producto </button>
        </div>
      
      </div>

    </div>
  )
}

export default StepCant