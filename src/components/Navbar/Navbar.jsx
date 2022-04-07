import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  const variants = {
    open: { top: '0' },
    close: { top: '-100vh' },
  };
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='logo'>
        <Link to='/'>Suyog</Link>
      </div>
      <ul className='app__navbar-links'>
        <li className='app__navbar-link'>
          <div />
          <Link to='/'>Home</Link>
        </li>
        {['about', 'portfolio', 'contact'].map(item => (
          <li key={`link-${item}`} className='app__navbar-link'>
            <div />
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className='navbar-menu'>
        <div className={`hamburger-btn ${toggle ? 'open' : ''}`} onClick={() => setToggle(prevToggle => !prevToggle)}>
          <div className='line'></div>
        </div>

        <motion.div className='mobile-menu' initial={false} variants={variants} animate={toggle ? 'open' : 'close'} transition={{ duration: 0.85 }}>
          <ul>
            <li className='app__navbar-link'>
              <div />
              <Link to='/' onClick={() => setToggle(false)}>
                Home
              </Link>
            </li>
            {['about', 'portfolio', 'contact'].map(item => (
              <li key={`link-${item}`} className='app__navbar-link'>
                <div />
                <Link to={`/${item}`} onClick={() => setToggle(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
