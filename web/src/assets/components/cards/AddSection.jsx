import React, { useState } from 'react'
import AddElement from './AddElement'

const AddSection = () => {
  const [ step, setStep ] = useState(0) // 0: nada 1: nombre.. 2:addElement...
  const [ nom, setNom ] = useState('')
  const [ section, setSection ] = useState([])

  const add = () => {
    if (step === 0){
      setStep(1)
    } else if (step === 1 && nom.trim() !== '') { // asegura que no haya espacio vacio
      setStep(2)
    } }

  const handleAdd = (element) => {
    setSection( [...section, { section: nom, ...element } ] )
    setNom('') // limpiar nombre sección
    setStep(0) // volver a paso inicial
  }
  
  return (
    <div className='bg-red-500 w-max'>
      { step === 0 && ( <button onClick={ add } className='bg-green-500 hover:bg-green-600'> AÑADIR SECCION </button> ) }

      { step === 1 && (
        <input
          type='text'
          placeholder='Nombre de seccion...'
          value={nom}
          onChange={ (e) => setNom(e.target.value) }
          onKeyDown={ (e) => e.key === 'Enter' && add() }
          className='bg-green-400'
        />
      ) }

      { step === 2 && ( <AddElement onElementAdd={handleAdd}/> ) }

      {/* Vista previa de secciones */}
      <div className="mt-4 grid gap-2">
        {section.map( (s, i) => (
          <div key={i} className="bg-black text-white p-2 rounded">
            <p>📂 {s.section}</p>
            <p>📦 {s.nomb} ( x {s.cant} )</p>
          </div>
        ) ) }
      </div>

    </div>
  )
}

export default AddSection
