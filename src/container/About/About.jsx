import React, { useEffect } from 'react';
import './About.scss';
import SVG3DTAGCloud from '3d-word-cloud';
import $ from 'jquery';

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
      width: 480,
      height: 480,
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
      fontSize: '15',
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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
          <p>
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.{' '}
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
