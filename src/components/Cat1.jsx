import React from 'react'
import cat1 from '../images/cat1.jpg'

const Cat1 = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cat1} alt="gato1" className="image"/>
    </div>
  )
}

export default Cat1