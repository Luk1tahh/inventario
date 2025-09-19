import React, { useState } from 'react'

const AddSection = () => {
  const [ step, setStep ] = useState(0) // 0: nada 1: nombre.. 
  const [ nom, setNom ] = useState('')

  const add = () => {
    if ( step === 0 && ('') ){
      <input
        type='text'
        placeholder='Nombre...'
        onChange={ a }
      />
    } else if ( step === 1 && ('') ) {

    } }
  
  return (
    <div className='bg-red-500'>
      
    </div>
  )
}

export default AddSection
