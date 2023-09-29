import { useState, useEffect } from 'react';
import { OrbitationTypes } from '../Utils';

function Sun({ setRotationSpeed, mouse, rotationSpeed,projectHovered }) {
  const [isHover, setIsHover] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const offsetRange = 5;
  const mouseOffsetX = mouse
    ? (offsetRange * mouse?.clientX) / window.innerWidth - offsetRange / 2
    : 0;

  const mouseOffsetY = mouse
    ? (offsetRange * mouse?.clientY) / window.innerHeight - offsetRange / 2
    : 0;
  return (
    <div
      onClick={() => {
        setBlink(true);
        setTimeout(() => {
          setBlink(false);
        }, 100);
      }}
      // onMouseLeave={() => {
      //   if (rotationSpeed !== OrbitationTypes.fast) {
      //     setRotationSpeed(OrbitationTypes.normal);
      //     setIsHover(false);
      //   }
      // }}
      // onMouseEnter={() => {
      //   if (rotationSpeed !== OrbitationTypes.fast) {
      //     setRotationSpeed(OrbitationTypes.slow);
      //     setIsHover(true);
      //   }
      // }}
      style={{
        // backgroundImage:
        //   'url(https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/2019/10/T-03.gif)',
        // backgroundSize:"30vw",
        zIndex: 0,
        position: 'absolute',
        marginTop: '30vh',
        width: '20vw',
        height: '20vw',
        backgroundColor: '#ffa716',
        boxShadow:
          'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(255,255,255, 0.1) 0px -2px 1px, rgba(255,255,255, 0.1) 0px -4px 2px, rgba(255,255,255, 0.1) 0px -8px 4px, rgba(255,255,255, 0.1) 0px -16px 8px, rgba(255,255,255, 0.1) 0px -32px 16px, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.1) 0px 2px 1px, rgba(0, 0, 0, 0.1) 0px 4px 2px, rgba(0, 0, 0, 0.1) 0px 8px 4px, rgba(0, 0, 0, 0.1) 0px 16px 8px, rgba(0, 0, 0, 0.1) 0px 32px 16px, rgba(255, 255, 0, 0.5) 0px 0px 100px 10px, rgba(255, 100, 0, 1) 0px 0px 500px 10px',
        borderRadius: '100%',
      }}
    >
      <h1
        style={{
          position: 'absolute',
          top: "-10vw",
          left: "-15vw",
          textAlign: 'center',
          width: '50vw',
          textTransform: 'uppercase',
          fontFamily: 'verdana',
          fontSize: '5vw',
          fontWeight: '700',
          color: '#f5f5f5',
          textShadow: `1px 1px 1px #919191,
             1px 2px 1px #919191,
             1px 3px 1px #919191,
             1px 4px 1px #919191,
             1px 5px 1px #919191,
             1px 6px 1px #919191,
             1px 7px 1px #919191,
             1px 8px 1px #919191`,
        }}
      >
        {'my projects'}
      </h1>
      <h1
        style={{
          top: 1 + mouseOffsetY + 'vw',
          left: blink ?3.5 + mouseOffsetX + 'vw':3 + mouseOffsetX + 'vw',
          position: 'absolute',
          textTransform: 'uppercase',
          fontFamily: 'verdana',
          fontSize: 7 + 'vw',
          fontWeight: '700',
          color: 'rgba(0,0,0,0.4)',
          textAlign: 'center',
        }}
      >
        {blink ? '-' : '●'}
      </h1>
      <h1
        style={{
          top: 1 + mouseOffsetY + 'vw',
          left: blink ?13.5 + mouseOffsetX + 'vw':13 + mouseOffsetX + 'vw',
          position: 'absolute',
          textTransform: 'uppercase',
          fontFamily: 'verdana',
          fontSize: 7 + 'vw',
          fontWeight: '700',
          color: 'rgba(0,0,0,0.4)',
        }}
      >
        {blink ? '-' : '●'}
      </h1>
      <h1
        style={{
          top: projectHovered?11 + mouseOffsetY + 'vw':8.5 + mouseOffsetY + 'vw',
          left: projectHovered?9 + mouseOffsetX + 'vw' :10 + mouseOffsetX + 'vw',
          transform: projectHovered?'' :'rotateZ(90deg)',
          position: 'absolute',
          textTransform: 'uppercase',
          fontSize: projectHovered? '2vw': '4vw',
          fontWeight: '100',
          color: 'rgba(0,0,0,0.4)',
          textAlign: 'center',
          fontFamily: 'Segoe UI Emoji',
        }}
      >
        {projectHovered ? '●': ')'}
      </h1>
    </div>
  );
}

export default Sun;
