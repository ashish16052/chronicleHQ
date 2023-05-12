import React from 'react'
import './Rightcard.scss'
import Card from '../Card/Card'
import Scroll from '../Scroll/Scroll'

const Rightcard = () => {
  const cardArr = [
    {
      CardTitle: 'A keyboard first experience.',
      CardDescription: 'Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!'
    }
  ]
  return (
    <div className='right-card'>
      {
        cardArr.map((card) => (
          <Card CardTitle={card.CardTitle} CardDescription={card.CardDescription} />
        ))
      }
      <Scroll/>
    </div>
  )
}

export default Rightcard