import React from 'react'
import NewProd from '../sections/cargaProduc/NewProd'
import NewSection from '../sections/cargaSection/NewSection'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-around pt-12'>
        <NewSection />
        <NewProd />
      </div>
    </div>
  )
}

export default Home
