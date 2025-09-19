import React from 'react'
import AddSection from '../cards/AddSection'
import AddElement from '../cards/AddElement'

const Home = () => {
  return (
    <div className='bg-black h-dvw'>
      <div className='bg-amber-300 p-6'> 
        <AddSection />
      </div>
      <div className='bg-red-500 p-6'>
          <AddElement />
      </div>
    </div>
  )
}

export default Home
