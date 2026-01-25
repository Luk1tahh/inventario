import React from 'react'

const AddCant = ( {cant, setCant, addProd} ) => {
  return (
    <div>
      <input
        type='number'
        value={cant} 
        placeholder='Cantidad...' 
        onChange={ (e) => setCant(e.target.value) }
        className={`border-2 outline-none ${cant ? 'border-blue-600 border-3' : 'border-blue-400'} rounded-2xl text-black p-2 mr-2`}
        />

      <button onClick={addProd} className='text-white bg-blue-500 hover:bg-blue-700 rounded-2xl p-3'> Agregar Producto </button>
    </div>
  )
}

export default AddCant