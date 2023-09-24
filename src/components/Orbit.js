import { useEffect, useState } from 'react';
import { OrbitationTypes } from '../Utils';
import Planet from './Planet';
import Sun from './Sun';

function Orbit({ planets }) {
  const [rotation, setRotation] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(OrbitationTypes.normal);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(null);

  const [mouse, setMouse] = useState(null);

  const selectPlanet = (i) => {
    if (selectedPlanetIndex === null) {
      setSelectedPlanetIndex(i);
    } else {
      setSelectedPlanetIndex(null);
      setRotation(rotation + rotationSpeed);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setMouse(e);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (selectedPlanetIndex === null) {
        setRotation((prevRotation) => prevRotation + rotationSpeed);
      }
    }, 0);
  }, [rotation, rotationSpeed, selectedPlanetIndex]);

  return (
    <div onClick={() => {}}>
      <div
        style={{
          width: '80vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Sun
          mouse={mouse}
          rotationSpeed={rotationSpeed}
          setRotationSpeed={setRotationSpeed}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh',
          width: '70vw',
          overflow: 'hidden',
        }}
      >
        {planets.map((p, i) => {
          let l = planets.length;
          let a = ((rotation + (360 / l) * i) * Math.PI) / 180;
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
              width={7 + Math.cos(a - 90) * 4}
              height={7 + Math.cos(a - 90) * 4}
              top={25}
              z={Math.floor(Math.sin(a) * 10)}
              left={45 + Math.cos(a) * 25}
              mouse={mouse}
              link={p.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Orbit;
