import React from 'react'
import cat6 from '../images/cat6.jpg'

const Cat6 = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cat6} alt="gato6" className="image5"/>
    </div>
  )
}

export default Cat6