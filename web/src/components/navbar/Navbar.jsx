import React from 'react'
import Mode from '../mode/Mode'
import logoW from '../../assets/icons/archiveWhite.svg'
import logoB from '../../assets/icons/archiveBlack.svg'

const Navbar = () => {
  return (
    <div>

      <div className='bg-blue-400 dark:bg-blue-900 min-w-full flex justify-center py-8'>
        <div className=''>
          {/* <span className='text-white font-bold'> GOLDMUND </span> */}
          <img src={logoW} />
        </div>

        {/* <div className='fixed top-4 right-6'>
          <Mode />
        </div> */}
      </div>

    </div>
  )
}

export default Navbar
