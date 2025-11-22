import React from 'react'
import InventoryManager from '../cards/addSection/InventoryManager'
import NewSection from '../cards/section/NewSection'

const Home = () => {
  return (
    <div className='bg-black min-h-screen'>

      <div className='flex justify-center p-6'> 
        {/* <InventoryManager /> */}
        <NewSection />
      </div>
      
    </div>
  )
}

export default Home
