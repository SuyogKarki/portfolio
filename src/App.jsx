import React, { useState, useEffect } from 'react';

import { Home, About, Portfolio, Contact } from './container';
import { Navbar } from './components';
import './App.scss';
import { PacmanLoader } from 'react-spinners';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className='app'>
      {loading ? (
        <div className='app__loader'>
          <PacmanLoader loading={loading} size={30} color={'#24cff4'} />
        </div>
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
