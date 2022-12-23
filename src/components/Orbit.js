import { useEffect, useState } from 'react';
import { OrbitationTypes } from '../Utils';
import Planet from './Planet';
import Sun from './Sun';

function Orbit({ planets }) {

  const [rotation, setRotation] = useState(0);

  const [rotationSpeed, setRotationSpeed] = useState(OrbitationTypes.normal);

  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(null);

  const selectPlanet = (i) => {
    if (selectedPlanetIndex === null) {
      setSelectedPlanetIndex(i);
    } else {
      setSelectedPlanetIndex(null);
      setRotation(rotation + rotationSpeed);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (selectedPlanetIndex === null) {
        setRotation(rotation + rotationSpeed);
      }
    }, 5);
  }, [rotation]);

  return (
    <div>
      <div
        style={{
          width: '80vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Sun style={{ position: 'absolute' }} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh',
          width: '80vw',
        }}
      >
        {planets.map((p, i) => {
          let l = planets.length;
          let a = ((rotation + ((360/(l)) * i))*Math.PI)/180;
          return (
            <Planet
              text={p.text}
              key={i}
              rotationSpeed={rotationSpeed}
              setRotationSpeed={setRotationSpeed}
              selectPlanet={selectPlanet}
              index={i}
              color={p.color}
              img={p.img}
              width={10 + Math.cos(a - 90) * 5}
              height={10 + Math.cos(a - 90) * 5}
              top={20}
              z={Math.floor(Math.sin(a) * 10)}
              left={45 + Math.cos(a) * (35)}
            >
            </Planet>
          );
        })}
      </div>
    </div>
  );
}

export default Orbit;
