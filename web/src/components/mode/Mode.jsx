import React, { useState } from 'react'
import sun from '../../assets/img/sunWhite.svg'
import moon from '../../assets/img/moon.svg'

const Mode = () => {
  const [isDark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!isDark)
  }

  return (
    <>
      <button onClick={toggleTheme}>
        <img src={ isDark ? sun : moon }/>
      </button>
    </>
  )
}

export default Mode