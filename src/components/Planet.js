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
}) {
  const [isHover, setIsHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => {
        selectPlanet(index);
        setIsSelected(!isSelected);
      }}
      onMouseLeave={() => {
        if (rotationSpeed !== OrbitationTypes.fast) {
          setRotationSpeed(OrbitationTypes.normal);
          setIsHover(false);
        }
      }}
      onMouseEnter={() => {
        if (rotationSpeed !== OrbitationTypes.fast) {
          setRotationSpeed(OrbitationTypes.slow);
          setIsHover(true);
        }
      }}
      style={{
        backgroundSize:width + 'vw',
        backgroundImage:
            img?'url('+img+')':"",
        transition: isSelected ? '1s' : '0s',
        transform: isSelected ? 'scale(5)' : 'scale(1)',
        position: 'absolute',
        left: left + '%',
        top: top + '%',
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
          top: -(width/2)+'vw',
          position: 'absolute',
          textTransform: 'uppercase',
          fontFamily: 'verdana',
          fontSize: (width/5)+'vw',
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
        {text}
      </h1>
    </div>
  );
}

export default Planet;
