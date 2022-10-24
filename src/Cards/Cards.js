import React from 'react'
import './Cards.css'
import ellipsis from '../Assets/images/icon-ellipsis.svg'

function Cards({ image, color, type, current, previous }) {
  return (
    <section className={`cards ${color}`}>
      <div className='cardsImage'>
        <img src={image} alt='Icones' />
      </div>
      <div className='cardsContant'>
        <div className='typeContainer'>
          <h2>{type}</h2>
          <img src={ellipsis} alt='Simbolo elipsis'/>
        </div>
        <h3>{current}hrs</h3>
          <p>Last Week - {previous}hrs</p>
      </div>
    </section>
  )
}

export default Cards