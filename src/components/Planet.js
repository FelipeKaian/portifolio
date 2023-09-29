import { useEffect, useState } from 'react';
import { OrbitationTypes } from '../Utils';

function Planet({
  color,
  width,
  height,
  z,
  left,
  top,
  index,
  rotationSpeed,
  setRotationSpeed,
  selectPlanet,
  text,
  img,
  link,
  setProjectHovered
}) {
  const [isHover, setIsHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => {
        selectPlanet(index);
        setIsSelected(true);
        setTimeout(()=>{
          window.open(link);
          setIsSelected(false);
          selectPlanet(null);
        },1000)
      }}
      onMouseLeave={() => {
        if (rotationSpeed !== OrbitationTypes.fast) {
          setRotationSpeed(OrbitationTypes.normal);
          setIsHover(false);
          setProjectHovered(false);
        }
      }}
      onMouseEnter={() => {
        if (rotationSpeed !== OrbitationTypes.fast) {
          setRotationSpeed(OrbitationTypes.slow);
          setIsHover(true);
          setProjectHovered(true);
        }
      }}
      style={{
        backgroundSize: width + 'vw',

        transition: '1s transform',
        transform: isSelected
          ? 'scale(4)'
          : isHover
          ? 'scale(1.3)'
          : 'scale(1)',
        position: 'absolute',
        left: left + '%',
        top: +top+'%',
        zIndex: z,
        marginTop: '20vh',
        width: width + 'vw',
        height: height + 'vw',
        backgroundColor: color,
        cursor: 'pointer',
        boxShadow:
          'rgba(255,255,255, 0.2) 0px 23px 25px 0px inset, rgba(255,255,255, 0.1) 0px 79px 40px 0px inset, rgba(0, 0, 0, 0.2) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.2) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset' +
          (isHover ? ', rgba(255,255,255, 1) 0px 0px 40px 0px' : ''),
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: width / 10 + 'vw',
      }}
    >
      <h1
        style={{
          top: -(width / 2) + 'vw',
          position: 'absolute',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontFamily: 'verdana',
          fontSize: width / 5 + 'vw',
          fontWeight: '700',
          color: '#f5f5f5',
          textShadow: isSelected
            ? `0px 0.25px 0px #919191,
            0px 0.5px 0px #919191,
            0px 0.75px 0px #919191,
            0px 1px 0px #919191,
            0px 1.25px 0px #919191,
            0px 1.5px 0px #919191,
            0px 1.75px 0px #919191,
            0px 2px 0px #919191,
            0px 2.25px 0px #919191,
            0px 2.5px 0px #919191
            `
            : `0px 1px 0px #919191,
             0px 2px 0px #919191,
             0px 3px 0px #919191,
             0px 4px 0px #919191,
             0px 5px 0px #919191,
             0px 6px 0px #919191,
             0px 7px 0px #919191,
             0px 8px 0px #919191`,
        }}
      >
        {text}
      </h1>
      <div style={{display:'flex',justifyContent:"center"}}>
        <img src={img} width={(width*15)+'vw'}></img>
      </div>
    </div>
  );
}

export default Planet;
