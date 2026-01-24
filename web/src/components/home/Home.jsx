import React from 'react'
import CargaProds from '../sections/cargaProds/CargaProds'
import NewSection from '../sections/cargaSection/NewSection'
import NewProd from '../sections/cargaProduc/NewProd'
import NewSectionFB from '../sections/cargaSection/NewSectionFB'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-around'>
        <NewSectionFB />
        <NewProd />
      </div>
    </div>
  )
}

export default Home
