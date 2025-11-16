import React from 'react'
import AddSection from '../cards/AddSection'
import NewSection from '../cards/NewSection'

const Home = () => {
  return (
    <div className='bg-black min-h-screen'>

      <div className='bg-amber-300 flex justify-center p-6'> 
        {/* <AddSection /> */}
        <NewSection />
      </div>
      
    </div>
  )
}

export default Home
