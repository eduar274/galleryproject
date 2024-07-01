import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Cat1 from './components/Cat1';
import Cat2 from './components/Cat2';
import Cat3 from './components/Cat3';
import Cat4 from './components/Cat4';
import Cat5 from './components/Cat5';
import Cat6 from './components/Cat6';
function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galería</h1>
      </div>
      <Routes>
        <Route path="/cat1" element={<Cat1 className="image-size" />}/>
        <Route path="/cat2" element={<Cat2 className="image-size" />}/>
        <Route path="/cat3" element={<Cat3 className="image-size" />}/>
        <Route path="/cat4" element={<Cat4 className="image-size" />}/>
        <Route path="/cat5" element={<Cat5 className="image-size" />}/>
        <Route path="/cat6" element={<Cat6 className="image-size" />}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
