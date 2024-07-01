import React from 'react'
import { Link } from 'react-router-dom';
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import Cat5 from './Cat5';
import Cat6 from './Cat6';

const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to="/cat1" className="links">
            <figure className="image-size">
              <Cat1 />
              <figcaption>Cat1</figcaption>
            </figure>
        </Link>
        <Link to="/cat2" className="links">
            <figure className="image-size">
              <Cat2 />
              <figcaption>Cat2</figcaption>
            </figure>
        </Link>
        <Link to="/cat3" className="links">
            <figure className="image-size">
              <Cat3 />
              <figcaption>Cat3</figcaption>
            </figure>
        </Link>
        <Link to="/cat4" className="links">
            <figure className="image-size">
              <Cat4 />
              <figcaption>Cat4</figcaption>
            </figure>
        </Link>
        <Link to="/cat5" className="links">
            <figure className="image-size">
              <Cat5 />
              <figcaption>Cat5</figcaption>
            </figure>
        </Link>
        <Link to="/cat6" className="links">
            <figure className="image-size">
              <Cat6 />
              <figcaption>Cat6</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation