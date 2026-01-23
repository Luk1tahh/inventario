import React from 'react'
import CargaProds from '../sections/cargaProds/CargaProds'
import NewSection from '../sections/cargaSection/NewSection'
import NewProd from '../sections/cargaProduc/NewProd'
import NewSectionFB from '../sections/cargaSection/NewSectionFB'

const Home = () => {
  return (
    <div className='min-h-screen'>
      {/* <CargaProds /> */}
      {/* <NewSection /> */}
      <NewSectionFB />
      {/* <NewProd /> */}
    </div>
  )
}

export default Home
