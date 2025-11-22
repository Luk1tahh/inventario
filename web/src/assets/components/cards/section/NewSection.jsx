import React, { useState } from 'react'

const NewSection = () => {
  const [step, setStep] = useState (0) //0-nada 1-nombreDeSeccion 2-AgregarObjeto
  const [nomb, setNomb] = useState()
  const [obj, setObj] = useState()
  const [sec, setSec] = useState()

  if(step == 0){
    setStep (step == 1)
  } if (step == 1) {

  }

    return (
    <div className='text-white'> NewSection </div>
  )
}

export default NewSection