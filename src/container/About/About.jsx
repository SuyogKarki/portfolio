import React, { useEffect } from 'react';
import './About.scss';
import SVG3DTAGCloud from '3d-word-cloud';

function About() {
  useEffect(() => {
    var entries = [
      { label: 'HTML' },
      { label: 'CSS' },
      { label: 'Javascript' },
      { label: 'Bootstrap' },
      { label: 'Jquery' },
      { label: 'React' },
      { label: 'Angular' },
      { label: 'Vue' },
      { label: 'VsCode' },
      { label: 'Python' },
      { label: 'Django' },
      { label: 'Flask' },
      { label: 'Jupyter' },
      { label: 'ExpressJs' },
      { label: 'NodeJs' },
      { label: 'Socket.io' },
      { label: 'MongoDB' },
      { label: 'GraphQL' },
      { label: 'PHP' },
      { label: 'JAVA' },
      { label: 'VISUAL BASIC' },
    ];
    var settings = {
      entries: entries,
      width: 700,
      height: 630,
      radius: '65%',
      radiusMin: 75,
      bgDraw: true,
      bgColor: '#071028',
      opacityOver: 1.0,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 2,
      fontFamily: 'Oswald, Arial, sans-serif',
      fontSize: '16',
      fontColor: '#24CFF4',
      fontWeight: 'normal', //bold
      fontStyle: 'normal', //italic
      fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      fontToUpperCase: true,
      tooltipFontFamily: 'Oswald, Arial, sans-serif',
      tooltipFontSize: '11',
      tooltipFontColor: '#fff',
      tooltipFontWeight: 'normal', //bold
      tooltipFontStyle: 'normal', //italic
      tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      tooltipFontToUpperCase: false,
      tooltipTextAnchor: 'left',
      tooltipDiffX: 0,
      tooltipDiffY: 10,
    };
    var svg3DTagCloud = new SVG3DTAGCloud(document.getElementById('cloud'), settings);
  }, []);

  return (
    <div className='app__about'>
      <div className='app__about-content'>
        <div className='about-title'>
          <h1>About Me</h1>
        </div>
        <div className='about-description'>
          <p>I am a Full Stack Web Developer based in Nepal. I have a great passion for creating beautiful websites and hooking it up with some great backend logic. </p>
          <p>
            I have about a year of experience as a web developer. I have little experience but I have a great passion for learning and imporving my skills. I have traits like problem solving,
            independent, well organized which every good developer should have.
          </p>
          <p>
            Throughout my small journey to this point. I have been bombarded with a variety of technology used for web development. I am a quick learner and I can quickly adapt to any new technology.
            I mainly focus on creating small, to medium sized web apps that are responsive and user interactive.
          </p>
        </div>
      </div>
      <div className='app__about-cloud'>
        <div id='cloud'>
          <svg3DTagCloud />
        </div>
      </div>
    </div>
  );
}

export default About;
