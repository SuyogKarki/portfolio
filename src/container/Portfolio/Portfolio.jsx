import React from 'react';
import { Project1, Project2, Project3, Project4, Project5, Project6 } from '../../constants';
import './Portfolio.scss';

const data = [
  { id: 1, name: 'Google Clone', imgURL: Project1, sourceUrl: 'https://github.com/SuyogKarki/googl', demoUrl: 'https://googlse.netlify.app' },
  { id: 2, name: 'Recipe App', imgURL: Project2, sourceUrl: 'https://github.com/SuyogKarki/delico', demoUrl: 'https://delico.netlify.app' },
  { id: 3, name: 'Profile Website', imgURL: Project3, sourceUrl: 'https://github.com/SuyogKarki/restaurant', demoUrl: 'https://gerichti.netlify.app' },
  { id: 4, name: 'Netflix Clone', imgURL: Project4, sourceUrl: 'https://github.com/SuyogKarki/netflix', demoUrl: 'https://vast-falls-39829.herokuapp.com' },
  { id: 5, name: 'Nft trader', imgURL: Project5, sourceUrl: 'https://github.com/SuyogKarki/nft', demoUrl: 'https://nfttraders.netlify.app' },
  { id: 6, name: 'Statelast', imgURL: Project6, sourceUrl: 'https://github.com/SuyogKarki/realestate', demoUrl: 'https://realestate-livid.vercel.app' },
];

function Portfolio() {
  return (
    <div className='app__portfolio'>
      <div className='app__portfolio-title'>
        <h1>Web Developer Portfolio</h1>
        <h4>Come, check out my best projects live in action</h4>
      </div>
      <div className='app__project-container'>
        <div className='app__portfolio-projects'>
          {data.map(item => (
            <div id={item.id} className='portfolio-project'>
              <img src={item.imgURL} alt='' />
              <div className='project_details'>
                <h1>{item.name}</h1>
                <a href={item.demoUrl} target='_blank' rel='noreferrer'>
                  See Demo
                </a>
                <a href={item.sourceUrl} target='_blank' rel='noreferrer'>
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
