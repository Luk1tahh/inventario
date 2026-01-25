import React from 'react'

const AddSec = ( {nom, setNom, addSec} ) => {
  return (
    <div>
      <input 
        value={nom} 
        placeholder="Nueva sección..."
        onChange={(e) => setNom(e.target.value)} 
        className={`border-2 outline-none ${nom ? 'border-blue-600 border-3' : 'border-blue-400'} rounded-2xl text-black p-2 mr-2`} 
      />

      <button onClick={addSec} className='text-white bg-blue-500 hover:bg-blue-700 rounded-2xl p-3'> Agregar seccion </button>
    </div>
  )
}

export default AddSec