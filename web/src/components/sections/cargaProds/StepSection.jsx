import React from 'react'

const StepSection = ( { sec, setSec, onNext } ) => {
  return (
    <div className='flex justify-center'>

      <div>
        <span className='bg-blue-400 p-4 rounded-2xl text-white font-bold'> Nueva Sección </span>

        <input
          value={sec}
          placeholder='Nombre de la sección...'
          onChange={ (e) => setSec(e.target.value) }
          className={`p-2 border-2 rounded-2xl outline-none ${sec ? 'border-blue-500' : 'border-blue-400'} `}
        />

        <div className='flex justify-center my-5'>
          <button onClick={onNext} className='bg-blue-600 p-4 rounded-2xl text-white' > Continuar </button>
        </div>

      </div>

    </div>
  )
}

export default StepSection