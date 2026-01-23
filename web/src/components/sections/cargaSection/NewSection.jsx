import React, { useState } from 'react'

const NewSection = () => {
  const [nom, setNom] = useState('')
  const [section, setSection] = useState([])

  const addSection = () => {
    const newSection = {
      nombre: nom
    }
    setSection( prev => [...prev, section] )
    setNom('')
  }

  return (
    <div className='bg-gray-700 min-h-screen'>
      <div>
        <input type="text" placeholder='Nueva seccion...' value={nom} onChange={ (e) => setNom(e.target.value) } />

        <button onClick={addSection}> Agregar </button>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default NewSection