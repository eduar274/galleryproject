import React from 'react'
import cat2 from '../images/cat2.jpg'

const Cat2 = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cat2} alt="gato2" className="image2"/>
    </div>
  )
}

export default Cat2