import React, { useState } from 'react'
import './agregar.css'

const Agregar = () => {
  const [step, setStep] = useState(0) // 0: nada, 1: nombre, 2:cantidad
  const [nomb, serNomb] = useState("")
  const [cant, setCant] = useState("")
  const [items, setItems] = useState([])

  const add = () => {
    if (step === 0){ // solo muestra "Añadir elemento", paso inicial
      setStep(1) // al clickear muestra "Nombre..." 
    } else if (step === 1 && nomb.trim() !== "") { // asegura que no sea espacio vacio
      setStep(2) 
    } else if (step === 2 && nomb.trim() !== "") { 
      setItems( [...items, {nomb, cant} ] ) //agrega un item al array
      setNomb("") // limpia el apartado de nombre
      setCant("") // limpia el apartado de cantidad
      setStep(0) // vuelve a iniciar
    }
  };

  return (
    <div class=''>
      { step === 0 && (
        <button onClick={add} class='bg-red-500'> AÑADIR ELEMENTO </button>
      ) }

      { step === 1 && (
        <input 
          type="text"
          placeholder='Nombre...'
          value={nomb}
          onChange={ (e) => setNomb(e.target.value) }
          onKeyDown={ (e) => e.key === 'Enter' && add() }
          class='bg-red-400'
        />
      )}
    </div>
  )
}

export default Agregar
