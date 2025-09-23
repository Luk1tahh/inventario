import React, { useState } from 'react'

const AddSection = () => {
  const [ step, setStep ] = useState(0) // 0: nada 1: nombre.. 
  const [ nom, setNom ] = useState('')
  const [ item,setItem ] = useState('')

  const add = () => {
    if ( step === 0 && nom.trim() !== '' ){
      setStep(1)
    } else if ( step === 1 && nom.trim() !== '' ) {
      setItem( [...item, {nom}] )
      setNom('')
      setStep(0)
    } }
  
  return (
    <div className='bg-red-500 w-max'>
      { step === 0 && ( <button onClick={ add } className='bg-green-500'> AÑADIR SECCION </button> ) }

      { step === 1 && (
        <input
          type='text'
          placeholder='Nombre de seccion...'
          value={nom}
          onChange={ (e) }
        />
      ) }

    </div>
  )
}

export default AddSection
