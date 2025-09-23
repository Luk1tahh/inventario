import React, { useState } from 'react'

const AddElement = () => {
  const [step, setStep] = useState(0) // 0: nada, 1: nombre, 2:cantidad
  const [nomb, setNomb] = useState("")
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
    <div className='justify-center'>
      { step === 0 && ( <button onClick={add} className='bg-blue-600 rounded-3xl p-4 hover:bg-blue-500'> AÑADIR ELEMENTO </button> ) }

      { step === 1 && (
        <input 
          type="text"
          placeholder='Nombre...'
          value={nomb} 
          onChange={ (e) => setNomb(e.target.value) } // se actualiza cada que es escribe
          onKeyDown={ (e) => e.key === 'Enter' && add() } // al tocar ENTER ejecuta la funcion
          className='bg-blue-800 text-white rounded-3xl p-4'
        />
      ) }

      { step === 2 && (
        <input 
          type="number"
          placeholder='Cantidad...' 
          value={cant}
          onChange={ (e) => setCant(e.target.value) }
          onKeyDown={ (e) => e.key === "Enter" && add() }
          className='bg-blue-800 text-white rounded-3xl p-4'
        />
      ) }
      
      <div className='my-4 w-max'>
        { items.map( (item,i) => (
          <div key={i} className='bg-gray-400 font-black rounded-4xl p-4 my-2'>
            <span> {item.nomb} </span>
            <span className='font-semibold'> X {item.cant} </span>
          </div>
        ) ) }
      </div>
    </div>
  )
}

export default AddElement
