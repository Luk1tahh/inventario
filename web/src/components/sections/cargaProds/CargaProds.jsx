import React, { useState } from 'react'
import StepSection from './StepSection'
import StepProds from './StepProds'
import StepCant from './StepCant'
import CardsInv from './CardsInv'

const CargaProds = () => {
  const [step, setStep] = useState(0) // 0: agregarSeccion 1:nombreProd 2:cantidad 3:pushArray 4:seccionLista
  const [sec, setSec] = useState()
  const [nom, setNom] = useState()
  const [cant, setCant] = useState()
  const [productos, setProductos] = useState([])

// Cambio de paso
  const nextStep = () => {
    setStep(prev => prev + 1)
  }

// Agregado de prods
  const addProduct = () => {
    const newProduct = {
      nombre: nom,
      cantidad: cant ?? null
    }
  setProductos(prev => [...prev, newProduct])

// Limpia inputs
    setNom('')
    setCant('')
    setStep(1) // Carga otro producto
  }
  
  return (
    <div className='min-h-screen py-12'>
      {step === 0 && (
        <StepSection
          sec={sec}
          setSec={setSec}
          onNext={nextStep}
        />
      ) }

      {step === 1 && (
        <StepProds
          nom={nom}
          setNom={setNom}
          onNext={nextStep}
        />
      ) }

      {step === 2 && (
        <StepCant
          cant={cant}
          setCant={setCant}
          onAdd={addProduct}
        />
      ) }

      <div className='flex justify-center py-12'>
        <CardsInv
          sec={sec}
          productos={productos}
        />
      </div>

    </div>
  )
}

export default CargaProds
