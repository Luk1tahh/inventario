import React, { useState } from 'react'
import CardProd from './CardProd'

const NewProd = () => {
    const [step, setStep] = useState(0) // 0:agregarProd 1:agregarCant 2:push
    const [nom, setNom] = useState()
    const [cant, setCant] = useState()
    const [prod, setProd] = useState([])

    const nextStep = () => {
      setStep(prev => prev + 1)
    }

    const addProd = () => {
      const newProd = {
        nombre: nom,
        cantidad: cant ?? null 
      }
      setProd( prev => [...prev, newProd] )
      setNom('')
      setCant('')
      setStep(0)
    }
  return (
    <div className='flex justify-center'>

      <div className='flex'>
        { step === 0 &&(
          <>
          <div>
            <input placeholder='Agregar Producto...' value={nom} onChange={ (e) => setNom(e.target.value) }/>
          </div>
          
          <button onClick={nextStep}> Agregar </button>
          </>
        ) }

        { step === 1 &&(
          <>
            <div>
              <input type='number' placeholder='Cantidad...' value={cant} onChange={ (e) => setCant(e.target.value) }/>
            </div>

            <button onClick={addProd}> Agregar </button>
          </>
        ) }

        <div className='flex'>
          <CardProd nomProd={nom} cant={cant}/>
        </div>
        
      </div>

    </div>
  )
}

export default NewProd