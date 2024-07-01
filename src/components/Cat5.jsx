import React from 'react'
import cat5 from '../images/cat5.jpg'

const Cat5 = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cat5} alt="gato5" className="image5"/>
    </div>
  )
}

export default Cat5