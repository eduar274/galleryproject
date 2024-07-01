import React from 'react'
import cat4 from '../images/cat4.jpg'

const Cat4 = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cat4} alt="gato4" className="image2"/>
    </div>
  )
}

export default Cat4