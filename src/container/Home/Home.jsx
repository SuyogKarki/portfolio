import React from 'react';
import { Profile } from '../../constants';
import './Home.scss';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='app__header'>
      <div className='app__header-content'>
        <div className='header-title'>
          <p>Hello There, my name is</p>
          <h1>SUYOG KARKI</h1>
          <h2>I develop Websites and WebApps</h2>
        </div>
        <div className='header-description'>
          <p>
            I am a professional web developer <br />
            with <span>FRONTEND and BACKEND</span> skills based in Nepal.
          </p>
        </div>
        <div className='header-button'>
          <button type='button' onClick={() => navigate('/contact')}>
            Hire Me
          </button>
        </div>
      </div>
      <div className='app__header-image'>
        <img src={Profile} alt='Profile' />
      </div>
    </div>
  );
}

export default Home;
