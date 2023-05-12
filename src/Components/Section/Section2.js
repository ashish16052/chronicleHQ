import React from 'react'
import Leftcard from '../Leftcard/Leftcard'
import Rigthcard from '../Rightcard/Rightcard'
import './Section.scss'

const Section2 = () => {
  return (
    <div className='section-2'>
    <div className='scroll-card'>
      <Leftcard />
      <Rigthcard />
    </div>
    </div>
  )
}

export default Section2