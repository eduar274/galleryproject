import React from 'react'
import cat3 from '../images/cat3.png'

const Cat3 = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cat3} alt="gato3" className="image3"/>
    </div>
  )
}

export default Cat3