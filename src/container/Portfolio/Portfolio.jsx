import React from 'react';
import { Project } from '../../constants';
import './Portfolio.scss';

const data = [
  { id: 1, name: 'Project1', imgURL: Project, sourceUrl: '', demoUrl: '' },
  { id: 2, name: 'Project2', imgURL: Project, sourceUrl: '', demoUrl: '' },
  { id: 3, name: 'Project3', imgURL: Project, sourceUrl: '', demoUrl: '' },
  { id: 4, name: 'Project4', imgURL: Project, sourceUrl: '', demoUrl: '' },
  { id: 5, name: 'Project5', imgURL: Project, sourceUrl: '', demoUrl: '' },
  { id: 6, name: 'Project6', imgURL: Project, sourceUrl: '', demoUrl: '' },
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
                <a href={item.demoUrl}>See Demo</a>
                <a href={item.sourceUrl}>Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
